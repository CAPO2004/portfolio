/* ====================================
   Main JavaScript
   الشركة المصرية للأعمال والحلول
   ==================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Preloader
    initPreloader();

    // Initialize Background Animation
    initCanvasBackground();

    // Initialize all functions
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initContactForm();
    initPortfolioFilters();
    initDarkMode();
});

/* === Preloader === */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Check if user clicked language switch (skip preloader)
        const skipPreloader = sessionStorage.getItem('skipPreloader');

        if (skipPreloader === 'true') {
            // User switched language, hide immediately
            preloader.remove();
            // Clear the flag for next time
            sessionStorage.removeItem('skipPreloader');
        } else {
            // Normal page load or refresh, show preloader
            setTimeout(function () {
                preloader.classList.add('hidden');
                setTimeout(function () {
                    preloader.remove();
                }, 600);
            }, 2500);
        }
    }

    // Set flag when clicking language switch links
    document.querySelectorAll('.lang-option, .lang-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
            sessionStorage.setItem('skipPreloader', 'true');
        });
    });
}

/* === Theme Toggle Switch === */
function initDarkMode() {
    const themeSwitch = document.getElementById('themeSwitch');
    const html = document.documentElement;

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        if (themeSwitch) {
            themeSwitch.checked = savedTheme === 'dark';
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', function () {
            const newTheme = this.checked ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Language Dropdown
    initLanguageDropdown();
}

/* === Background Canvas Animation === */
function initCanvasBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Resize canvas
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const particleCount = 35; // Number of floating items

    // FontAwesome Unicodes for Business Icons
    // Briefcase, Building, Chart-Line, Handshake, File-Contract, Balance-Scale, Globe, Star
    const symbols = ['\uf0b1', '\uf1ad', '\uf201', '\uf2b5', '\uf56c', '\uf24e', '\uf0ac', '\uf005'];

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speed = (Math.random() * 0.5) + 0.1; // Slow floating
            this.text = symbols[Math.floor(Math.random() * symbols.length)];
            this.size = Math.random() * 20 + 15; // Size between 15px and 35px
            this.opacity = Math.random() * 0.15 + 0.05; // Very subtle opacity
            this.direction = Math.random() > 0.5 ? 1 : -1; // Slight horizontal drift
        }

        update() {
            this.y -= this.speed; // Move up
            this.x += this.direction * 0.1; // Slight drift

            // Reset if goes off screen
            if (this.y < -50) {
                this.y = canvas.height + 50;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

            // Gold and Red colors based on theme
            if (isDark) {
                // Gold in dark mode
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            } else {
                // Red/Gray in light mode
                ctx.fillStyle = Math.random() > 0.5
                    ? `rgba(200, 16, 46, ${this.opacity})`
                    : `rgba(100, 100, 100, ${this.opacity})`;
            }

            // Usage of Font Awesome
            ctx.font = `900 ${this.size}px "Font Awesome 6 Free"`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.text, this.x, this.y);
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    // Check if Font Awesome is loaded
    document.fonts.ready.then(function () {
        animate();
    });
}

/* === Language Dropdown === */
function initLanguageDropdown() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = langToggle ? langToggle.closest('.lang-dropdown') : null;

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
    }
}

/* === Mobile Menu Toggle === */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/* === Smooth Scrolling === */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* === Header Scroll Effect === */
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

/* === Scroll Animations === */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (animatedElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animate || 'fadeInUp';
                const delay = element.dataset.delay || 0;

                setTimeout(() => {
                    element.classList.add('animate-' + animation);
                    element.style.opacity = '1';
                }, delay * 100);

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

/* === Contact Form === */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Simple validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            // Email validation
            const emailField = this.querySelector('[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }

            if (isValid) {
                // Show success message
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح!';
                submitBtn.disabled = true;

                // Reset form after 2 seconds
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);

                // Here you would normally send the data to a server
                console.log('Form submitted:', data);
            }
        });
    }
}

/* === Portfolio Filters === */
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length === 0 || portfolioItems.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.dataset.filter;

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* === Counter Animation === */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

/* === Initialize Counters on Scroll === */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    if (counters.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize counters when DOM is ready
document.addEventListener('DOMContentLoaded', initCounters);

/* === WhatsApp Click Handler === */
function openWhatsApp() {
    const phoneNumber = '2001144999188';
    const message = 'مرحباً، أريد الاستفسار عن خدمات تأسيس الشركات في السعودية';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
