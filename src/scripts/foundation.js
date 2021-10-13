import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

new Swiper('.BeneficiariesSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 20,
  slideActiveClass: 'BeneficiariesSwiper_slide-active',

  pagination: {
    el: '.BeneficiariesSection_pagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    nextEl: '.BeneficiariesSection_next',
  },

  breakpoints: {
    1024: {
      spaceBetween: 48,
    },
  },
});