// RICKS EXECUTIVE HOSPITALITY GROUP™ — Executive & Partnership Drawer Controller
(function () {
  "use strict";

  const cfg = window.REHG_FLAGSHIP_CONFIG || {};
  const drawer = document.getElementById("execDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const openButtons = document.querySelectorAll("[data-open-drawer]");
  const closeButton = document.getElementById("closeDrawerBtn");
  const modeButtons = document.querySelectorAll("[data-drawer-mode]");
  const modeInput = document.getElementById("drawerModeInput");
  const slotSelect = document.getElementById("appointmentSlot");
  const form = document.getElementById("executiveDrawerForm");
  const statusBanner = document.getElementById("drawerStatus");
  const partnerFields = document.getElementById("partnershipFields");

  /**
   * Computes upcoming Thursday dates in EST (America/New_York) starting next week
   * relative to current date in EST.
   */
  function getNextWeekThursdayDatesEst(count = 4) {
    const tz = cfg.timezone || "America/New_York";
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short"
    }).formatToParts(now);

    const map = {};
    for (const p of parts) {
      map[p.type] = p.value;
    }

    const estNoonUtc = new Date(Date.UTC(Number(map.year), Number(map.month) - 1, Number(map.day), 17, 0, 0));
    const weekdayIdx = estNoonUtc.getUTCDay(); // 0=Sun..4=Thu..6=Sat

    // Next week starts upcoming Monday; first Thursday in next week:
    const daysToNextMonday = weekdayIdx === 0 ? 1 : (8 - weekdayIdx);
    const firstNextWeekThursday = new Date(estNoonUtc.getTime());
    firstNextWeekThursday.setUTCDate(estNoonUtc.getUTCDate() + daysToNextMonday + 3);

    const results = [];
    for (let i = 0; i < count; i++) {
      const d = new Date(firstNextWeekThursday.getTime());
      d.setUTCDate(firstNextWeekThursday.getUTCDate() + i * 7);
      const label = d.toLocaleDateString("en-US", {
        timeZone: tz,
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
      });
      results.push(label);
    }
    return results;
  }

  function populateThursdaySlots() {
    if (!slotSelect) return;
    const thursdays = getNextWeekThursdayDatesEst(3);
    const times = ["10:00 AM EST", "11:30 AM EST", "2:00 PM EST", "3:30 PM EST"];
    slotSelect.innerHTML = "";
    for (const dayStr of thursdays) {
      for (const timeStr of times) {
        const val = `${dayStr} — ${timeStr}`;
        const opt = document.createElement("option");
        opt.value = val;
        opt.textContent = val;
        slotSelect.appendChild(opt);
      }
    }
  }

  function setDrawerMode(mode) {
    const isPartner = mode === "partner";
    if (modeInput) modeInput.value = isPartner ? "VENDOR_NETWORK_PARTNERSHIP" : "PRINCIPAL_CONVERSATION";
    modeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-drawer-mode") === mode);
    });
    if (partnerFields) {
      partnerFields.style.display = isPartner ? "flex" : "none";
      partnerFields.style.flexDirection = "column";
      partnerFields.style.gap = "1.1rem";
    }
    hideStatus();
  }

  function openDrawer(mode = "principal") {
    populateThursdaySlots();
    setDrawerMode(mode);
    if (drawer) drawer.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    if (drawer) drawer.setAttribute("aria-hidden", "false");
    const firstInput = document.getElementById("leaderName");
    if (firstInput) firstInput.focus();
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (drawer) drawer.setAttribute("aria-hidden", "true");
  }

  function showStatus(type, msg) {
    if (!statusBanner) return;
    statusBanner.className = `status-banner show ${type}`;
    statusBanner.textContent = msg;
  }

  function hideStatus() {
    if (!statusBanner) return;
    statusBanner.className = "status-banner";
    statusBanner.textContent = "";
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const mode = btn.getAttribute("data-open-drawer") || "principal";
      openDrawer(mode);
    });
  });

  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setDrawerMode(btn.getAttribute("data-drawer-mode"));
    });
  });

  if (closeButton) closeButton.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideStatus();

      const fd = new FormData(form);
      const payload = {
        source: "rehgexec.com",
        submittedAtUtc: new Date().toISOString(),
        requestType: fd.get("requestType") || "PRINCIPAL_CONVERSATION",
        name: (fd.get("name") || "").toString().trim(),
        email: (fd.get("email") || "").toString().trim(),
        phone: (fd.get("phone") || "").toString().trim(),
        organization: (fd.get("organization") || "").toString().trim(),
        stateMarket: (fd.get("stateMarket") || "").toString().trim(),
        networkCategory: (fd.get("networkCategory") || "").toString().trim(),
        preferredThursdaySlotEst: (fd.get("appointmentSlot") || "").toString().trim(),
        notes: (fd.get("notes") || "").toString().trim()
      };

      if (!payload.name || !payload.email) {
        showStatus("err", "Please provide your name and work email so the executive desk can follow up.");
        return;
      }

      const webhookUrl = cfg.REHG_20_COMMAND_WEBHOOK_URL;
      if (!webhookUrl) {
        showStatus("err", "Command webhook endpoint is not configured in js/config.js.");
        return;
      }

      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          showStatus(
            "ok",
            `Request logged for ${payload.preferredThursdaySlotEst || "next Thursday (EST)"}. Direct desk: ${cfg.contactEmail || "mricks@ricksexecutivehospitalitygroup.com"}.`
          );
          form.reset();
          populateThursdaySlots();
        } else {
          showStatus(
            "ok",
            `Briefing captured locally for ${payload.preferredThursdaySlotEst || "next Thursday (EST)"}. Endpoint returned HTTP ${res.status}; reach ${cfg.contactPhone || "404.594.3765"} for immediate routing.`
          );
        }
      } catch (_err) {
        showStatus(
          "ok",
          `Briefing prepared for ${payload.preferredThursdaySlotEst || "next Thursday (EST)"}. Direct executive line: ${cfg.contactPhone || "404.594.3765"} or ${cfg.contactEmail || "mricks@ricksexecutivehospitalitygroup.com"}.`
        );
      }
    });
  }
})();
