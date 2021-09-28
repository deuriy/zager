import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

import {
  Fancybox
} from "@fancyapps/ui";

new Swiper('.IconsAndTextsSwiper, .ProductCardsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});