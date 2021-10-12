import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

import {
  Fancybox
} from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
  dragToClose: false
});

new Swiper('.IconsAndTextsSwiper, .ProductCardsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});

new Swiper('.AccessoriesSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,

  pagination: {
    el: '.SwiperPagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    prevEl: '.AccessoriesSection_prev',
    nextEl: '.AccessoriesSection_next',
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 34
    },
    1024: {
      spaceBetween: 48,
      slidesPerView: 4,
    },
  },
});

$(function () {
  $(".RangeSlider").slider({
    range: true,
    min: 625,
    max: 2925,
    values: [625, 2925],
    slide: function (event, ui) {
      console.log("Slide");
    },
    classes: {
      "ui-slider-handle": "RangeSlider_handle",
      "ui-slider-range": "RangeSlider_range"
    }
  });
});