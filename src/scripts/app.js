import Swiper, {
  Navigation,
  Pagination
} from '../../node_modules/swiper/swiper-bundle';

import {
  Fancybox
} from "@fancyapps/ui/src/Fancybox/Fancybox.js";

new Swiper('.VideoSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 48,

  pagination: {
    el: '.VideoSection_pagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    nextEl: '.VideoSwiper_next',
  },
});

let productImgFullScreenBtn = document.querySelector('.ProductImg_fullScreenBtn');

let productImgSwiper = new Swiper('.ProductImgSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,

  pagination: {
    el: '.ProductImgSwiper_pagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    prevEl: '.ProductImgSwiper_prev',
    nextEl: '.ProductImgSwiper_next',
  },

  on: {
    init: function () {
      // console.log('swiper initialized')
      // productImgFullScreenBtn.href
      let productImgActiveSlide = document.querySelector(`.ProductImgSwiper .swiper-slide-active`);
      productImgFullScreenBtn.href = productImgActiveSlide.querySelector('img').src;
    }
  }
});

productImgSwiper.on('slideChange', function () {
  setTimeout(() => {
    let productImgActiveSlide = document.querySelector(`.ProductImgSwiper .swiper-slide-active`);
    productImgFullScreenBtn.href = productImgActiveSlide.querySelector('img').src;
    console.log('slide change');
  }, 0);
});