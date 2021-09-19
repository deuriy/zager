let menuHamburger = document.querySelector('.MenuHamburger');
let mobileNavigation = document.querySelector('.MobileNavigation');
let mobileMainMenu = document.querySelector('.MobileNavigation .MainMenu');
let closeMobileNavigation = document.querySelector('.MobileNavigation_closeBtn');

menuHamburger.addEventListener('click', function (e) {
  mobileNavigation.classList.add('MobileNavigation-opened');
});

closeMobileNavigation.addEventListener('click', function (e) {
  mobileNavigation.classList.remove('MobileNavigation-opened');
});

mobileMainMenu.addEventListener('click', function (e) {
  let parentMenuLink = e.target.closest('.MainMenu_item-parent > .MainMenu_link');

  if (!parentMenuLink) return;

  let parentMenuItem = parentMenuLink.parentNode;
  console.log(parentMenuItem.scrollHeight);
  console.log(parentMenuItem.offsetHeight);
  // console.log(parentMenuItem.maxHeight);

  if (parentMenuItem.offsetHeight < parentMenuItem.scrollHeight) {
    parentMenuItem.style.maxHeight = `${parentMenuItem.scrollHeight}px`;
  } else {
    parentMenuItem.style.cssText = '';
  }
  // parentMenuItem.classList.toggle('MainMenu_item-expanded');

  e.preventDefault();
});

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
      let productImgActiveSlide = document.querySelector(`.ProductImgSwiper .swiper-slide-active`);
      productImgFullScreenBtn.href = productImgActiveSlide.querySelector('img').src;
    }
  }
});

productImgSwiper.on('slideChange', function () {
  setTimeout(() => {
    let productImgActiveSlide = document.querySelector(`.ProductImgSwiper .swiper-slide-active`);
    productImgFullScreenBtn.href = productImgActiveSlide.querySelector('img').src;
  }, 0);
});