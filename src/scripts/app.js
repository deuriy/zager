let menuHamburger = document.querySelector('.MenuHamburger');
let mobileNavigation = document.querySelector('.MobileNavigation');
let mobileMainMenu = document.querySelector('.MobileNavigation .MainMenu');
let closeMobileNavigation = document.querySelector('.MobileNavigation_closeBtn');

function toggleShow(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.cssText = '';
  }
}

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

  toggleShow(parentMenuItem);
  e.preventDefault();
});

document.addEventListener('click', function (e) {
  let secondaryMenuTitle = e.target.closest('.SecondaryMenu_title');

  if (!secondaryMenuTitle) return;

  let secondaryMenu = secondaryMenuTitle.closest('.SecondaryMenu');
  secondaryMenu.classList.toggle('SecondaryMenu-expanded');
  toggleShow(secondaryMenu);
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
  spaceBetween: 20,

  pagination: {
    el: '.VideoSection_pagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    nextEl: '.VideoSwiper_next',
  },

  breakpoints: {
    768: {
      spaceBetween: 48
    },
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