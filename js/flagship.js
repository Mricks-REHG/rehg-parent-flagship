/* ==========================================================================
   RICKS EXECUTIVE HOSPITALITY GROUP™ — Flagship Interactive Engine (V3)
   Domain: https://rehgexec.com | Repo: Mricks-REHG/rehg-parent-flagship
   ========================================================================== */
(function () {
  "use strict";

  const PRINCIPAL = Object.freeze({
    name: "Michael Ricks — Founder & CEO",
    email: "mricks@ricksexecutivehospitalitygroup.com",
    phone: "404.594.3765",
    domain: "https://rehgexec.com"
  });

  const CARBON_MODULES = [
    {
      id: "pos",
      title: "CARBON™ | POS",
      subtitle: "FRONT-OF-HOUSE & LIVE DEPLETION CORE",
      subdomain: "",
      image: "assets/rehg-carbon-pos-master.jpeg",
      brief: "Eliminates slow ticket entry, uncontrolled comp/void overrides, and blind back-end depletion during high-volume service. Connects frontline order flow directly into the CARBON™ | POS & Sovereign Portal spine with role-tier PIN governance."
    },
    {
      id: "sovereign-portal",
      title: "CARBON™ | SOVEREIGN PORTAL",
      subtitle: "OWNER & EXECUTIVE GOVERNANCE SUITE",
      subdomain: "https://portal.rehgexec.com",
      image: "assets/carbon-sovereign-portal.jpeg",
      brief: "Replaces fragmented spreadsheets and delayed end-of-month surprises with a unified owner governance view. Anchors executive oversight across multi-unit operations inside the CARBON™ | POS & Sovereign Portal spine."
    },
    {
      id: "digital-footprint",
      title: "CARBON™ | DIGITAL FOOTPRINT",
      subtitle: "BRAND AUTHORITY & CONVERSION ARCHITECTURE",
      subdomain: "https://rehgexec.com",
      image: "assets/carbon-web-vip.jpeg",
      brief: "Eliminates disjointed venue presence and leaky guest conversion paths with disciplined brand authority architecture aligned to real table, VIP, and operational demand across the CARBON™ ecosystem."
    },
    {
      id: "bar",
      title: "CARBON™ | BAR",
      subtitle: "POUR GUARDRAIL & BOTTLE DEPLETION SUITE",
      subdomain: "https://bar.rehgexec.com",
      image: "assets/carbon-bar-pos.jpeg",
      brief: "Targets 1:00 AM bar well drift, heavy pours, and untracked spirit depletion while bartenders stay three-deep. Feeds live pour discipline and bottle accountability straight into CARBON™ | POS & Sovereign Portal."
    },
    {
      id: "feeder",
      title: "CARBON™ | FEEDER",
      subtitle: "VIP, RESERVATIONS & MARKETING ROI SUITE",
      subdomain: "https://feeder.rehgexec.com",
      image: "assets/carbon-feeder-pos.jpeg",
      brief: "Eliminates unmeasured promotional spend and uneven dining/nightlife pacing by tying reservations, VIP flow, and local demand directly to real floor capacity and the CARBON™ | POS & Sovereign Portal spine."
    },
    {
      id: "kitchen",
      title: "CARBON™ | KITCHEN",
      subtitle: "COGS, RECIPE & PREP DEPLETION SUITE",
      subdomain: "https://kitchen.rehgexec.com",
      image: "assets/carbon-kitchen-pos.jpeg",
      brief: "Stops Friday-night protein trim drift, off-spec prep batches, and pass bottlenecks before food cost erodes margin. Syncs recipe specs and prep depletion with CARBON™ | POS & Sovereign Portal."
    },
    {
      id: "loss",
      title: "CARBON™ | LOSS",
      subtitle: "C-SUITE AUDIT & SHRINKAGE VAULT",
      subdomain: "https://loss.rehgexec.com",
      image: "assets/carbon-loss-pos.jpeg",
      brief: "Exposes variance anomalies, drawer/comp exceptions, and reconciliation gaps across shifts before shrinkage compounds. Operates as the forensic audit vault within the CARBON™ | POS & Sovereign Portal spine."
    }
  ];

  // ------------------------------------------------------------------------
  // 0. MOBILE NAVIGATION TOGGLE (<= 820px)
  // ------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById("mobileNavToggleBtn");
  const mobileNavPanel = document.getElementById("mobileNavPanel");

  if (mobileToggleBtn && mobileNavPanel) {
    mobileToggleBtn.addEventListener("click", () => {
      const expanded = mobileToggleBtn.getAttribute("aria-expanded") === "true";
      mobileToggleBtn.setAttribute("aria-expanded", String(!expanded));
      mobileNavPanel.classList.toggle("is-open", !expanded);
    });

    mobileNavPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggleBtn.setAttribute("aria-expanded", "false");
        mobileNavPanel.classList.remove("is-open");
      });
    });
  }

  // ------------------------------------------------------------------------
  // 1. SKYLINE CREST SCROLL & HOVER ILLUMINATION OVER OPEN WATER CORRIDOR
  // ------------------------------------------------------------------------
  const skylineSection = document.getElementById("coast-to-coast");
  const waterCrestBtn = document.getElementById("waterCorridorCrest");

  function syncSkylineCrest() {
    if (!skylineSection) return;
    const rect = skylineSection.getBoundingClientRect();
    const vh = window.innerHeight || 900;
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    const offsetPx = Math.round((progress - 0.5) * 20);
    const glow = (0.24 + progress * 0.48).toFixed(2);
    skylineSection.style.setProperty("--crest-scroll-y", `${offsetPx}px`);
    skylineSection.style.setProperty("--crest-glow-intensity", glow);
  }

  window.addEventListener("scroll", syncSkylineCrest, { passive: true });
  syncSkylineCrest();

  if (waterCrestBtn) {
    waterCrestBtn.addEventListener("click", () => {
      const target = document.getElementById("carbon-suite");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ------------------------------------------------------------------------
  // 2. CARBON™ ECOSYSTEM HORIZONTAL CAROUSEL (ARROWS, DOTS, DRAG, WHEEL)
  // ------------------------------------------------------------------------
  const trackEl = document.getElementById("carbonCarouselTrack");
  const dotsContainer = document.getElementById("carbonCarouselDots");
  const prevArrow = document.getElementById("carouselPrevArrow");
  const nextArrow = document.getElementById("carouselNextArrow");

  let activeModuleIdx = 0;
  let lastFocusTrigger = null;

  function renderCarouselSlides() {
    if (!trackEl || !dotsContainer) return;
    trackEl.innerHTML = "";
    dotsContainer.innerHTML = "";

    CARBON_MODULES.forEach((mod, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "carbon-slide-card";
      card.setAttribute("aria-label", `Inspect ${mod.title} architecture`);
      card.innerHTML = `
        <span class="carbon-badge-frame">
          <img src="${mod.image}" alt="${mod.title} official badge" loading="lazy" />
        </span>
        <span class="carbon-card-title">${mod.title}</span>
        <span class="carbon-card-sub">${mod.subtitle}</span>
        <span class="carbon-inspect-link">Inspect Architecture &rarr;</span>
      `;
      card.addEventListener("click", (e) => {
        if (trackEl.dataset.dragged === "true") {
          e.preventDefault();
          return;
        }
        openModuleModal(idx, card);
      });
      trackEl.appendChild(card);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = idx === 0 ? "carousel-dot-btn is-active" : "carousel-dot-btn";
      dot.setAttribute("aria-label", `Jump to ${mod.title}`);
      dot.addEventListener("click", () => {
        scrollTrackToIndex(idx);
      });
      dotsContainer.appendChild(dot);
    });

    updateActiveDot();
  }

  function getSlideStep() {
    if (!trackEl) return 306;
    const card = trackEl.querySelector(".carbon-slide-card");
    if (!card) return 306;
    return card.getBoundingClientRect().width + 20;
  }

  function scrollTrackToIndex(index) {
    if (!trackEl) return;
    const clamped = Math.max(0, Math.min(CARBON_MODULES.length - 1, index));
    trackEl.scrollTo({
      left: clamped * getSlideStep(),
      behavior: "smooth"
    });
  }

  function updateActiveDot() {
    if (!trackEl || !dotsContainer) return;
    const step = getSlideStep();
    const currentIdx = Math.min(
      CARBON_MODULES.length - 1,
      Math.max(0, Math.round(trackEl.scrollLeft / Math.max(1, step)))
    );
    const dots = dotsContainer.querySelectorAll(".carousel-dot-btn");
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === currentIdx));
  }

  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      if (!trackEl) return;
      trackEl.scrollBy({ left: -getSlideStep(), behavior: "smooth" });
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      if (!trackEl) return;
      trackEl.scrollBy({ left: getSlideStep(), behavior: "smooth" });
    });
  }

  if (trackEl) {
    trackEl.addEventListener("scroll", updateActiveDot, { passive: true });

    trackEl.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && trackEl.scrollWidth > trackEl.clientWidth) {
          e.preventDefault();
          trackEl.scrollLeft += e.deltaY;
        }
      },
      { passive: false }
    );

    let pointerDown = false;
    let pointerStartX = 0;
    let pointerStartScroll = 0;

    trackEl.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      pointerDown = true;
      pointerStartX = e.pageX;
      pointerStartScroll = trackEl.scrollLeft;
      trackEl.dataset.dragged = "false";
      trackEl.classList.add("is-dragging");
    });

    window.addEventListener("pointermove", (e) => {
      if (!pointerDown || !trackEl) return;
      const delta = e.pageX - pointerStartX;
      if (Math.abs(delta) > 6) {
        trackEl.dataset.dragged = "true";
      }
      trackEl.scrollLeft = pointerStartScroll - delta * 1.15;
    });

    window.addEventListener("pointerup", () => {
      if (!pointerDown || !trackEl) return;
      pointerDown = false;
      trackEl.classList.remove("is-dragging");
      setTimeout(() => {
        if (trackEl) trackEl.dataset.dragged = "false";
      }, 45);
    });
  }

  // ------------------------------------------------------------------------
  // 3. CARBON™ MODULE POP-OUT MODAL & PRINCIPAL CONVERSATION MODAL
  // ------------------------------------------------------------------------
  const moduleBackdrop = document.getElementById("moduleModalBackdrop");
  const moduleCloseBtn = document.getElementById("moduleModalClose");
  const moduleTitleEl = document.getElementById("moduleModalTitle");
  const moduleImgEl = document.getElementById("moduleModalImg");
  const moduleSubEl = document.getElementById("moduleModalSub");
  const moduleEndpointWrap = document.getElementById("moduleModalEndpointWrap");
  const moduleSubdomainEl = document.getElementById("moduleModalSubdomain");
  const moduleBriefEl = document.getElementById("moduleModalBrief");
  const modulePrevBtn = document.getElementById("moduleModalPrev");
  const moduleNextBtn = document.getElementById("moduleModalNext");
  const moduleBriefingCta = document.getElementById("moduleRequestBriefingBtn");

  const principalBackdrop = document.getElementById("principalModalBackdrop");
  const principalCloseBtn = document.getElementById("principalModalClose");
  const principalForm = document.getElementById("principalForm");
  const principalTopicField = document.getElementById("principalTopicInput");
  const principalFeedbackEl = document.getElementById("principalFeedback");

  function syncBodyScrollLock() {
    const anyOpen =
      (moduleBackdrop && moduleBackdrop.classList.contains("is-open")) ||
      (principalBackdrop && principalBackdrop.classList.contains("is-open"));
    document.body.classList.toggle("modal-locked", Boolean(anyOpen));
  }

  function renderModuleModal(index) {
    const mod = CARBON_MODULES[index];
    if (!mod) return;
    activeModuleIdx = index;

    if (moduleTitleEl) moduleTitleEl.textContent = mod.title;
    if (moduleImgEl) {
      moduleImgEl.src = mod.image;
      moduleImgEl.alt = `${mod.title} badge artwork`;
    }
    if (moduleSubEl) moduleSubEl.textContent = mod.subtitle;

    if (moduleSubdomainEl && moduleEndpointWrap) {
      if (mod.subdomain && mod.subdomain.startsWith("https://")) {
        moduleSubdomainEl.href = mod.subdomain;
        moduleSubdomainEl.textContent = mod.subdomain.replace(/^https:\/\//, "");
        moduleEndpointWrap.style.display = "block";
      } else {
        moduleSubdomainEl.removeAttribute("href");
        moduleSubdomainEl.textContent = "";
        moduleEndpointWrap.style.display = "none";
      }
    }

    if (moduleBriefEl) moduleBriefEl.textContent = mod.brief;
    if (moduleBriefingCta) {
      moduleBriefingCta.setAttribute("data-topic", `Principal Briefing — ${mod.title}`);
    }
  }

  function openModuleModal(index, triggerEl) {
    if (triggerEl) lastFocusTrigger = triggerEl;
    if (principalBackdrop) principalBackdrop.classList.remove("is-open");
    renderModuleModal(index);
    if (moduleBackdrop) {
      moduleBackdrop.classList.add("is-open");
      moduleBackdrop.setAttribute("aria-hidden", "false");
    }
    syncBodyScrollLock();
    if (moduleCloseBtn) moduleCloseBtn.focus();
  }

  function closeModuleModal(restoreFocus = true) {
    if (moduleBackdrop) {
      moduleBackdrop.classList.remove("is-open");
      moduleBackdrop.setAttribute("aria-hidden", "true");
    }
    syncBodyScrollLock();
    if (restoreFocus && lastFocusTrigger && typeof lastFocusTrigger.focus === "function") {
      lastFocusTrigger.focus();
    }
  }

  function openPrincipalModal(topic = "", triggerEl = null) {
    if (triggerEl) lastFocusTrigger = triggerEl;
    if (moduleBackdrop) {
      moduleBackdrop.classList.remove("is-open");
      moduleBackdrop.setAttribute("aria-hidden", "true");
    }
    if (principalTopicField) {
      principalTopicField.value = topic || "Principal Conversation — RICKS EXECUTIVE HOSPITALITY GROUP™";
    }
    if (principalFeedbackEl) principalFeedbackEl.textContent = "";
    if (principalBackdrop) {
      principalBackdrop.classList.add("is-open");
      principalBackdrop.setAttribute("aria-hidden", "false");
    }
    syncBodyScrollLock();
    const nameInput = document.getElementById("principalNameInput");
    if (nameInput) nameInput.focus();
  }

  function closePrincipalModal(restoreFocus = true) {
    if (principalBackdrop) {
      principalBackdrop.classList.remove("is-open");
      principalBackdrop.setAttribute("aria-hidden", "true");
    }
    syncBodyScrollLock();
    if (restoreFocus && lastFocusTrigger && typeof lastFocusTrigger.focus === "function") {
      lastFocusTrigger.focus();
    }
  }

  if (modulePrevBtn) {
    modulePrevBtn.addEventListener("click", () => {
      const prevIdx = (activeModuleIdx - 1 + CARBON_MODULES.length) % CARBON_MODULES.length;
      renderModuleModal(prevIdx);
    });
  }

  if (moduleNextBtn) {
    moduleNextBtn.addEventListener("click", () => {
      const nextIdx = (activeModuleIdx + 1) % CARBON_MODULES.length;
      renderModuleModal(nextIdx);
    });
  }

  if (moduleCloseBtn) {
    moduleCloseBtn.addEventListener("click", () => closeModuleModal(true));
  }

  if (moduleBackdrop) {
    moduleBackdrop.addEventListener("click", (e) => {
      if (e.target === moduleBackdrop) closeModuleModal(true);
    });
  }

  document.querySelectorAll("[data-open-principal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const topic = btn.getAttribute("data-topic") || "";
      openPrincipalModal(topic, btn);
    });
  });

  if (principalCloseBtn) {
    principalCloseBtn.addEventListener("click", () => closePrincipalModal(true));
  }

  if (principalBackdrop) {
    principalBackdrop.addEventListener("click", (e) => {
      if (e.target === principalBackdrop) closePrincipalModal(true);
    });
  }

  document.addEventListener("keydown", (e) => {
    const isModOpen = moduleBackdrop && moduleBackdrop.classList.contains("is-open");
    const isPrinOpen = principalBackdrop && principalBackdrop.classList.contains("is-open");

    if (e.key === "Escape") {
      if (isModOpen) closeModuleModal(true);
      if (isPrinOpen) closePrincipalModal(true);
      return;
    }

    if (isModOpen && e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (activeModuleIdx - 1 + CARBON_MODULES.length) % CARBON_MODULES.length;
      renderModuleModal(prevIdx);
    } else if (isModOpen && e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (activeModuleIdx + 1) % CARBON_MODULES.length;
      renderModuleModal(nextIdx);
    }
  });

  if (principalForm) {
    principalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameVal = (document.getElementById("principalNameInput")?.value || "").trim();
      const emailVal = (document.getElementById("principalEmailInput")?.value || "").trim();
      const orgVal = (document.getElementById("principalOrgInput")?.value || "").trim();
      const notesVal = (document.getElementById("principalNotesInput")?.value || "").trim();
      const topicVal = (principalTopicField?.value || "Principal Conversation").trim();

      if (!nameVal || !emailVal) {
        if (principalFeedbackEl) {
          principalFeedbackEl.textContent = "Please enter your name and work email address.";
        }
        return;
      }

      const subject = encodeURIComponent(`${topicVal} — ${orgVal || nameVal}`);
      const bodyLines = [
        `Executive Briefing Request: ${topicVal}`,
        `Contact: ${nameVal}`,
        `Work Email: ${emailVal}`,
        orgVal ? `Organization / Venues: ${orgVal}` : "",
        notesVal ? `\nOperational Context:\n${notesVal}` : ""
      ].filter(Boolean);

      const mailtoHref = `mailto:${PRINCIPAL.email}?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\\n"))}`;

      if (principalFeedbackEl) {
        principalFeedbackEl.textContent = `Formatted dispatch for ${PRINCIPAL.email} (${PRINCIPAL.phone}). Opening mail client...`;
      }

      try {
        window.location.href = mailtoHref;
      } catch (_err) {
        // Keep feedback visible in restricted preview environments
      }
    });
  }

  renderCarouselSlides();
})();
