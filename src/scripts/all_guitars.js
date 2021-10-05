import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

// import $ from 'jquery';
// console.log($);

Swiper.use([Navigation, Pagination]);

import {
  Fancybox
} from "@fancyapps/ui";

new Swiper('.IconsAndTextsSwiper, .ProductCardsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
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