// import {
//   Example
// } from "./modules/example.js";

// new Example();

import Swiper, {
  Navigation,
  Pagination
} from '../../node_modules/swiper/swiper-bundle';

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