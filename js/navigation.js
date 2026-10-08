/* ========================================
   NAVIGATION
   ======================================== */

(function () {
  'use strict';

  let menuOpen = false;
  let menuToggle = null;
  let mobileMenu = null;
  let mobileLinks = null;
  let body = null;

  function init() {
    menuToggle = document.querySelector('[data-menu-toggle]');
    mobileMenu = document.querySelector('[data-mobile-menu]');
    mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    body = document.body;

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', toggleMenu);

    // Close on link click
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Close on window resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && menuOpen) {
        closeMenu();
      }
    });
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('is-open', menuOpen);
    menuToggle.setAttribute('aria-expanded', String(menuOpen));
    menuToggle.setAttribute('aria-label', menuOpen ? 'Close navigation menu' : 'Open navigation menu');

    if (menuOpen) {
      body.style.overflow = 'hidden';
      // Focus first link in mobile menu
      var firstLink = mobileMenu.querySelector('a');
      if (firstLink) {
        setTimeout(function () { firstLink.focus(); }, 100);
      }
    } else {
      body.style.overflow = '';
    }
  }

  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    mobileMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    body.style.overflow = '';
  }

  // Expose for includes.js re-initialization
  window.HillviewNavigation = {
    init: init
  };

  // Also init immediately if DOM is already ready (when header is server-rendered)
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
