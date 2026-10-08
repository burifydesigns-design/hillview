/* ========================================
   FAQ ACCORDION
   ======================================== */

(function () {
  'use strict';

  function init() {
    var faqItems = document.querySelectorAll('[data-faq-item]');

    faqItems.forEach(function (item) {
      var trigger = item.querySelector('[data-faq-trigger]');
      if (!trigger) return;

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        var index = Array.from(faqItems).indexOf(item);

        // Close all
        faqItems.forEach(function (otherItem, otherIndex) {
          otherItem.classList.remove('is-open');
          var otherTrigger = otherItem.querySelector('[data-faq-trigger]');
          if (otherTrigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherTrigger.setAttribute('aria-controls', 'faq-panel-' + otherIndex);
          }
          var otherPanel = otherItem.querySelector('[data-faq-panel]');
          if (otherPanel) {
            otherPanel.setAttribute('hidden', '');
          }
        });

        // Open clicked (if it was closed)
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          trigger.setAttribute('aria-controls', 'faq-panel-' + index);

          var panel = item.querySelector('[data-faq-panel]');
          if (panel) {
            panel.removeAttribute('hidden');
          }
        }
      });

      // Keyboard: Enter and Space
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
