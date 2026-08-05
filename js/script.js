/* ==========================================================
   ALISHA BATOOL — PORTFOLIO SCRIPT
   ========================================================== */
(() => {
  "use strict";

  /* ---------- Loader ---------- */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => loader.classList.add("is-hidden"), 550);
  });

  /* ---------- Theme toggle (dark / light) ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const savedTheme = null; // no localStorage in this environment; session-only preference
  let currentTheme = savedTheme || "dark";
  applyTheme(currentTheme);

  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      themeToggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      themeToggle.setAttribute("aria-pressed", "false");
    }
  }

  /* ---------- Mobile nav ---------- */
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Icon library (inline SVG paths, stroke-based) ---------- */
  const icons = {
    brush: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 15l6-9 3 3-9 6z"/><path d="M9 15l-4 5 5-4"/></svg>',
    logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16" opacity=".4"/></svg>',
    identity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.4"/><path d="M14 10h4M14 14h4"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
    canva: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 7-2.6"/></svg>',
    presentation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M9 20h6M12 16v4"/></svg>',
    thumbnail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg>',
    shortform: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M10 8l4 2-4 2z" fill="currentColor" stroke="none"/></svg>',
    script: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h9l3 3v15H6z"/><path d="M9 11h6M9 15h6M9 7h3"/></svg>',
    prompt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5h16v10H8l-4 4z"/><path d="M8 9h8M8 12h5"/></svg>',
    ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="5" width="14" height="14" rx="3"/><circle cx="9.5" cy="10.5" r="1"/><circle cx="14.5" cy="10.5" r="1"/><path d="M9 15c1.2 1 3.8 1 5 0"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12l5 5 9-11"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5h16v11H9l-5 4z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.6 6.2L21 10l-5 4.3L17.4 21 12 17.3 6.6 21 8 14.3 3 10l6.4-.8z"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17l6-6 4 4 8-9"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 5v14M5 12h14"/></svg>',
  };

  /* ---------- Data: Services ---------- */
  const services = [
    { icon: "identity", title: "Graphic Design", desc: "Clean, purposeful visuals that make your brand instantly recognizable." },
    { icon: "logo", title: "Logo Design", desc: "Distinct marks built to work at 16px and 16 feet, in colour or a single line." },
    { icon: "brush", title: "Website Design", desc: "Custom website design with responsive layouts, clean code, and fast performance." },
    { icon: "social", title: "Social Media Post Design", desc: "On-brand templates and one-off posts that stop the scroll." },
    { icon: "canva", title: "Canva Design", desc: "Editable, on-brand Canva kits your team can update without a designer." },
    { icon: "presentation", title: "Presentation Design", desc: "Pitch decks and reports that make the story easier to follow." },
    { icon: "thumbnail", title: "YouTube Thumbnail Design", desc: "High-contrast thumbnails engineered for click-through, not just looks." },
    { icon: "video", title: "Video Editing", desc: "Polished cuts, pacing, and colour grading for long-form content." },
    { icon: "shortform", title: "Short Form Video Editing", desc: "Reels, TikToks and Shorts edited for retention from frame one." },
    { icon: "script", title: "UGC Script Writing", desc: "Hook-driven scripts that sound like a person, not an ad." },
    { icon: "prompt", title: "AI Prompt Writing", desc: "Reusable prompt systems that make AI output sound like your brand." },
    { icon: "ai", title: "AI Content Writing", desc: "AI-assisted copy and captions, edited and fact-checked by a human." },
  ];

  const servicesGrid = document.getElementById("servicesGrid");
  servicesGrid.innerHTML = services
    .map(
      (s) => `
    <div class="service-card glass" data-reveal>
      <div class="service-card__glow"></div>
      <div class="service-card__icon">${icons[s.icon]}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`

    )
    .join("");

  /* ---------- Data: Portfolio ---------- */
  const projects = [
    { title: "Coffee Brand Identity", cat: "Branding", desc: "Full identity system for an independent coffee roastery — logo, packaging, and menu design", img:"css/assets/terrabean coffee.png" },
    { title: "Eco Fashion Brand Design", cat: "Branding", desc: "Sustainable-fashion visual identity built around earth tones and recycled-paper textures", img:"css/assets/fashion.png" },
    { title: "Social Media Campaign", cat: "Social", desc: "A 30-post launch campaign for a wellness brand, designed for consistency at speed", img:"css/assets/social.png"},
    { title: "Logo Collection", cat: "Branding", desc: "A curated set of marks for startups across fintech, food, and fitness", img:"css/assets/landing page.jpg"},
    { title: "Business Presentation", cat: "Presentation", desc: "Investor deck redesign that clarified the story and doubled meeting requests" , img:"css/assets/presentation.png"},
    { title: "YouTube Thumbnail Collection", cat: "Social", desc: "A batch of high-CTR thumbnails for a tech-review channel", img:"css/assets/youtube thumbnail.png"},
    { title: "Instagram Post Designs", cat: "Social", desc: "Grid-cohesive carousel and static post templates for a personal brand", img:"css/assets/open .png"},
    { title: "Video Editing Showcase", cat: "Video", desc: "Short-form highlight reel showing pacing, captions, and colour work", img:"css/assets/video editing.png"},
  ];

  const portfolioGrid = document.getElementById("portfolioGrid");
  portfolioGrid.innerHTML = projects
    .map((p, i) => {
      const hue = 150 + i * 6;
      return `
    <div class="project-card glass" data-reveal data-category="${p.cat}">
      <div class="project-card__media"> <img src="${p.img}" alt="${p.title}"style="width:100%; height:100%; object-fit: contain; border-redius: 8px;">
         </div>
      <div class="project-card__body">
        <span class="project-card__cat">${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="#" class="project-card__link" onclick="return false">View Project ${icons.arrow}</a>
      </div>
    </div>`;
    })
    .join("");

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".project-card").forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    })
  );

  /* ---------- Data: Why choose me ---------- */
  const whyItems = [
    { icon: "spark", title: "Creative & Original Designs" },
    { icon: "chat", title: "Professional Communication" },
    { icon: "clock", title: "Fast Delivery" },
    { icon: "check", title: "High Quality Work" },
    { icon: "identity", title: "Attention to Detail" },
    { icon: "star", title: "Client Satisfaction" },
    { icon: "trend", title: "Modern Design Trends" },
    { icon: "ai", title: "AI-Powered Workflow" },
  ];
  document.getElementById("whyGrid").innerHTML = whyItems
    .map(
      (w) => `
    <div class="why-card glass" data-reveal>
      <div class="why-card__icon">${icons[w.icon]}</div>
      <h3>${w.title}</h3>
    </div>`
    )
    .join("");

  /* ---------- Data: Testimonials ---------- */
  const testimonials = [
    { name: "Alisha batool", role: "Graphic designer.", initials: "AB", quote: "transforming creative ideas into high-impact visuals.From social graphics to brand logos, every piece is crafted to look premium and feel authentic to your audience." },
    { name: "social media content", role: "strategy and designs", initials: "AB", quote: "focusing on designs that don't just look good, but drive engagement.Engaging post layouts and thumbnails designed to catch attention and increase clicks." },
    { name: "seamless workflow", role: "on time delivery guarantee", initials: "AB", quote: "clear communication, quick turnaround times, and organized workflow. Expect zero back-and-front and final deliverables deliverd right on schedule." },
  ];
  document.getElementById("testimonialsGrid").innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial-card glass" data-reveal>
      <div class="testimonial-card__stars">★★★★★</div>
      <p class="quote">"${t.quote}"</p>
      <div class="testimonial-card__person">
        <div class="testimonial-card__avatar">${t.initials}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>`
    )
    .join("");

  /* ---------- Data: FAQ ---------- */
  const faqs = [
    { q: "What services do you offer?", a: "Graphic design, brand identity, social media design, presentation design, video editing, short-form editing, UGC scriptwriting, and AI-assisted content and prompt writing." },
    { q: "How long does a project take?", a: "Most single-deliverable projects (a logo, a thumbnail set) take 3–5 business days. Full brand identities typically take 2–3 weeks depending on scope and feedback rounds." },
    { q: "Do you offer revisions?", a: "Yes — every package includes two rounds of revisions. Additional rounds can be added if a project needs extra iteration." },
    { q: "How can I contact you?", a: "Use the contact form below, email me directly, or message me on Fiverr or LinkedIn. I reply within one business day." },
    { q: "What design tools do you use?", a: "Canva, Adobe Photoshop and Illustrator for design; CapCut for video; and ChatGPT and Claude AI as part of an AI-assisted content workflow." },
  ];
  document.getElementById("faqList").innerHTML = faqs
    .map(
      (f, i) => `
    <div class="faq-item glass" data-index="${i}">
      <button class="faq-item__q" aria-expanded="false">
        <span>${f.q}</span>
        ${icons.plus}
      </button>
      <div class="faq-item__a"><p>${f.a}</p></div>
    </div>`
    )
    .join("");

  document.querySelectorAll(".faq-item__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("is-open"));
      document.querySelectorAll(".faq-item__q").forEach((b) => b.setAttribute("aria-expanded", "false"));
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Animated stat counters ---------- */
  const statEls = document.querySelectorAll(".stat__num");
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.round(target / 40));
        const tick = () => {
          cur += step;
          if (cur >= target) { el.textContent = target + "+"; return; }
          el.textContent = cur;
          requestAnimationFrame(tick);
        };
        tick();
        statObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  statEls.forEach((el) => statObserver.observe(el));

  /* ---------- Skill bar fill on reveal ---------- */
  const bars = document.querySelectorAll(".bar");
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const fill = entry.target.querySelector(".bar__fill");
        fill.style.width = entry.target.dataset.level + "%";
        barObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((bar) => barObserver.observe(bar));

  /* ---------- Contact form (front-end only) ---------- */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.classList.add("is-sent");
    setTimeout(() => {
      form.reset();
      btn.classList.remove("is-sent");
    }, 2600);
  });

  /* ---------- Back to top ---------- */
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Nav shrink shadow on scroll ---------- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.style.boxShadow = window.scrollY > 40 ? "var(--shadow-soft)" : "none";
  });
})();
