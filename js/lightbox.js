/**
 * LIGHTBOX VIEWER FOR CERTIFICATES & SCREENSHOT EVIDENCE
 * Ahmed Adel Saad Obaid Portfolio
 */

class Lightbox {
  constructor() {
    this.modal = document.getElementById('lightbox-modal');
    this.img = document.getElementById('lightbox-img');
    this.caption = document.getElementById('lightbox-caption');
    this.closeBtn = document.getElementById('lightbox-close');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    
    this.currentList = [];
    this.currentIndex = 0;
    
    this.init();
  }

  init() {
    if (!this.modal) return;

    this.closeBtn.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') {
        document.documentElement.getAttribute('dir') === 'rtl' ? this.next() : this.prev();
      }
      if (e.key === 'ArrowRight') {
        document.documentElement.getAttribute('dir') === 'rtl' ? this.prev() : this.next();
      }
    });

    // Delegate clicks on any element with data-lightbox
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lightbox-src]');
      if (target) {
        e.preventDefault();
        const src = target.getAttribute('data-lightbox-src');
        const caption = target.getAttribute('data-lightbox-caption') || '';
        const captionAr = target.getAttribute('data-lightbox-caption-ar') || caption;
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        const displayCaption = currentLang === 'ar' ? captionAr : caption;
        
        // Check if part of a group
        const group = target.getAttribute('data-lightbox-group');
        if (group) {
          const groupEls = Array.from(document.querySelectorAll(`[data-lightbox-group="${group}"]`));
          this.currentList = groupEls.map(el => ({
            src: el.getAttribute('data-lightbox-src'),
            caption: currentLang === 'ar' ? (el.getAttribute('data-lightbox-caption-ar') || el.getAttribute('data-lightbox-caption')) : el.getAttribute('data-lightbox-caption')
          }));
          this.currentIndex = groupEls.indexOf(target);
          this.show(this.currentList[this.currentIndex].src, this.currentList[this.currentIndex].caption);
        } else {
          this.currentList = [{ src, caption: displayCaption }];
          this.currentIndex = 0;
          this.show(src, displayCaption);
        }
      }
    });
  }

  show(src, captionText) {
    this.img.src = src;
    this.caption.textContent = captionText || '';
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    this.img.src = '';
  }

  next() {
    if (this.currentList.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
    const item = this.currentList[this.currentIndex];
    this.show(item.src, item.caption);
  }

  prev() {
    if (this.currentList.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.currentList.length) % this.currentList.length;
    const item = this.currentList[this.currentIndex];
    this.show(item.src, item.caption);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.lightbox = new Lightbox();
});
