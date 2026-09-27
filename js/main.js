/**
 * MAIN APP CONTROLLER & INTERACTIVE FEATURES
 * Ahmed Adel Saad Obaid Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. CYBER PRELOADER CONTROLLER
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hidePreloader = () => {
      if (preloader.classList.contains('preloader-hidden')) return;
      preloader.classList.add('preloader-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 550);
    };

    const startTime = performance.now();
    const minTime = 1750; // Allow SVG stroke drawing animation to fully complete and glow before revealing

    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, minTime);
    } else {
      window.addEventListener('load', () => {
        const elapsed = performance.now() - startTime;
        const remaining = Math.max(0, minTime - elapsed);
        setTimeout(hidePreloader, remaining);
      });
      // Safety fallback
      setTimeout(hidePreloader, 2800);
    }
  }

  // 1. STICKY HEADER
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. MOBILE MENU TOGGLE
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. MULTI-PAGE ACTIVE NAVIGATION
  const currentPath = window.location.pathname;
  let currentPage = currentPath.split('/').pop() || 'index.html';
  if (currentPage === '' || currentPage === '/') currentPage = 'index.html';

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('#')[0].split('/').pop();
    if (linkPage === currentPage || (currentPage === 'index.html' && (linkPage === '' || linkPage === 'index.html' || linkPage === '#hero'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3.1 CASE STUDY MODAL CONTROLLER (DEEPVISION & DETAILED ARCHITECTURE)
  const caseStudyModal = document.getElementById('deepvision-modal');
  const closeCaseStudyBtn = document.getElementById('close-case-study');
  
  function openCaseStudy() {
    if (caseStudyModal) {
      caseStudyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCaseStudy() {
    if (caseStudyModal) {
      caseStudyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-case-study="deepvision"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCaseStudy();
    });
  });

  if (closeCaseStudyBtn) {
    closeCaseStudyBtn.addEventListener('click', closeCaseStudy);
  }

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeCaseStudy();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseStudyModal && caseStudyModal.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  // Check URL hash for direct modal opening
  if (window.location.hash === '#deepvision-case-study' || window.location.hash === '#deepvision-modal') {
    setTimeout(openCaseStudy, 400);
  }

  // 4. PROJECT FILTERING
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card, .deepvision-flagship-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 5. COPY TO CLIPBOARD HANDLERS
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        const copiedLabel = currentLang === 'ar' ? 'تم النسخ!' : 'Copied!';
        
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ${copiedLabel}`;
        showToast(currentLang === 'ar' ? `تم نسخ ${textToCopy} إلى الحافظة بنجاح.` : `Copied ${textToCopy} to clipboard.`);

        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      });
    });
  });

  // 6. CONTACT FORM SUBMISSION FEEDBACK
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.getAttribute('lang') || 'ar';
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalContent = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = currentLang === 'ar' ? 'جاري المعالجة...' : 'Processing...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        contactForm.reset();
        
        const successMsg = currentLang === 'ar' 
          ? 'شكراً لتواصلك! تم استلام رسالتك بنجاح وسيقوم أحمد بالرد عليك في أقرب وقت.' 
          : 'Thank you! Your message has been received. Ahmed will get back to you soon.';
        showToast(successMsg);
      }, 1000);
    });
  }

  // 7. TOAST NOTIFICATION UTILITY
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ffb2" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  window.showToast = showToast;

  // 8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  function initScrollReveal() {
    const revealTargets = document.querySelectorAll(
      '.reveal, .reveal-on-scroll, .section-header, .project-card, .service-card, .stat-card, .cert-card, .edu-card, .feature-card, .about-card, .milestone-card, .contact-card, .flagship-card, .hero-metric, .skill-group'
    );

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach(el => {
        el.classList.add('is-revealed', 'active');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed', 'active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.02,
      rootMargin: '0px 0px 40px 0px'
    });

    revealTargets.forEach((el, idx) => {
      el.classList.add('reveal');
      const delay = (idx % 4) * 60;
      if (delay > 0) {
        el.style.transitionDelay = `${delay}ms`;
      }
      observer.observe(el);
    });

    // Immediate check for elements in viewport on load
    setTimeout(() => {
      revealTargets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed', 'active');
        }
      });
    }, 100);
  }
  initScrollReveal();

  // 9. BACK TO TOP BUTTON
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
