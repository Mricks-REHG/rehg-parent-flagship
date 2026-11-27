(function () {
  "use strict";

  const CARBON_MODULES = [
    {
      id: "carbon-pos",
      badgeSrc: "assets/rehg-carbon-pos-master.jpeg",
      tag: "PILLAR 01 • FLOOR REGISTER",
      title: "CARBON™ | POS",
      subtitle: "Front-of-House Order & Shift Transaction Engine",
      subdomain: "",
      brief:
        "Built for high-movement hospitality rooms where speed, modifier accuracy, and clean shift handoffs matter every minute of service.",
      points: [
        "Fast check building across active tables, tabs, and floor sections.",
        "Structured modifier and prep routing for bar and kitchen stations.",
        "Clean shift closeout alignment designed for real floor discipline."
      ]
    },
    {
      id: "carbon-sovereign-portal",
      badgeSrc: "assets/carbon-sovereign-portal.jpeg",
      tag: "PILLAR 02 • EXECUTIVE COMMAND",
      title: "CARBON™ | SOVEREIGN PORTAL",
      subtitle: "Owner & Leadership Visibility Hub",
      subdomain: "https://portal.rehgexec.com",
      brief:
        "Centralizes executive oversight across venues, leadership roles, and daily operational check-ins without spreadsheet sprawl.",
      points: [
        "Single executive lens across single-venue and multi-market operations.",
        "Structured leadership access and clear accountability lanes.",
        "Direct connection to RICKS EXECUTIVE HOSPITALITY GROUP™ standards."
      ]
    },
    {
      id: "carbon-digital-footprint",
      badgeSrc: "assets/carbon-web-vip.jpeg",
      tag: "PILLAR 03 • BRAND & CONVERSION",
      title: "CARBON™ | DIGITAL FOOTPRINT",
      subtitle: "Hospitality Authority & Direct Guest Conversion Architecture",
      subdomain: "",
      brief:
        "Replaces passive digital brochures with purpose-built hospitality conversion architecture aligned to how guests book, inquire, and engage.",
      points: [
        "Positioning crafted for upscale venues, dining rooms, and hospitality groups.",
        "Clear guest pathways built around real hospitality workflows.",
        "Cohesive visual authority connected to your operational stack."
      ]
    },
    {
      id: "carbon-bar",
      badgeSrc: "assets/carbon-bar-pos.jpeg",
      tag: "PILLAR 04 • BEVERAGE DISCIPLINE",
      title: "CARBON™ | BAR",
      subtitle: "Well, Pour & Beverage Program Control",
      subdomain: "https://bar.rehgexec.com",
      brief:
        "Brings structure to late-night well execution, spirit pours, bottle programs, and beverage accountability when the bar is three-deep.",
      points: [
        "Supports tight well standards and repeatable pour discipline.",
        "Helps leadership spot beverage drift before end-of-month surprises.",
        "Built for high-volume bars, lounges, and cocktail programs."
      ]
    },
    {
      id: "carbon-feeder",
      badgeSrc: "assets/carbon-feeder-pos.jpeg",
      tag: "PILLAR 05 • DEMAND & FLOW",
      title: "CARBON™ | FEEDER",
      subtitle: "Traffic Generation, VIP Flow & Guest Pipeline",
      subdomain: "https://feeder.rehgexec.com",
      brief:
        "Connects demand generation and pre-shift guest flow directly to venue capacity so marketing effort translates into real covers.",
      points: [
        "Aligns promotional momentum with actual floor and table readiness.",
        "Keeps guest pipeline visibility structured across active markets.",
        "Supports repeatable booking and VIP coordination habits."
      ]
    },
    {
      id: "carbon-kitchen",
      badgeSrc: "assets/carbon-kitchen-pos.jpeg",
      tag: "PILLAR 06 • CULINARY & BOH",
      title: "CARBON™ | KITCHEN",
      subtitle: "Back-of-House Pass, Yield & Prep Alignment",
      subdomain: "https://kitchen.rehgexec.com",
      brief:
        "Aligns ticket pacing, recipe specs, and prep discipline so back-of-house execution holds steady during peak service waves.",
      points: [
        "Focused on pass clarity, prep consistency, and culinary yield.",
        "Bridges kitchen timing with front-of-house service expectations.",
        "Designed around practical line realities rather than kitchen clutter."
      ]
    },
    {
      id: "carbon-loss",
      badgeSrc: "assets/carbon-loss-pos.jpeg",
      tag: "PILLAR 07 • SHRINKAGE & AUDIT",
      title: "CARBON™ | LOSS",
      subtitle: "Variance, Shrinkage & Closeout Integrity",
      subdomain: "https://loss.rehgexec.com",
      brief:
        "Highlights operational variance, closeout discrepancies, and shrinkage risks early so principals can act with facts rather than assumptions.",
      points: [
        "Surfaces anomalies across closeouts, comps, voids, and inventory.",
        "Encourages disciplined daily verification across management teams.",
        "Protects hard-earned venue margin across every operating week."
      ]
    }
  ];

  const PRINCIPAL_CONTACT = {
    name: "Michael Ricks — Founder & CEO",
    email: "mricks@ricksexecutivehospitalitygroup.com",
    phone: "404.594.3765"
  };

  const state = {
    activeModuleIndex: 0,
    lastFocusedEl: null,
    activeModalId: null
  };

  const dom = {};

  function cacheDom() {
    dom.menuToggle = document.getElementById("mobile-menu-toggle");
    dom.menuDrawer = document.getElementById("mobile-nav-drawer");

    dom.carouselViewport = document.getElementById("carbon-carousel-viewport");
    dom.carouselTrack = document.getElementById("carbon-carousel-track");
    dom.carouselDots = document.getElementById("carbon-carousel-dots");
    dom.carouselCounter = document.getElementById("carousel-counter");
    dom.prevBtn = document.getElementById("carousel-prev-btn");
    dom.nextBtn = document.getElementById("carousel-next-btn");

    dom.moduleModal = document.getElementById("carbon-module-modal");
    dom.moduleModalDialog = dom.moduleModal ? dom.moduleModal.querySelector(".modal-dialog") : null;
    dom.closeModuleBtn = document.getElementById("close-module-modal-btn");
    dom.moduleBadgeImg = document.getElementById("module-modal-badge-img");
    dom.moduleKicker = document.getElementById("module-modal-kicker");
    dom.moduleTitle = document.getElementById("module-modal-title");
    dom.moduleSubtitle = document.getElementById("module-modal-subtitle");
    dom.moduleSubdomainWrap = document.getElementById("module-modal-subdomain-wrap");
    dom.moduleSubdomainLink = document.getElementById("module-modal-subdomain-link");
    dom.moduleBrief = document.getElementById("module-modal-brief");
    dom.modulePoints = document.getElementById("module-modal-points");
    dom.moduleRequestBtn = document.getElementById("module-request-briefing-btn");
    dom.modulePrevBtn = document.getElementById("module-prev-btn");
    dom.moduleNextBtn = document.getElementById("module-next-btn");

    dom.principalModal = document.getElementById("principal-conversation-modal");
    dom.principalModalDialog = dom.principalModal ? dom.principalModal.querySelector(".modal-dialog") : null;
    dom.closePrincipalBtn = document.getElementById("close-principal-modal-btn");
    dom.briefingForm = document.getElementById("principal-briefing-form");
    dom.callerName = document.getElementById("caller-name");
    dom.callerEmail = document.getElementById("caller-email");
    dom.venueGroup = document.getElementById("venue-group");
    dom.callerPhone = document.getElementById("caller-phone");
    dom.briefingTopic = document.getElementById("briefing-topic");
    dom.briefingNotes = document.getElementById("briefing-notes");
    dom.formStatus = document.getElementById("principal-form-status");
  }

  /* ------------------------------------------------------------------------
     MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  function setMobileMenuOpen(isOpen) {
    if (!dom.menuToggle || !dom.menuDrawer) return;
    dom.menuToggle.setAttribute("aria-expanded", String(isOpen));
    dom.menuDrawer.hidden = !isOpen;
  }

  function initMobileMenu() {
    if (!dom.menuToggle || !dom.menuDrawer) return;
    setMobileMenuOpen(false);

    dom.menuToggle.addEventListener("click", function () {
      const currentlyOpen = dom.menuToggle.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!currentlyOpen);
    });

    const drawerLinks = dom.menuDrawer.querySelectorAll("a.mobile-nav-link");
    drawerLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setMobileMenuOpen(false);
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1080) {
        setMobileMenuOpen(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     CARBON™ HORIZONTAL CAROUSEL (ARROWS, DOTS, DRAG, WHEEL)
     ------------------------------------------------------------------------ */
  function renderCarouselSlides() {
    if (!dom.carouselTrack || !dom.carouselDots) return;

    dom.carouselTrack.innerHTML = "";
    dom.carouselDots.innerHTML = "";

    CARBON_MODULES.forEach(function (mod, idx) {
      const card = document.createElement("article");
      card.className = "carbon-slide-card";
      card.setAttribute("role", "group");
      card.setAttribute("aria-label", mod.title);
      card.dataset.moduleIndex = String(idx);

      const well = document.createElement("div");
      well.className = "badge-contain-well";

      const img = document.createElement("img");
      img.src = mod.badgeSrc;
      img.alt = mod.title + " Badge";
      img.className = "badge-contain-img";
      img.loading = idx < 3 ? "eager" : "lazy";
      well.appendChild(img);

      const copyBlock = document.createElement("div");

      const tagEl = document.createElement("div");
      tagEl.className = "slide-tag";
      tagEl.textContent = mod.tag;

      const titleEl = document.createElement("h3");
      titleEl.className = "slide-title";
      titleEl.textContent = mod.title;

      const subEl = document.createElement("div");
      subEl.className = "slide-subtitle";
      subEl.textContent = mod.subtitle;

      const briefEl = document.createElement("p");
      briefEl.className = "slide-summary";
      briefEl.textContent = mod.brief;

      copyBlock.appendChild(tagEl);
      copyBlock.appendChild(titleEl);
      copyBlock.appendChild(subEl);
      copyBlock.appendChild(briefEl);

      const metaBar = document.createElement("div");
      metaBar.className = "slide-footer-meta";

      const leftMeta = document.createElement("span");
      leftMeta.textContent = mod.subdomain
        ? mod.subdomain.replace("https://", "")
        : "RICKS EXECUTIVE HOSPITALITY GROUP™";

      const rightCue = document.createElement("span");
      rightCue.className = "slide-inspect-cue";
      rightCue.textContent = "Inspect Module →";

      metaBar.appendChild(leftMeta);
      metaBar.appendChild(rightCue);

      const topGroup = document.createElement("div");
      topGroup.appendChild(well);
      topGroup.appendChild(copyBlock);

      card.appendChild(topGroup);
      card.appendChild(metaBar);

      card.addEventListener("click", function () {
        if (dom.carouselViewport && dom.carouselViewport.dataset.justDragged === "true") {
          return;
        }
        openModuleModal(idx, card);
      });

      dom.carouselTrack.appendChild(card);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot-btn" + (idx === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", "Go to " + mod.title);
      dot.addEventListener("click", function () {
        goToSlide(idx);
      });
      dom.carouselDots.appendChild(dot);
    });

    updateCarouselUI(0);
  }

  function updateCarouselUI(activeIdx) {
    state.activeModuleIndex = activeIdx;
    const total = CARBON_MODULES.length;
    if (dom.carouselCounter) {
      const num = String(activeIdx + 1).padStart(2, "0");
      const tot = String(total).padStart(2, "0");
      dom.carouselCounter.textContent = "Module " + num + " of " + tot + " • " + CARBON_MODULES[activeIdx].title;
    }

    if (dom.carouselDots) {
      const dots = dom.carouselDots.querySelectorAll(".carousel-dot-btn");
      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === activeIdx);
      });
    }
  }

  function goToSlide(targetIdx) {
    const total = CARBON_MODULES.length;
    const wrapped = ((targetIdx % total) + total) % total;
    updateCarouselUI(wrapped);

    if (!dom.carouselViewport || !dom.carouselTrack) return;
    const cards = dom.carouselTrack.querySelectorAll(".carbon-slide-card");
    const targetCard = cards[wrapped];
    if (targetCard) {
      dom.carouselViewport.scrollTo({
        left: targetCard.offsetLeft - dom.carouselTrack.offsetLeft,
        behavior: "smooth"
      });
    }
  }

  function stepCarousel(delta) {
    goToSlide(state.activeModuleIndex + delta);
  }

  function syncActiveSlideFromScroll() {
    if (!dom.carouselViewport || !dom.carouselTrack) return;
    const cards = dom.carouselTrack.querySelectorAll(".carbon-slide-card");
    if (!cards.length) return;

    const currentScroll = dom.carouselViewport.scrollLeft;
    let closestIdx = 0;
    let smallestDiff = Infinity;

    cards.forEach(function (card, idx) {
      const cardLeft = card.offsetLeft - dom.carouselTrack.offsetLeft;
      const diff = Math.abs(cardLeft - currentScroll);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closestIdx = idx;
      }
    });

    updateCarouselUI(closestIdx);
  }

  function initCarouselInteractions() {
    if (!dom.carouselViewport) return;

    if (dom.prevBtn) {
      dom.prevBtn.addEventListener("click", function () {
        stepCarousel(-1);
      });
    }

    if (dom.nextBtn) {
      dom.nextBtn.addEventListener("click", function () {
        stepCarousel(1);
      });
    }

    let scrollTimer = null;
    dom.carouselViewport.addEventListener("scroll", function () {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncActiveSlideFromScroll, 80);
    }, { passive: true });

    // Translate vertical mouse wheel over horizontal carousel into horizontal scroll
    dom.carouselViewport.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        dom.carouselViewport.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });

    // Pointer / drag support
    let isPointerDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let movedDistance = 0;

    dom.carouselViewport.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isPointerDown = true;
      movedDistance = 0;
      startX = e.clientX;
      startScrollLeft = dom.carouselViewport.scrollLeft;
      dom.carouselViewport.classList.add("is-dragging");
      dom.carouselViewport.dataset.justDragged = "false";
    });

    window.addEventListener("pointermove", function (e) {
      if (!isPointerDown || !dom.carouselViewport) return;
      const dx = e.clientX - startX;
      movedDistance = Math.max(movedDistance, Math.abs(dx));
      dom.carouselViewport.scrollLeft = startScrollLeft - dx;
    });

    window.addEventListener("pointerup", function () {
      if (!isPointerDown || !dom.carouselViewport) return;
      isPointerDown = false;
      dom.carouselViewport.classList.remove("is-dragging");
      if (movedDistance > 8) {
        dom.carouselViewport.dataset.justDragged = "true";
        window.setTimeout(function () {
          if (dom.carouselViewport) {
            dom.carouselViewport.dataset.justDragged = "false";
          }
        }, 60);
        syncActiveSlideFromScroll();
      }
    });
  }

  /* ------------------------------------------------------------------------
     MODAL MANAGEMENT (CARBON™ MODULE MODAL & PRINCIPAL CONVERSATION MODAL)
     ------------------------------------------------------------------------ */
  function hideAllModals() {
    if (dom.moduleModal) {
      dom.moduleModal.style.display = "none";
    }
    if (dom.principalModal) {
      dom.principalModal.style.display = "none";
    }
    state.activeModalId = null;
    document.body.classList.remove("modal-open");

    if (state.lastFocusedEl && typeof state.lastFocusedEl.focus === "function") {
      const target = state.lastFocusedEl;
      state.lastFocusedEl = null;
      window.setTimeout(function () {
        target.focus();
      }, 0);
    }
  }

  function populateModuleModal(index) {
    const total = CARBON_MODULES.length;
    const idx = ((index % total) + total) % total;
    const mod = CARBON_MODULES[idx];
    state.activeModuleIndex = idx;

    if (dom.moduleBadgeImg) {
      dom.moduleBadgeImg.src = mod.badgeSrc;
      dom.moduleBadgeImg.alt = mod.title + " Emblem";
    }
    if (dom.moduleKicker) {
      dom.moduleKicker.textContent = mod.tag;
    }
    if (dom.moduleTitle) {
      dom.moduleTitle.textContent = mod.title;
    }
    if (dom.moduleSubtitle) {
      dom.moduleSubtitle.textContent = mod.subtitle;
    }
    if (dom.moduleBrief) {
      dom.moduleBrief.textContent = mod.brief;
    }

    if (dom.moduleSubdomainWrap && dom.moduleSubdomainLink) {
      if (mod.subdomain) {
        dom.moduleSubdomainWrap.style.display = "flex";
        dom.moduleSubdomainLink.href = mod.subdomain;
        dom.moduleSubdomainLink.textContent = mod.subdomain;
      } else {
        dom.moduleSubdomainWrap.style.display = "none";
        dom.moduleSubdomainLink.href = "https://rehgexec.com";
        dom.moduleSubdomainLink.textContent = "";
      }
    }

    if (dom.modulePoints) {
      dom.modulePoints.innerHTML = "";
      mod.points.forEach(function (pt) {
        const li = document.createElement("li");
        li.textContent = pt;
        dom.modulePoints.appendChild(li);
      });
    }

    updateCarouselUI(idx);
  }

  function openModuleModal(index, triggerEl) {
    if (!dom.moduleModal) return;
    if (triggerEl) {
      state.lastFocusedEl = triggerEl;
    } else if (!state.activeModalId) {
      state.lastFocusedEl = document.activeElement;
    }

    if (dom.principalModal) {
      dom.principalModal.style.display = "none";
    }

    populateModuleModal(index);
    dom.moduleModal.style.display = "flex";
    state.activeModalId = "carbon-module-modal";
    document.body.classList.add("modal-open");

    if (dom.moduleModalDialog) {
      dom.moduleModalDialog.scrollTop = 0;
      dom.moduleModalDialog.focus();
    }
  }

  function openPrincipalModal(topicLabel, triggerEl) {
    if (!dom.principalModal) return;
    if (triggerEl) {
      state.lastFocusedEl = triggerEl;
    } else if (!state.activeModalId) {
      state.lastFocusedEl = document.activeElement;
    }

    if (dom.moduleModal) {
      dom.moduleModal.style.display = "none";
    }

    if (dom.briefingTopic) {
      dom.briefingTopic.value = topicLabel || "Principal Conversation — RICKS EXECUTIVE HOSPITALITY GROUP™";
    }
    if (dom.formStatus) {
      dom.formStatus.textContent = "";
    }

    dom.principalModal.style.display = "flex";
    state.activeModalId = "principal-conversation-modal";
    document.body.classList.add("modal-open");

    if (dom.principalModalDialog) {
      dom.principalModalDialog.scrollTop = 0;
      dom.principalModalDialog.focus();
    }

    window.setTimeout(function () {
      if (dom.callerName && !dom.callerName.value.trim()) {
        dom.callerName.focus();
      }
    }, 30);
  }

  function buildBriefingMailtoUrl() {
    const senderName = dom.callerName ? dom.callerName.value.trim() : "";
    const senderEmail = dom.callerEmail ? dom.callerEmail.value.trim() : "";
    const venue = dom.venueGroup ? dom.venueGroup.value.trim() : "";
    const phone = dom.callerPhone ? dom.callerPhone.value.trim() : "";
    const topic = dom.briefingTopic ? dom.briefingTopic.value.trim() : "";
    const notes = dom.briefingNotes ? dom.briefingNotes.value.trim() : "";

    const subject = "Principal Briefing Request: " + (topic || "RICKS EXECUTIVE HOSPITALITY GROUP™");

    const lines = [
      "Hello Michael,",
      "",
      "I would like to request a principal conversation with RICKS EXECUTIVE HOSPITALITY GROUP™.",
      "",
      "Topic / Focus: " + (topic || "General Principal Conversation"),
      "Name: " + senderName,
      "Email: " + senderEmail,
      "Phone: " + (phone || "Not provided"),
      "Venue / Group: " + (venue || "Not provided"),
      "",
      "Operational Context:",
      notes || "Looking to connect regarding hospitality operations and CARBON™ capabilities.",
      "",
      "Sent via https://rehgexec.com"
    ];

    return (
      "mailto:" +
      encodeURIComponent(PRINCIPAL_CONTACT.email) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"))
    );
  }

  function initModalsAndForms() {
    // Ensure modals start strictly hidden on initial load
    hideAllModals();
    state.lastFocusedEl = null;

    const principalTriggers = document.querySelectorAll("[data-open-principal]");
    principalTriggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setMobileMenuOpen(false);
        const label = btn.getAttribute("data-open-principal") || "Principal Conversation";
        openPrincipalModal(label, btn);
      });
    });

    if (dom.closeModuleBtn) {
      dom.closeModuleBtn.addEventListener("click", hideAllModals);
    }

    if (dom.closePrincipalBtn) {
      dom.closePrincipalBtn.addEventListener("click", hideAllModals);
    }

    if (dom.moduleModal) {
      dom.moduleModal.addEventListener("click", function (e) {
        if (e.target === dom.moduleModal) {
          hideAllModals();
        }
      });
    }

    if (dom.principalModal) {
      dom.principalModal.addEventListener("click", function (e) {
        if (e.target === dom.principalModal) {
          hideAllModals();
        }
      });
    }

    if (dom.modulePrevBtn) {
      dom.modulePrevBtn.addEventListener("click", function () {
        populateModuleModal(state.activeModuleIndex - 1);
      });
    }

    if (dom.moduleNextBtn) {
      dom.moduleNextBtn.addEventListener("click", function () {
        populateModuleModal(state.activeModuleIndex + 1);
      });
    }

    if (dom.moduleRequestBtn) {
      dom.moduleRequestBtn.addEventListener("click", function () {
        const currentMod = CARBON_MODULES[state.activeModuleIndex];
        const topic = currentMod ? currentMod.title + " Briefing" : "CARBON™ Suite Briefing";
        openPrincipalModal(topic, dom.moduleRequestBtn);
      });
    }

    if (dom.briefingForm) {
      dom.briefingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameVal = dom.callerName ? dom.callerName.value.trim() : "";
        const emailVal = dom.callerEmail ? dom.callerEmail.value.trim() : "";
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);

        if (!nameVal) {
          if (dom.formStatus) {
            dom.formStatus.textContent = "Please enter your name before composing the dispatch.";
          }
          if (dom.callerName) dom.callerName.focus();
          return;
        }

        if (!emailValid) {
          if (dom.formStatus) {
            dom.formStatus.textContent = "Please enter a valid email address so Michael can follow up directly.";
          }
          if (dom.callerEmail) dom.callerEmail.focus();
          return;
        }

        const mailtoUrl = buildBriefingMailtoUrl();
        if (dom.formStatus) {
          dom.formStatus.textContent =
            "Opening your email client addressed to " +
            PRINCIPAL_CONTACT.email +
            " (" +
            PRINCIPAL_CONTACT.phone +
            ")...";
        }
        window.location.href = mailtoUrl;
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (state.activeModalId) {
          hideAllModals();
        } else if (dom.menuToggle && dom.menuToggle.getAttribute("aria-expanded") === "true") {
          setMobileMenuOpen(false);
          dom.menuToggle.focus();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    cacheDom();
    initMobileMenu();
    renderCarouselSlides();
    initCarouselInteractions();
    initModalsAndForms();
  });
})();
