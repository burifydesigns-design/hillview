/* ========================================
   PARTIAL INCLUDES
   ======================================== */

(function () {
  'use strict';

  const HEADER_URL = './partials/header.html';
  const FOOTER_URL = './partials/footer.html';

  function loadPartial(url, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load ' + url);
        return response.text();
      })
      .then(function (html) {
        container.innerHTML = html;
        // Initialize any JS-dependent features after partial loads
        if (containerId === 'site-header') {
          window.HillviewNavigation && window.HillviewNavigation.init();
        }
      })
      .catch(function (err) {
        console.error('Partial load error:', err);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadPartial(HEADER_URL, 'site-header');
    loadPartial(FOOTER_URL, 'site-footer');
  });
})();
