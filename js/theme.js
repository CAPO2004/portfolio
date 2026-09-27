/**
 * THEME MANAGER (DARK / LIGHT MODE)
 * Ahmed Adel Saad Obaid Portfolio
 */

class ThemeManager {
  constructor() {
    // Default to dark mode as primary cybersecurity theme
    this.currentTheme = localStorage.getItem('portfolio_theme') || 'dark';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupToggles();
  }

  setTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') return;
    this.currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    this.applyTheme(theme);
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle checkboxes (PHP-Mastery style)
    const checkboxes = document.querySelectorAll('.theme-switch input, input#theme-toggle');
    checkboxes.forEach(cb => {
      cb.checked = (theme === 'dark');
    });

    // Update theme toggle icons for legacy buttons
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
      if (theme === 'dark') {
        icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
      } else {
        icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
      }
    });
  }

  setupToggles() {
    // 1. Checkboxes
    const checkboxes = document.querySelectorAll('.theme-switch input, input#theme-toggle');
    checkboxes.forEach(cb => {
      cb.checked = (this.currentTheme === 'dark');
      cb.addEventListener('change', () => {
        this.setTheme(cb.checked ? 'dark' : 'light');
      });
    });

    // 2. Buttons
    const toggleBtns = document.querySelectorAll('button.theme-toggle-btn, button#theme-toggle');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    });
  }
}

window.themeManager = new ThemeManager();
