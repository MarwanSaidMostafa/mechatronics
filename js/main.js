/* ==========================================================================
   MECHA VISION TEAM — main.js
   Handles: preloader, sticky navbar, mobile menu, dark/light theme toggle,
   scroll reveal animations, scroll progress bar, scroll-to-top button,
   and the image lightbox gallery.
   ========================================================================== */
/* ---------- 2. TRANSLATION DICTIONARIES ---------- */
const ROLE_TRANSLATIONS = {
  "Mechanical Design Engineer": "مهندس تصميم ميكانيكي",
  "Electronics Engineer": "مهندس إلكترونيات",
  "Embedded Systems Engineer": "مهندس أنظمة مدمجة",
  "Software Engineer": "مهندس برمجيات",
  "Control Systems Engineer": "مهندس أنظمة تحكم",
  "Computer Vision Engineer": "مهندس رؤية حاسوبية",
  "PCB Design Engineer": "مهندس تصميم دوائر مطبوعة",
  "Firmware Engineer": "مهندس برمجيات مدمجة",
  "UI / UX Designer": "مصمم واجهات وتجربة مستخدم",
  "Hydraulics Engineer": "مهندس هيدروليكا",
  "Power Systems Engineer": "مهندس أنظمة طاقة",
  "Sensors & Instrumentation": "أجهزة استشعار وقياس",
  "Communications Engineer": "مهندس اتصالات",
  "Structural Engineer": "مهندس إنشائي",
  "Data Analyst": "محلل بيانات"
};

const TRANSLATIONS = {
  en: {
    nav_intro: "Introduction", nav_mechanical: "Mechanical", nav_electronics: "Electronics",
    nav_software: "Software", nav_video: "Demo", nav_team: "Team",
    header_caption: "Graduation Project · 2026",
    profile_role_title: "Team Leader", profile_role_dept: "R&D",
    hero_eyebrow: "Mecha Vision Team",
    hero_title: "Submarine Live Monitoring",
    hero_desc: "An underwater vehicle engineered for real-time visual inspection, environmental sensing, and remote monitoring in marine environments.",
    intro_eyebrow: "Module 01 · Overview", intro_title: "Introduction",
    intro_p1: "The Intelligent Live Monitoring Submarine is a compact, remotely operated underwater vehicle designed to capture live video, track depth and orientation, and relay telemetry to a surface control station in real time. Built as our graduation project, it combines mechanical design, embedded electronics, and custom software into a single integrated platform.",
    intro_p2: "The system targets applications in underwater inspection, environmental monitoring, and search support — areas where continuous, intelligent observation below the surface is difficult to achieve with traditional tools. This page walks through how the mechanical, electronic, and software layers come together to make that possible.",
    mech_eyebrow: "Module 02 · Structure", mech_title: "Mechanical Design",
    mech_p: "The hull was modeled to balance buoyancy, stability, and access to internal components. A sealed pressure housing protects the electronics bay, while modular thruster mounts and a reinforced frame allow the vehicle to maneuver precisely at depth. Every part was prototyped, tested for water resistance, and refined across several design iterations before final assembly.",
    elec_eyebrow: "Module 03 · Systems", elec_title: "Electronics System",
    elec_p: "The electronics stack is built around a central control board that manages power distribution, motor drivers, and sensor input. Depth, orientation, and temperature sensors feed live data to the onboard processor, which is relayed to the surface through a tethered communication line for low-latency, reliable monitoring.",
    chip_pcb: "Control PCB", chip_sensors: "Live Sensors", chip_telemetry: "Wired Telemetry", chip_battery: "Battery Bank",
    soft_eyebrow: "Module 04 · Intelligence", soft_title: "Software System",
    soft_p: "The software layer streams live video and telemetry to a custom monitoring dashboard, where depth, heading, and sensor readings are visualized in real time. An onboard vision pipeline assists with object detection underwater, while the control interface lets an operator adjust course, log readings, and review recorded footage after each dive.",
    video_eyebrow: "Module 05 · Demonstration", video_title: "Project Demonstration",
    video_p: "Watch the submarine in action — dive tests, live monitoring footage, and a walkthrough of the control dashboard.",
    video1_title: "Field Dive Test", video1_desc: "Local recording of a full submersion and recovery cycle.",
    video2_title: "Live Monitoring Dashboard", video2_desc: "Screen-capture walkthrough of the real-time telemetry interface.",
    team_eyebrow: "Crew Manifest · 38 Members", team_title: "Mecha Vision Team", team_subtitle: "Meet Our Graduation Project Team",
    footer_brand: "Mecha Vision Team", footer_rights: "All rights reserved.", footer_credit: "Developed by Marwan Said Mostafa Soliman",
    preloader_text: "INITIALIZING SYSTEMS…"
  },
  ar: {
    nav_intro: "مقدمة", nav_mechanical: "ميكانيكا", nav_electronics: "إلكترونيات",
    nav_software: "برمجيات", nav_video: "العرض", nav_team: "الفريق",
    header_caption: "مشروع تخرج · ٢٠٢٦",
    profile_role_title: "قائد الفريق", profile_role_dept: "البحث والتطوير",
    hero_eyebrow: "فريق ميكا فيجن",
    hero_title: "غواصة الرصد الحي الذكية",
    hero_desc: "مركبة غاطسة ذاتية التحكم مصممة للفحص البصري اللحظي، واستشعار العوامل البيئية، والمراقبة عن بُعد في البيئات البحرية.",
    intro_eyebrow: "الوحدة ٠١ · نظرة عامة", intro_title: "مقدمة",
    intro_p1: "غواصة الرصد الحي الذكية هي مركبة غاطسة مدمجة تُدار عن بُعد، صُممت لالتقاط بث فيديو حي، وتتبّع العمق والاتجاه، ونقل بيانات القياس عن بُعد إلى محطة تحكم سطحية في الوقت الفعلي. وباعتبارها مشروع تخرجنا، فهي تجمع بين التصميم الميكانيكي، والإلكترونيات المدمجة، والبرمجيات المخصصة في منصة واحدة متكاملة.",
    intro_p2: "يستهدف النظام تطبيقات الفحص تحت الماء، والرصد البيئي، ودعم عمليات البحث — وهي مجالات يصعب فيها تحقيق مراقبة ذكية ومستمرة تحت السطح باستخدام الأدوات التقليدية. توضح هذه الصفحة كيف تتكامل الطبقات الميكانيكية والإلكترونية والبرمجية لتحقيق ذلك.",
    mech_eyebrow: "الوحدة ٠٢ · البنية", mech_title: "التصميم الميكانيكي",
    mech_p: "تم تصميم الهيكل لتحقيق التوازن بين الطفو والثبات وسهولة الوصول إلى المكونات الداخلية. يحمي غلاف ضغط محكم الغلق حجرة الإلكترونيات، بينما تتيح قواعد الدفع النمطية والهيكل المقوّى للمركبة المناورة بدقة في الأعماق. تم تصنيع كل جزء كنموذج أولي واختباره لمقاومة الماء، وتطويره عبر عدة تكرارات تصميمية قبل التجميع النهائي.",
    elec_eyebrow: "الوحدة ٠٣ · الأنظمة", elec_title: "النظام الإلكتروني",
    elec_p: "تُبنى منظومة الإلكترونيات حول لوحة تحكم مركزية تدير توزيع الطاقة، ومشغلات المحركات، ومدخلات المستشعرات. تغذي مستشعرات العمق والاتجاه ودرجة الحرارة المعالج الداخلي ببيانات حية، تُنقل إلى السطح عبر خط اتصال سلكي لضمان مراقبة موثوقة وبزمن استجابة منخفض.",
    chip_pcb: "لوحة التحكم", chip_sensors: "مستشعرات حية", chip_telemetry: "قياس عن بُعد سلكي", chip_battery: "حزمة البطاريات",
    soft_eyebrow: "الوحدة ٠٤ · الذكاء", soft_title: "النظام البرمجي",
    soft_p: "تبث الطبقة البرمجية الفيديو الحي وبيانات القياس عن بُعد إلى لوحة تحكم مخصصة، حيث يتم عرض العمق والاتجاه وقراءات المستشعرات بصريًا في الوقت الفعلي. يساعد نظام الرؤية الحاسوبية المدمج في كشف الأجسام تحت الماء، بينما تتيح واجهة التحكم للمشغل ضبط المسار، وتسجيل القراءات، ومراجعة اللقطات المسجلة بعد كل غطسة.",
    video_eyebrow: "الوحدة ٠٥ · العرض التوضيحي", video_title: "عرض توضيحي للمشروع",
    video_p: "شاهد الغواصة أثناء العمل — اختبارات الغطس، ولقطات المراقبة الحية، وجولة في لوحة التحكم.",
    video1_title: "اختبار غطس ميداني", video1_desc: "تسجيل محلي لدورة غطس واستعادة كاملة.",
    video2_title: "لوحة المراقبة الحية", video2_desc: "جولة مسجّلة على واجهة القياس عن بُعد في الوقت الفعلي.",
    team_eyebrow: "قائمة الطاقم · ٣٨ عضوًا", team_title: "فريق ميكا فيجن", team_subtitle: "تعرّف على فريق مشروع تخرجنا",
    footer_brand: "فريق ميكا فيجن", footer_rights: "جميع الحقوق محفوظة.", footer_credit: "تم التطوير بواسطة مروان سعيد مصطفي سليمان",
    preloader_text: "جارٍ تهيئة الأنظمة…"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader && preloader.classList.add('loaded'), 400);
  });
  // Fallback in case 'load' already fired
  if (document.readyState === 'complete') {
    setTimeout(() => preloader && preloader.classList.add('loaded'), 400);
  }

  /* ---------- Sticky navbar ---------- */
  const navbar = document.querySelector('.navbar');
  const onScrollNav = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---------- Theme toggle (dark navy <-> light surface) ---------- */
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('mvt-theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      if (next === 'light') root.setAttribute('data-theme', 'light');
      else root.removeAttribute('data-theme');
      localStorage.setItem('mvt-theme', next);
    });
  }

  /* ---------- Scroll reveal (fade-in on scroll) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Scroll progress telemetry bar ---------- */
  const telemetry = document.querySelector('.scroll-telemetry');
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (telemetry) telemetry.style.width = pct + '%';
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', scrollTop > 500);
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Active nav link highlight ---------- */
  const sections = document.querySelectorAll('main section[id]');
  if (sections.length) {
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => navObserver.observe(s));
  }

  /* ---------- Lightbox gallery ---------- */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.getAttribute('src');
      lightboxImg.alt = img.getAttribute('alt') || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

});


/* ---------- 7. LANGUAGE TOGGLE (EN/AR + RTL) ---------- */
function initLanguage(){
  const langToggle = document.querySelector('.lang-toggle');
  const savedLang = localStorage.getItem('mvt-lang') || 'en';
  applyLanguage(savedLang);
  if (!langToggle) return;
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('lang') || 'en';
    const next = current === 'en' ? 'ar' : 'en';
    applyLanguage(next);
    localStorage.setItem('mvt-lang', next);
  });
}

function applyLanguage(lang){
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    if (lang === 'en') {
      langToggle.innerHTML = '<span class="lang-label">العربية</span>';
      langToggle.setAttribute('aria-label', 'Switch to Arabic');
    } else {
      langToggle.innerHTML = '<span class="lang-label">English</span>';
      langToggle.setAttribute('aria-label', 'التبديل إلى الإنجليزية');
    }
  }

  renderTeam(lang);
}

/* ---------- 8. TEAM RENDER (rebuilt on language change) ---------- */
function renderTeam(lang){
  const leftCol = document.querySelector('[data-team-col="left"]');
  const rightCol = document.querySelector('[data-team-col="right"]');
  if (!leftCol || !rightCol) return;

  leftCol.innerHTML = '';
  rightCol.innerHTML = '';

  const half = Math.ceil(TEAM_MEMBERS.length / 2);
  const leftMembers = TEAM_MEMBERS.slice(0, half);
  const rightMembers = TEAM_MEMBERS.slice(half);

  const buildCard = (member) => {
    const card = document.createElement('div');
    card.className = 'member-card reveal';
    const photoSrc = member.photo && member.photo.trim() !== '' ? member.photo : 'assets/images/avatar-default.svg';
    const displayName = lang === 'ar' ? member.nameAr : member.name;
    const displayRole = lang === 'ar' ? (ROLE_TRANSLATIONS[member.role] || member.role) : member.role;
    card.innerHTML = `
      <div class="member-photo">
        <img src="${photoSrc}" alt="${displayName}" loading="lazy">
      </div>
      <div class="member-info">
        <div class="member-name">${displayName}</div>
        <div class="member-role">${displayRole}</div>
      </div>
    `;
    return card;
  };

  leftMembers.forEach(m => leftCol.appendChild(buildCard(m)));
  rightMembers.forEach(m => rightCol.appendChild(buildCard(m)));

  // Re-observe newly injected cards so the fade-in still triggers
  document.querySelectorAll('.member-card.reveal').forEach(el => revealObserver.observe(el));
}