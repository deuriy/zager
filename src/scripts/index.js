import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

new Swiper('.VideoSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,

  modules: [Navigation, Pagination],

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

let productSectionImgFullScreenBtn = document.querySelector('.ProductSectionImg_fullScreenBtn');
let productSectionImgSwiper = new Swiper('.ProductSectionImgSwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,

  modules: [Navigation, Pagination],

  pagination: {
    el: '.ProductSectionImgSwiper_pagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    prevEl: '.ProductSectionImg_prev',
    nextEl: '.ProductSectionImg_next',
  },

  on: {
    init: function () {
      let productImgActiveSlide = document.querySelector(`.ProductSectionImgSwiper .swiper-slide-active`);
      productSectionImgFullScreenBtn.href = productImgActiveSlide.querySelector('img').src;
    }
  }
});

productSectionImgSwiper.on('slideChange', function () {
  setTimeout(() => {
    let productImgActiveSlide = document.querySelector(`.ProductSectionImgSwiper .swiper-slide-active`);
    productSectionImgFullScreenBtn.href = productImgActiveSlide.querySelector('img').src;
  }, 0);
});

new Swiper('.TestimonialsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});