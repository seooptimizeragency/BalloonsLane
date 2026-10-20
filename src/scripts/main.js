// Balloons Lane — vanilla JS interactions (no frameworks).
// Mobile menu, search modal, FAQ accordion, carousels, inquiry form notice.
(function () {
  'use strict';

  // ---------- Mobile menu ----------
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    });
    mobileNav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      })
    );
  }

  // ---------- Search modal ----------
  const searchOpeners = document.querySelectorAll('[data-search-open]');
  const searchModal = document.getElementById('search-modal');
  const searchInput = searchModal ? searchModal.querySelector('input[type="search"]') : null;
  const openSearch = () => {
    if (!searchModal) return;
    searchModal.classList.add('open');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (searchInput) searchInput.focus();
  };
  const closeSearch = () => {
    if (!searchModal) return;
    searchModal.classList.remove('open');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  searchOpeners.forEach((b) => b.addEventListener('click', openSearch));
  if (searchModal) {
    searchModal.querySelectorAll('[data-search-close]').forEach((b) => b.addEventListener('click', closeSearch));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch();
        if (mobileNav && mobileNav.classList.contains('open') && menuBtn) menuBtn.click();
      }
    });
  }

  // ---------- FAQ accordion (single-open) ----------
  document.querySelectorAll('[data-faq]').forEach((faq) => {
    const items = faq.querySelectorAll('details');
    items.forEach((d) => {
      d.addEventListener('toggle', () => {
        if (d.open) items.forEach((o) => { if (o !== d) o.open = false; });
      });
    });
  });

  // ---------- Carousels ----------
  document.querySelectorAll('[data-carousel]').forEach((car) => {
    const track = car.querySelector('.carousel-track');
    if (!track) return;
    const step = () => {
      const first = track.querySelector(':scope > *');
      return first ? first.getBoundingClientRect().width + 20 : 320;
    };
    car.querySelectorAll('[data-car-prev]').forEach((b) =>
      b.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }))
    );
    car.querySelectorAll('[data-car-next]').forEach((b) =>
      b.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }))
    );
  });

  // ---------- Inquiry form: no WordPress backend on the static build ----------
  document.querySelectorAll('form[data-inquiry]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let note = form.querySelector('.inquiry-note');
      if (!note) {
        note = document.createElement('p');
        note.className = 'inquiry-note';
        note.setAttribute('role', 'status');
        form.appendChild(note);
      }
      note.textContent =
        'Thanks for your inquiry! Online form submissions are handled by our team directly — please call 718.427.0968 or email balloonslane@gmail.com to confirm your order right away.';
    });
  });

  // ---------- Lazy YouTube embeds (click-to-play, privacy-friendly) ----------
  document.querySelectorAll('[data-yt]').forEach((box) => {
    const id = box.getAttribute('data-yt');
    if (!id) return;
    box.addEventListener(
      'click',
      () => {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0';
        iframe.title = box.getAttribute('data-yt-title') || 'YouTube video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:inherit;';
        box.innerHTML = '';
        box.appendChild(iframe);
      },
      { once: true }
    );
  });
})();
