/* ========================================
   BOOKING
   ======================================== */

(function () {
  'use strict';

  var BOOKING_URL = 'https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location';

  function init() {
    // Intercept clicks on booking buttons
    var bookingButtons = document.querySelectorAll('[data-booking-btn]');

    bookingButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Allow default for actual links, but track if needed
        // Currently we just use direct href links
      });
    });

    // Smooth scroll to anchor if booking URL is on the same page (it's not)
    // This is a no-op for external links, but useful if we ever have inline booking
  }

  window.HillviewBooking = {
    url: BOOKING_URL,
    getUrl: function () { return BOOKING_URL; }
  };

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
