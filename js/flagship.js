(function () {
  "use strict";

  const CARBON_SUITE_MODULES = [
    {
      id: "carbon-sovereign-portal",
      badgeSrc: "carbon-sovereign-portal (1).jpeg",
      tag: "ENGINE 01 • EXECUTIVE COMMAND",
      title: "CARBON™ | SOVEREIGN PORTAL",
      subtitle: "Owner & C-Suite Governance Hub",
      subdomain: "https://portal.rehgexec.com",
      brief:
        "An operator's real-life answer to the blind spots ordinary tech failed to close—built so an independent owner can lock their back door tonight without needing a six-figure enterprise IT team.",
      points: [
        "Surfaces variance in real time instead of 45 days later in a CPA's post-mortem.",
        "Anchored on actual-vs.-theoretical depletion, blind drop-slot separation of duties, and prime-cost ceilings.",
        "Fuses immutable bedrock accounting principles with the surgical speed of Gemini AI."
      ]
    },
    {
      id: "carbon-suites-master",
      badgeSrc: "rehg-carbon-suites-master (1).jpeg",
      tag: "ENGINE 02 • FULL SUITE ARCHITECTURE",
      title: "CARBON™ | SUITES",
      subtitle: "Self-Deployed Operational Engine Architecture",
      subdomain: "",
      brief:
        "Built so an independent owner can lock their back door tonight without needing a six-figure enterprise IT team—connecting empirical floor execution, prime-cost ceilings, and C-Suite governance.",
      points: [
        "Self-deployed operational engines engineered from real floor reality.",
        "Protects prime-cost ceilings and shift accountability without enterprise IT overhead.",
        "Built for single flagships and multi-market hospitality groups."
      ]
    },
    {
      id: "carbon-bar",
      badgeSrc: "carbon-bar-pos (1).jpeg",
      tag: "ENGINE 03 • BEVERAGE DISCIPLINE",
      title: "CARBON™ | BAR",
      subtitle: "Well, Pour & Beverage Program Control",
      subdomain: "https://bar.rehgexec.com",
      brief:
        "Brings real-time actual-vs.-theoretical beverage accountability to well pours, modifiers, and bottle discipline so late-night volume never bleeds margin unnoticed.",
      points: [
        "Exposes pour and modifier variance in real time rather than 45 days later.",
        "Supports tight well standards across high-volume bar and lounge shifts.",
        "Built for operators who refuse to bleed beverage margin in the dark."
      ]
    },
    {
      id: "carbon-feeder",
      badgeSrc: "carbon-feeder-pos (1).jpeg",
      tag: "ENGINE 04 • DEMAND & FLOW",
      title: "CARBON™ | FEEDER",
      subtitle: "Traffic Generation, VIP Flow & Guest Pipeline",
      subdomain: "https://feeder.rehgexec.com",
      brief:
        "Connects regional feeder-city demand capture and pre-shift VIP flow directly to floor capacity so high-intent guests reach your floor efficiently.",
      points: [
        "Aligns guest acquisition and VIP flow with real venue capacity.",
        "Supports regional corridor capture without agency guesswork.",
        "Connects pre-shift demand to disciplined floor execution."
      ]
    },
    {
      id: "carbon-kitchen",
      badgeSrc: "carbon-kitchen-pos (1).jpeg",
      tag: "ENGINE 05 • CULINARY & BOH",
      title: "CARBON™ | KITCHEN",
      subtitle: "Back-of-House Pass, Yield & Prep Alignment",
      subdomain: "https://kitchen.rehgexec.com",
      brief:
        "Locks culinary yield discipline, prep standards, and pass pacing to prime-cost ceilings so back-of-house margin holds during peak service.",
      points: [
        "Aligns prep yield and actual-vs.-theoretical food cost on every shift.",
        "Supports clean kitchen-to-pass pacing under heavy ticket volume.",
        "Surfaces culinary margin drift early before it compounds."
      ]
    },
    {
      id: "carbon-loss",
      badgeSrc: "carbon-loss-pos (1).jpeg",
      tag: "ENGINE 06 • SHRINKAGE & AUDIT",
      title: "CARBON™ | LOSS",
      subtitle: "Variance, Shrinkage & Closeout Integrity",
      subdomain: "https://loss.rehgexec.com",
      brief:
        "Enforces blind drop-slot separation of duties, closeout verification, and shrinkage controls so variance is caught immediately—not in a CPA post-mortem.",
      points: [
        "Reconciles closeouts, comps, voids, and physical counts with discipline.",
        "Reinforces blind drop-slot separation of duties across shifts.",
        "Protects cash and inventory integrity across every operating lane."
      ]
    }
  ];

  const SPECIAL_POPOUT_PROFILES = {
    "carbon-pos-footprint": {
      badgeSrc: "rehg-carbon-pos-master (1).jpeg",
      tag: "FRONT-LINE POS & CARBON™ DIGITAL FOOTPRINT",
      title: "CARBON™ | POS & DIGITAL FOOTPRINT",
      subtitle: "Direct Revenue Capture + Real-Time Floor & Shift Execution",
      subdomain: "",
      brief:
        "CARBON™ | DIGITAL FOOTPRINT is the digital conversion and revenue-capture architecture of RICKS EXECUTIVE HOSPITALITY GROUP™—engineered alongside CARBON™ and our front-line POS ecosystem to turn high-volume hospitality traffic into measurable, protected margin.",
      points: [
        "Captures high-intent guests upfront rather than handing static brochures or leaking traffic.",
        "Enforces real-time floor, bar, and shift accountability while exposing margin leakage early.",
        "Connects front-end conversion, live floor execution, and executive oversight in one operating system."
      ],
      moduleIndex: 0
    },
    "carbon-digital-footprint": {
      badgeSrc: "carbon-web-vip (2).jpeg",
      tag: "DIGITAL CONVERSION ARCHITECTURE",
      title: "CARBON™ | DIGITAL FOOTPRINT",
      subtitle: "Upfront Revenue Capture & Conversion Architecture",
      subdomain: "",
      brief:
        "Engineered alongside CARBON™ and our front-line POS ecosystem to turn high-volume hospitality traffic into measurable, protected margin.",
      points: [
        "Built from real-world C-Suite hospitality command rather than generic agency templates.",
        "Connects front-end guest conversion directly with live floor execution and oversight.",
        "Designed for owners who refuse to bleed margin in the dark."
      ],
      moduleIndex: 0
    },
    "carbon-pos": {
      badgeSrc: "rehg-carbon-pos-master (1).jpeg",
      tag: "FRONT-LINE POS ECOSYSTEM",
      title: "CARBON™ | POS",
      subtitle: "Real-Time Floor, Bar & Shift Execution",
      subdomain: "",
      brief:
        "Front-line register execution built for real floor speed, modifier clarity, and real-time operational accountability.",
      points: [
        "Supports fast bar, VIP, and table workflows across active shifts.",
        "Connects floor activity to actual-vs.-theoretical margin oversight.",
        "Engineered for independent and multi-venue operators."
      ],
      moduleIndex: 0
    }
  };

  const GOVERNANCE_EXPERIENCES = [
    {
      id: "audit-72hr",
      kicker: "EXPERIENCE 01 • REAL-TIME OPERATIONAL TRIAGE",
      title: "The 72-Hour Operational & Margin Audit",
      imgSrc: "72audit.jpeg",
      imgFallbacks: ["assets/72audit.jpeg", "72audit.jpg", "assets/72audit.jpg", "plate-03-back-office.jpg"],
      paragraphs: [
        "A traditional CPA P&L is a post-mortem—an autopsy delivered weeks after the cash has already walked out the door. The 72-Hour Audit is real-time operational triage built to catch profit leakage while it is actively happening on the floor, at the bar, and in the back of house.",
        "We go deep into every layer of your business—COGS, bar pour variance, labor deployment, vendor pricing, cash handling, and floor execution—without high-level theory or academic checklists. Every finding comes with concrete margin controls and playbooks written for immediate execution by your team."
      ],
      guaranteePrefix: "Written 4x Year-One ROI Guarantee:",
      guaranteeBody: " If our audit does not uncover at least 4x in verifiable year-one savings—or you receive your money back.",
      listIntro: "",
      bullets: [],
      ctaLabel: "Book Your 72-Hour Audit Now",
      bookingTopic: "Book Your 72-Hour Operational & Margin Audit"
    },
    {
      id: "secret-shopper",
      kicker: "EXPERIENCE 02 • SURGICAL FIELD VERIFICATION",
      title: "Undercover Secret Shopper Audit",
      imgSrc: "secretshopper.jpeg",
      imgFallbacks: ["assets/secretshopper.jpeg", "secretshopper.jpg", "assets/secretshopper.jpg", "plate-01-bar-well.jpg"],
      paragraphs: [
        "Most secret shoppers fill out a generic checklist on whether the server smiled—then hand you a feel-good report that changes nothing. Our Secret Shopper Audit is a surgical field test designed to expose what actually happens when your team operates without watching eyes.",
        "We test every touchpoint from arrival to closeout: greeting speed, menu/upsell execution, bar pour and ticket accuracy, table pacing, comp/void discipline, and how your staff handles friction in real time. Instead of vague ratings, you get an unfiltered breakdown of where revenue is slipping and practical floor corrections your managers can put into action immediately."
      ],
      guaranteePrefix: "",
      guaranteeBody: "",
      listIntro: "",
      bullets: [],
      ctaLabel: "Book Your Secret Shopper Now",
      bookingTopic: "Book Your Undercover Secret Shopper Audit"
    },
    {
      id: "staff-training",
      kicker: "EXPERIENCE 03 • TOP-DOWN FLOOR LEADERSHIP",
      title: "Manager & Staff Training",
      imgSrc: "stafftraining.jpeg",
      imgFallbacks: ["assets/stafftraining.jpeg", "stafftraining.jpg", "assets/stafftraining.jpg", "plate-05-executive-floor.jpg"],
      paragraphs: [
        "A venue only performs as well as the leadership foundation holding it together from the top down. Our Manager & Staff Training strengthens the GM's ability to lead decisively while giving the entire floor—from GM down to every server and bartender—a clear operating foundation to lead and execute from. Delivered via interactive online Google Meet sessions or on-premises—the choice is yours."
      ],
      guaranteePrefix: "",
      guaranteeBody: "",
      listIntro: "We align every tier around real floor habits:",
      bullets: [
        {
          lead: "GM Leadership & Accountability:",
          body: " Reinforcing how GMs set standards, coach in real time, and hold shift leads to clear numbers"
        },
        {
          lead: "The Art of the Upsell:",
          body: " Practical, natural check-building from servers and bartenders without pushy scripts"
        },
        {
          lead: "People & Attitude Alignment:",
          body: " Managing morale, resetting attitude before rush, and keeping energy high on the floor"
        },
        {
          lead: "Scheduling & Communication:",
          body: " Tight shift planning, clear pre-shift huddles, and zero handoff confusion between shifts"
        },
        {
          lead: "Incident Reporting:",
          body: " Fast, factual documentation and escalation when floor, guest, or safety issues hit"
        }
      ],
      ctaLabel: "Schedule Your Staff Training Session",
      bookingTopic: "Schedule Your Manager & Staff Training Session"
    },
    {
      id: "feeder-city",
      kicker: "EXPERIENCE 04 • C-SUITE CAPITAL & DEMAND DISCIPLINE",
      title: "Feeder-City Demand & Revenue Architecture",
      imgSrc: "feedercity.jpeg",
      imgFallbacks: ["assets/feedercity.jpeg", "feedercity.jpg", "assets/feedercity.jpg", "skyline.jpeg"],
      paragraphs: [
        "A typical marketing agency measures success in clicks, impressions, and Meta geo-fencing radiuses—leaving the C-Suite blind to whether ad spend actually produces profitable covers. Feeder-City Demand & Revenue Architecture is built around C-Suite capital discipline: auditing your digital footprint, cutting bloated spend across fragmented promotion and reservation vendors, enforcing true Customer Acquisition Cost (CAC) governance, and driving high-yield feeder traffic directly into your highest-margin seatings and VIP inventory."
      ],
      guaranteePrefix: "",
      guaranteeBody: "",
      listIntro: "This goes far beyond running ads, drawing a digital fence around a map, or paying multiple disconnected vendors:",
      bullets: [
        {
          lead: "Digital Footprint & Conversion Audit:",
          body: " Evaluating your web presence, booking flow, and local search/visibility to fix friction points where high-intent guests drop off before reserving"
        },
        {
          lead: "Multi-Vendor Consolidation & Cost Cutting:",
          body: " Eliminating redundant retainers, overlapping promotion agencies, and third-party reservation/booking fees so overhead drops while control tightens"
        },
        {
          lead: "True CAC & Ad-Dollar ROI Governance:",
          body: " Measuring real acquisition cost against net realized margin—not vanity clicks or unverified leads—so every ad dollar is tied to accountable return"
        },
        {
          lead: "Feeder-Market Targeting & Floor Execution:",
          body: " Pulling high-intent regional and traveling guests from surrounding demand hubs and aligning offers with floor readiness so demand turns into realized revenue"
        }
      ],
      ctaLabel: "Book Your Feeder-City Conversation Now",
      bookingTopic: "Book Your Feeder-City Demand & Revenue Architecture Conversation"
    }
  ];

  const PRINCIPAL_CONTACT = {
    name: "Michael Ricks — Founder & CEO",
    email: "Mricks@rehgexec.com",
    phone: "404.594.3765"
  };

  const state = {
    activeModuleIndex: 0,
    activeRealityIndex: 0,
    activeGovernanceIndex: 0,
    lastFocusedEl: null,
    activeModalId: null
  };

  const dom = {};

  function cacheDom() {
    dom.menuToggle = document.getElementById("mobile-menu-toggle");
    dom.menuDrawer = document.getElementById("mobile-nav-drawer");

    dom.govViewport = document.getElementById("governance-carousel-viewport");
    dom.govTrack = document.getElementById("governance-carousel-track");
    dom.govDots = document.getElementById("governance-carousel-dots");
    dom.govCounter = document.getElementById("governance-carousel-counter");
    dom.govPrevCarouselBtn = document.getElementById("governance-prev-btn");
    dom.govNextCarouselBtn = document.getElementById("governance-next-btn");

    dom.govModal = document.getElementById("governance-experience-modal");
    dom.govModalDialog = dom.govModal ? dom.govModal.querySelector(".modal-dialog") : null;
    dom.closeGovBtn = document.getElementById("close-gov-modal-btn");
    dom.govModalKicker = document.getElementById("gov-modal-kicker");
    dom.govModalTitle = document.getElementById("gov-modal-title");
    dom.govModalImg = document.getElementById("gov-modal-img");
    dom.govModalGuarantee = document.getElementById("gov-modal-guarantee");
    dom.govModalParagraphs = document.getElementById("gov-modal-paragraphs");
    dom.govModalListIntro = document.getElementById("gov-modal-list-intro");
    dom.govModalBullets = document.getElementById("gov-modal-bullets");
    dom.govModalCtaBtn = document.getElementById("gov-modal-cta-btn");
    dom.govPrevModalBtn = document.getElementById("gov-prev-btn");
    dom.govNextModalBtn = document.getElementById("gov-next-btn");

    dom.realityViewport = document.getElementById("reality-carousel-viewport");
    dom.realityTrack = document.getElementById("reality-carousel-track");
    dom.realityDots = document.getElementById("reality-carousel-dots");
    dom.realityCounter = document.getElementById("reality-carousel-counter");
    dom.realityPrevBtn = document.getElementById("reality-prev-btn");
    dom.realityNextBtn = document.getElementById("reality-next-btn");

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
      if (window.innerWidth > 1240) {
        setMobileMenuOpen(false);
      }
    });
  }

  function attachCarouselBehavior(cfg) {
    const viewport = cfg.viewport;
    const track = cfg.track;
    const dotsContainer = cfg.dotsContainer;
    const counterEl = cfg.counterEl;
    const prevBtn = cfg.prevBtn;
    const nextBtn = cfg.nextBtn;
    const total = cfg.total;
    const getLabel = cfg.getLabel;
    const getIndex = cfg.getIndex;
    const setIndex = cfg.setIndex;

    if (!viewport || !track || !dotsContainer || total <= 0) return null;

    dotsContainer.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot-btn" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", getLabel(i));
      dot.addEventListener("click", function () {
        goTo(i);
      });
      dotsContainer.appendChild(dot);
    }

    function updateUI(activeIdx) {
      const wrapped = ((activeIdx % total) + total) % total;
      setIndex(wrapped);
      if (counterEl) {
        counterEl.textContent = getLabel(wrapped);
      }
      const dots = dotsContainer.querySelectorAll(".carousel-dot-btn");
      dots.forEach(function (d, idx) {
        d.classList.toggle("is-active", idx === wrapped);
      });
    }

    function goTo(targetIdx) {
      const wrapped = ((targetIdx % total) + total) % total;
      updateUI(wrapped);
      const cards = track.children;
      const targetCard = cards[wrapped];
      if (targetCard) {
        viewport.scrollTo({
          left: targetCard.offsetLeft - track.offsetLeft,
          behavior: "smooth"
        });
      }
    }

    function syncFromScroll() {
      const cards = track.children;
      if (!cards.length) return;
      const currentScroll = viewport.scrollLeft;
      let bestIdx = 0;
      let bestDiff = Infinity;
      for (let i = 0; i < cards.length; i++) {
        const leftPos = cards[i].offsetLeft - track.offsetLeft;
        const diff = Math.abs(leftPos - currentScroll);
        if (diff < bestDiff) {
          bestDiff = diff;
          bestIdx = i;
        }
      }
      updateUI(bestIdx);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goTo(getIndex() - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goTo(getIndex() + 1);
      });
    }

    let scrollTimer = null;
    viewport.addEventListener("scroll", function () {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncFromScroll, 80);
    }, { passive: true });

    viewport.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        viewport.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });

    let pointerDown = false;
    let startX = 0;
    let startScroll = 0;
    let draggedDist = 0;

    viewport.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      pointerDown = true;
      draggedDist = 0;
      startX = e.clientX;
      startScroll = viewport.scrollLeft;
      viewport.classList.add("is-dragging");
      viewport.dataset.justDragged = "false";
    });

    window.addEventListener("pointermove", function (e) {
      if (!pointerDown) return;
      const dx = e.clientX - startX;
      draggedDist = Math.max(draggedDist, Math.abs(dx));
      viewport.scrollLeft = startScroll - dx;
    });

    window.addEventListener("pointerup", function () {
      if (!pointerDown) return;
      pointerDown = false;
      viewport.classList.remove("is-dragging");
      if (draggedDist > 8) {
        viewport.dataset.justDragged = "true";
        window.setTimeout(function () {
          viewport.dataset.justDragged = "false";
        }, 60);
        syncFromScroll();
      }
    });

    updateUI(0);
    return { goTo: goTo, updateUI: updateUI };
  }

  let suiteCarouselApi = null;
  let governanceCarouselApi = null;

  function attachMultiFallback(imgEl, fallbackList) {
    if (!imgEl || !fallbackList || !fallbackList.length) return;
    let attempt = 0;
    imgEl.onerror = function () {
      if (attempt < fallbackList.length) {
        const nextSrc = fallbackList[attempt];
        attempt += 1;
        imgEl.src = nextSrc;
      } else {
        imgEl.onerror = null;
      }
    };
  }

  function initImageFallbacks() {
    const imgs = document.querySelectorAll("img[data-fallbacks]");
    imgs.forEach(function (imgEl) {
      const raw = imgEl.getAttribute("data-fallbacks") || "";
      const list = raw
        .split(",")
        .map(function (s) { return s.trim(); })
        .filter(Boolean);
      attachMultiFallback(imgEl, list);
    });
  }

  function initGovernanceCarousel() {
    if (!dom.govViewport || !dom.govTrack) return;

    const cards = dom.govTrack.querySelectorAll(".governance-slide-card");
    cards.forEach(function (card) {
      function handleOpen() {
        if (dom.govViewport && dom.govViewport.dataset.justDragged === "true") {
          return;
        }
        const idx = parseInt(card.getAttribute("data-governance-index") || "0", 10);
        openGovernanceModal(isNaN(idx) ? 0 : idx, card);
      }
      card.addEventListener("click", handleOpen);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      });
    });

    governanceCarouselApi = attachCarouselBehavior({
      viewport: dom.govViewport,
      track: dom.govTrack,
      dotsContainer: dom.govDots,
      counterEl: dom.govCounter,
      prevBtn: dom.govPrevCarouselBtn,
      nextBtn: dom.govNextCarouselBtn,
      total: GOVERNANCE_EXPERIENCES.length,
      getLabel: function (i) {
        return "Experience 0" + (i + 1) + " of 04 • " + GOVERNANCE_EXPERIENCES[i].title;
      },
      getIndex: function () {
        return state.activeGovernanceIndex;
      },
      setIndex: function (i) {
        state.activeGovernanceIndex = i;
      }
    });
  }

  function initRealityCarousel() {
    const momentTitles = [
      "7:30 AM Receiving & Invoice Drift",
      "1:00 AM Bar Well & Pour Discipline",
      "Friday Night Kitchen Pass & Yield",
      "2:30 AM Closeout & Reconciliation"
    ];

    attachCarouselBehavior({
      viewport: dom.realityViewport,
      track: dom.realityTrack,
      dotsContainer: dom.realityDots,
      counterEl: dom.realityCounter,
      prevBtn: dom.realityPrevBtn,
      nextBtn: dom.realityNextBtn,
      total: momentTitles.length,
      getLabel: function (i) {
        return "Moment 0" + (i + 1) + " of 04 • " + momentTitles[i];
      },
      getIndex: function () {
        return state.activeRealityIndex;
      },
      setIndex: function (i) {
        state.activeRealityIndex = i;
      }
    });
  }

  function renderCarbonSuiteCarousel() {
    if (!dom.carouselTrack) return;
    dom.carouselTrack.innerHTML = "";

    CARBON_SUITE_MODULES.forEach(function (mod, idx) {
      const card = document.createElement("article");
      card.className = "carbon-slide-card";
      card.setAttribute("role", "group");
      card.setAttribute("aria-label", mod.title);
      card.dataset.moduleIndex = String(idx);

      const well = document.createElement("div");
      well.className = "badge-command-well";

      const img = document.createElement("img");
      img.src = mod.badgeSrc;
      img.alt = mod.title + " Emblem";
      img.className = "badge-command-img";
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
      rightCue.textContent = "Inspect Engine →";

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
    });

    suiteCarouselApi = attachCarouselBehavior({
      viewport: dom.carouselViewport,
      track: dom.carouselTrack,
      dotsContainer: dom.carouselDots,
      counterEl: dom.carouselCounter,
      prevBtn: dom.prevBtn,
      nextBtn: dom.nextBtn,
      total: CARBON_SUITE_MODULES.length,
      getLabel: function (i) {
        return "Engine 0" + (i + 1) + " of 06 • " + CARBON_SUITE_MODULES[i].title;
      },
      getIndex: function () {
        return state.activeModuleIndex;
      },
      setIndex: function (i) {
        state.activeModuleIndex = i;
      }
    });
  }

  function hideAllModals() {
    if (dom.moduleModal) {
      dom.moduleModal.style.display = "none";
    }
    if (dom.govModal) {
      dom.govModal.style.display = "none";
    }
    if (dom.govModal) {
      dom.govModal.style.display = "none";
    }
    if (dom.principalModal) {
      dom.principalModal.style.display = "none";
    }
    if (dom.govModal) {
      dom.govModal.style.display = "none";
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

  function applyModalProfile(profile, idx) {
    if (dom.moduleBadgeImg) {
      dom.moduleBadgeImg.src = profile.badgeSrc;
      dom.moduleBadgeImg.alt = profile.title + " Emblem";
    }
    if (dom.moduleKicker) {
      dom.moduleKicker.textContent = profile.tag;
    }
    if (dom.moduleTitle) {
      dom.moduleTitle.textContent = profile.title;
    }
    if (dom.moduleSubtitle) {
      dom.moduleSubtitle.textContent = profile.subtitle;
    }
    if (dom.moduleBrief) {
      dom.moduleBrief.textContent = profile.brief;
    }

    if (dom.moduleSubdomainWrap && dom.moduleSubdomainLink) {
      if (profile.subdomain) {
        dom.moduleSubdomainWrap.style.display = "flex";
        dom.moduleSubdomainLink.href = profile.subdomain;
        dom.moduleSubdomainLink.textContent = profile.subdomain;
      } else {
        dom.moduleSubdomainWrap.style.display = "none";
        dom.moduleSubdomainLink.href = "https://rehgexec.com";
        dom.moduleSubdomainLink.textContent = "";
      }
    }

    if (dom.modulePoints) {
      dom.modulePoints.innerHTML = "";
      (profile.points || []).forEach(function (pt) {
        const li = document.createElement("li");
        li.textContent = pt;
        dom.modulePoints.appendChild(li);
      });
    }

    if (typeof idx === "number" && suiteCarouselApi) {
      suiteCarouselApi.updateUI(idx);
    }
  }

  function populateModuleModal(index) {
    const total = CARBON_SUITE_MODULES.length;
    const idx = ((index % total) + total) % total;
    const mod = CARBON_SUITE_MODULES[idx];
    state.activeModuleIndex = idx;
    applyModalProfile(mod, idx);
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
    if (dom.govModal) {
      dom.govModal.style.display = "none";
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

  function openNamedPopoutModal(key, triggerEl) {
    if (!dom.moduleModal) return;
    const special = SPECIAL_POPOUT_PROFILES[key];
    if (special) {
      if (triggerEl) {
        state.lastFocusedEl = triggerEl;
      } else if (!state.activeModalId) {
        state.lastFocusedEl = document.activeElement;
      }
      if (dom.principalModal) {
        dom.principalModal.style.display = "none";
      }
      state.activeModuleIndex = special.moduleIndex || 0;
      applyModalProfile(special, state.activeModuleIndex);
      dom.moduleModal.style.display = "flex";
      state.activeModalId = "carbon-module-modal";
      document.body.classList.add("modal-open");
      if (dom.moduleModalDialog) {
        dom.moduleModalDialog.scrollTop = 0;
        dom.moduleModalDialog.focus();
      }
      return;
    }

    const foundIdx = CARBON_SUITE_MODULES.findIndex(function (m) {
      return m.id === key;
    });
    openModuleModal(foundIdx >= 0 ? foundIdx : 0, triggerEl);
  }

  function populateGovernanceModal(index) {
    const total = GOVERNANCE_EXPERIENCES.length;
    const idx = ((index % total) + total) % total;
    const exp = GOVERNANCE_EXPERIENCES[idx];
    state.activeGovernanceIndex = idx;

    if (dom.govModalKicker) {
      dom.govModalKicker.textContent = exp.kicker;
    }
    if (dom.govModalTitle) {
      dom.govModalTitle.textContent = exp.title;
    }
    if (dom.govModalImg) {
      dom.govModalImg.onerror = null;
      dom.govModalImg.src = exp.imgSrc;
      dom.govModalImg.alt = exp.title;
      attachMultiFallback(dom.govModalImg, exp.imgFallbacks || []);
    }

    if (dom.govModalGuarantee) {
      if (exp.guaranteePrefix || exp.guaranteeBody) {
        dom.govModalGuarantee.style.display = "block";
        dom.govModalGuarantee.innerHTML = "";
        const strongEl = document.createElement("strong");
        strongEl.textContent = exp.guaranteePrefix;
        dom.govModalGuarantee.appendChild(strongEl);
        dom.govModalGuarantee.appendChild(document.createTextNode(exp.guaranteeBody));
      } else {
        dom.govModalGuarantee.style.display = "none";
        dom.govModalGuarantee.innerHTML = "";
      }
    }

    if (dom.govModalParagraphs) {
      dom.govModalParagraphs.innerHTML = "";
      (exp.paragraphs || []).forEach(function (txt) {
        const p = document.createElement("p");
        p.textContent = txt;
        dom.govModalParagraphs.appendChild(p);
      });
    }

    if (dom.govModalListIntro) {
      if (exp.listIntro) {
        dom.govModalListIntro.style.display = "block";
        dom.govModalListIntro.textContent = exp.listIntro;
      } else {
        dom.govModalListIntro.style.display = "none";
        dom.govModalListIntro.textContent = "";
      }
    }

    if (dom.govModalBullets) {
      dom.govModalBullets.innerHTML = "";
      if (exp.bullets && exp.bullets.length) {
        dom.govModalBullets.style.display = "flex";
        exp.bullets.forEach(function (item) {
          const li = document.createElement("li");
          const st = document.createElement("strong");
          st.textContent = item.lead;
          li.appendChild(st);
          li.appendChild(document.createTextNode(item.body));
          dom.govModalBullets.appendChild(li);
        });
      } else {
        dom.govModalBullets.style.display = "none";
      }
    }

    if (dom.govModalCtaBtn) {
      dom.govModalCtaBtn.textContent = exp.ctaLabel;
    }

    if (governanceCarouselApi) {
      governanceCarouselApi.updateUI(idx);
    }
  }

  function openGovernanceModal(index, triggerEl) {
    if (!dom.govModal) return;
    if (triggerEl) {
      state.lastFocusedEl = triggerEl;
    } else if (!state.activeModalId) {
      state.lastFocusedEl = document.activeElement;
    }

    if (dom.moduleModal) {
      dom.moduleModal.style.display = "none";
    }
    if (dom.principalModal) {
      dom.principalModal.style.display = "none";
    }

    populateGovernanceModal(index);
    dom.govModal.style.display = "flex";
    state.activeModalId = "governance-experience-modal";
    document.body.classList.add("modal-open");

    if (dom.govModalDialog) {
      dom.govModalDialog.scrollTop = 0;
      dom.govModalDialog.focus();
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
    if (dom.govModal) {
      dom.govModal.style.display = "none";
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
      notes || "Looking to connect regarding empirical hospitality operations, C-Suite governance, and CARBON™ engines.",
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

    const featureCards = document.querySelectorAll(".feature-badge-card[data-module-key]");
    featureCards.forEach(function (card) {
      function handleActivate() {
        const key = card.getAttribute("data-module-key");
        openNamedPopoutModal(key, card);
      }
      card.addEventListener("click", handleActivate);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleActivate();
        }
      });
    });

    const footerModuleBtns = document.querySelectorAll("[data-footer-module]");
    footerModuleBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-footer-module");
        openNamedPopoutModal(key, btn);
      });
    });

    if (dom.closeModuleBtn) {
      dom.closeModuleBtn.addEventListener("click", hideAllModals);
    }

    if (dom.closeGovBtn) {
      dom.closeGovBtn.addEventListener("click", hideAllModals);
    }

    if (dom.govModal) {
      dom.govModal.addEventListener("click", function (e) {
        if (e.target === dom.govModal) {
          hideAllModals();
        }
      });
    }

    if (dom.govPrevModalBtn) {
      dom.govPrevModalBtn.addEventListener("click", function () {
        populateGovernanceModal(state.activeGovernanceIndex - 1);
      });
    }

    if (dom.govNextModalBtn) {
      dom.govNextModalBtn.addEventListener("click", function () {
        populateGovernanceModal(state.activeGovernanceIndex + 1);
      });
    }

    if (dom.govModalCtaBtn) {
      dom.govModalCtaBtn.addEventListener("click", function () {
        const exp = GOVERNANCE_EXPERIENCES[state.activeGovernanceIndex];
        const topic = exp ? exp.bookingTopic : "Operator-to-Operator C-Suite Governance";
        openPrincipalModal(topic, dom.govModalCtaBtn);
      });
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
        const currentTitle = dom.moduleTitle ? dom.moduleTitle.textContent : "CARBON™ Suite Briefing";
        openPrincipalModal(currentTitle + " Briefing", dom.moduleRequestBtn);
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
            dom.formStatus.textContent = "Please enter your name before composing the dispatch to Mricks@rehgexec.com.";
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
    initImageFallbacks();
    initMobileMenu();
    initGovernanceCarousel();
    initRealityCarousel();
    renderCarbonSuiteCarousel();
    initModalsAndForms();
  });
})();
