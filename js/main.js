/* ========================================
   MAIN
   ======================================== */

(function () {
  'use strict';

  function init() {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('js-ready');

    // Handle skip link focus restoration
    var skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', function (e) {
        var target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    }

    // Handle external links with data-external attribute
    var externalLinks = document.querySelectorAll('a[data-external]');
    externalLinks.forEach(function (link) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
