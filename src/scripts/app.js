let menuHamburger = document.querySelector('.MenuHamburger');
let mobileNavigation = document.querySelector('.MobileNavigation');
let mobileMainMenu = document.querySelector('.MobileNavigation .MainMenu');
let closeMobileNavigation = document.querySelector('.MobileNavigation_closeBtn');

function slideToggle(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.maxHeight = '';
  }
}

menuHamburger.addEventListener('click', function (e) {
  mobileNavigation.classList.add('MobileNavigation-opened');
  document.body.style.overflow = 'hidden';
});

closeMobileNavigation.addEventListener('click', function (e) {
  mobileNavigation.classList.remove('MobileNavigation-opened');
  document.body.style.overflow = '';
});

mobileMainMenu.addEventListener('click', function (e) {
  let parentMenuLink = e.target.closest('.MainMenu_item-parent > .MainMenu_link');

  if (!parentMenuLink) return;

  let parentMenuItem = parentMenuLink.parentNode;

  parentMenuItem.classList.toggle('MainMenu_item-expanded');
  slideToggle(parentMenuItem);
  e.preventDefault();
});

document.addEventListener('click', function (e) {
  let secondaryMenuTitle = e.target.closest('.SecondaryMenu_title');

  if (!secondaryMenuTitle) return;

  let secondaryMenu = secondaryMenuTitle.closest('.SecondaryMenu');
  secondaryMenu.classList.toggle('SecondaryMenu-expanded');
  slideToggle(secondaryMenu);
});

import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

import {
  Fancybox
} from "@fancyapps/ui";

new Swiper('.VideoSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,

  pagination: {
    el: '.SwiperControls_pagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    nextEl: '.VideoSection_next',
  },

  breakpoints: {
    768: {
      spaceBetween: 48
    },
  },
});

let productImgFullScreenBtn = document.querySelector('.ProductImg_fullScreenBtn');
let productImgSwiper = new Swiper('.ProductImgSwiper', {
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
    prevEl: '.ProductImg_prev',
    nextEl: '.ProductImg_next',
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

new Swiper('.TestimonialsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});

// Mobile popup
let mobilePopupState = {
  visibility: false
};

function toggleMobilePopup(state, mobilePopup) {
  if (!mobilePopup) return;

  if (mobilePopupState.visibility) {
    mobilePopup.classList.add('MobilePopup-opened');
    document.body.style.overflow = 'hidden';
  } else {
    mobilePopup.classList.remove('MobilePopup-opened');
    document.body.style.cssText = '';
  }
}

function openMobilePopup(mobilePopupID) {
  let mobilePopup = document.getElementById(mobilePopupID);

  if (!mobilePopup) return;

  let openedMobilePopup = document.querySelector('.MobilePopup-opened');

  if (openedMobilePopup) {
    closeMobilePopup(openedMobilePopup.id);
  }

  mobilePopupState.visibility = true;
  window.history.pushState(mobilePopupState, null, "");
  toggleMobilePopup(mobilePopupState, mobilePopup);
}

function closeMobilePopup(mobilePopupID) {
  let mobilePopup = document.getElementById(mobilePopupID);

  if (!mobilePopup) return;

  mobilePopupState.visibility = false;
  window.history.pushState(mobilePopupState, null, "");
  toggleMobilePopup(mobilePopupState, mobilePopup);
}

document.addEventListener('click', function (e) {
  let mobilePopupLink = e.target.closest('[data-action="openMobilePopup"]');

  if (!mobilePopupLink) return;

  let mobilePopupID = mobilePopupLink.getAttribute('href').slice(1);
  openMobilePopup(mobilePopupID);

  let mobilePopupTitle = mobilePopupLink.dataset.mobilePopupTitle;
  if (mobilePopupTitle !== undefined) {
    let mobilePopup = document.getElementById(mobilePopupID);
    mobilePopup.querySelector('.MobilePopup_title').textContent = mobilePopupTitle;
  }

  e.preventDefault();
});

document.addEventListener('click', function (e) {
  let closePopup = e.target.closest('[data-action="closeMobilePopup"]');

  if (!closePopup) return;

  let mobilePopupID;

  if (closePopup.hasAttribute('href')) {
    mobilePopupID = closePopup.getAttribute('href').slice(1);
  }
  if (closePopup.closest('.MobilePopup')) {
    mobilePopupID = closePopup.closest('.MobilePopup').id;
  }

  console.log(closePopup);

  window.history.back();
  e.preventDefault();
});

document.addEventListener('click', function (e) {
  let mobilePopupOverlay = e.target.closest('.MobilePopup_overlay');

  if (!mobilePopupOverlay) return;

  mobilePopupOverlay.closest('.MobilePopup').classList.remove('MobilePopup-opened');
  document.body.style.cssText = '';
});

(function setDefaultMobilePopupState() {
  window.history.replaceState(mobilePopupState, null, "");
  toggleMobilePopup(mobilePopupState, document.querySelector('.MobilePopup'));
})();

window.addEventListener('popstate', function (e) {
  if (e.state) mobilePopupState = e.state;

  let openedMobilePopup = document.querySelector('.MobilePopup-opened');

  if (!openedMobilePopup) return;

  toggleMobilePopup(mobilePopupState, openedMobilePopup);
});