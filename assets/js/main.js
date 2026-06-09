/* ============================================================
   FONDATION CHRÉTIENS D'AFRIQUE — Main JS
   ============================================================ */

(function () {
  'use strict';

  /* ---------- SCROLL PROGRESS ---------- */
  const progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }

  /* ---------- NAVBAR ---------- */
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  const navLinks = document.querySelectorAll('.nav-links a[data-nav]');
  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-nav') === current) {
        link.classList.add('active');
      }
    });
  }

  /* ---------- STICKY DONATE ---------- */
  const stickyDonate = document.getElementById('stickyDonate');
  function updateStickyDonate() {
    if (!stickyDonate) return;
    if (window.scrollY > window.innerHeight * 0.6) {
      stickyDonate.classList.add('visible');
    } else {
      stickyDonate.classList.remove('visible');
    }
  }

  /* ---------- SCROLL HANDLER ---------- */
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateProgress();
        updateNavbar();
        updateActiveNav();
        updateStickyDonate();
        revealElements();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ---------- MOBILE MENU ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.toggleMobileMenu = function () {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  };

  window.closeMobileMenu = function () {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  /* ---------- REVEAL ON SCROLL ---------- */
  function revealElements() {
    const elements = document.querySelectorAll(
      '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)'
    );
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }

  /* ---------- SMOOTH SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
        ) || 76;
        const top = target.getBoundingClientRect().top + window.scrollY - (href === '#home' ? 0 : navHeight);
        window.scrollTo({ top, behavior: 'smooth' });
        window.closeMobileMenu();
      }
    });
  });

  /* ---------- COUNTER ANIMATION ---------- */
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = eased * target;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  /* ---------- CONTACT FORM ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn  = contactForm.querySelector('.form-submit');
      const span = btn.querySelector('[data-i18n="form-submit"]');
      const lang = (window.CDA_i18n && document.documentElement.lang) || 'fr';
      const t    = window.CDA_i18n ? window.CDA_i18n.translations[lang] : null;
      const sendingText  = t ? t['form-sending'] : 'Envoi en cours…';
      const sentText     = t ? t['form-sent']    : '✓ Message envoyé !';
      const errorText    = t ? t['form-error']   : '✗ Erreur — réessayez';
      const originalText = span ? span.textContent : btn.textContent;

      const setText = (txt) => { if (span) span.textContent = txt; else btn.textContent = txt; };

      setText(sendingText);
      btn.disabled = true;

      try {
        const data = Object.fromEntries(new FormData(contactForm));
        const res  = await fetch('/send', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(data),
        });
        const json = await res.json();

        if (json.ok) {
          setText(sentText);
          btn.style.background = '#2C5E40';
          setTimeout(() => {
            setText(originalText);
            btn.style.background = '';
            btn.disabled = false;
            contactForm.reset();
          }, 3000);
        } else {
          setText(errorText);
          btn.style.background = '#c0392b';
          setTimeout(() => {
            setText(originalText);
            btn.style.background = '';
            btn.disabled = false;
          }, 3000);
        }
      } catch (err) {
        setText(errorText);
        btn.style.background = '#c0392b';
        setTimeout(() => {
          setText(originalText);
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }
    });
  }

  /* ---------- SCROLL TO DISCOVER ---------- */
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- HERO SLIDESHOW ---------- */
  (function () {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-slide-indicator');
    if (!slides.length) return;

    let current = 0;
    const DURATION = 7000; // ms each slide shows

    function goTo(index) {
      // deactivate current
      slides[current].classList.remove('active');
      if (indicators[current]) indicators[current].classList.remove('active');

      current = index % slides.length;

      // activate next — restart zoom animation via reflow
      const el = slides[current];
      el.style.animation = 'none';
      el.offsetHeight; // trigger reflow
      el.style.animation = '';
      el.classList.add('active');
      if (indicators[current]) {
        const ind = indicators[current];
        ind.classList.add('active');
        // restart the CSS bar animation
        const bar = ind.querySelector('.hero-slide-indicator-bar');
        if (bar) {
          bar.style.animation = 'none';
          bar.offsetHeight; // reflow
          bar.style.animation = '';
        }
      }
    }

    // start first slide
    goTo(0);

    // auto-advance
    let timer = setInterval(() => goTo(current + 1), DURATION);

    // click on indicator
    indicators.forEach((ind, i) => {
      ind.addEventListener('click', () => {
        clearInterval(timer);
        goTo(i);
        timer = setInterval(() => goTo(current + 1), DURATION);
      });
    });
  })();

  /* ---------- INIT ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    updateNavbar();
    updateStickyDonate();
    revealElements();
    updateActiveNav();
    // Trigger on first load
    setTimeout(revealElements, 150);
  });

  window.addEventListener('load', function () {
    updateProgress();
    revealElements();
  });

})();
