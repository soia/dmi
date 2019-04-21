(function ($) {
  "use strict";

  window.foin = $.extend({}, {

    init: function () {
      foin.initAccordion();
      foin.wowAnimate();
      foin.initSlickSlider();
    },

    initAccordion: function () {
      $(function () {
        $(".accordion").accordion({
          collapsible: true,
          heightStyle: "content"
        });

      });

      $(function () {
        let icons = {
          header: "ui-icon-plus",
          activeHeader: "ui-icon-minusthick"
        };
        $(".accordion").accordion({
          icons: icons,
          icons: icons
        });
        $("#toggle").button().on("click", function () {
          if ($(".accordion").accordion("option", "icons")) {
            $(".accordion").accordion("option", "icons", null);
          } else {
            $(".accordion").accordion("option", "icons", icons);
          }
        });
      });
    },

    wowAnimate: function () {
      new WOW().init();
    },

    initSlickSlider: function () {
      $('.tablet-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick"
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              variableWidth: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              variableWidth: true
            }
          }
        ]
      });
    }

  });

  $(document).ready(function () {
    foin.init();
  });
})(jQuery);