$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    navText: ['<span class="nav-prev"><i class="fa fa-chevron-left"></i></span>',
      '<span class="nav-next"><i class="fa fa-chevron-right"></i></span>'],
    items: 3,

    responsive: {
      0: {
        items: 1
      },

      640: {
        items: 2
      },

      960: {
        items: 3
      },

      1200: {
        items: 3
      }
    }
  });
});