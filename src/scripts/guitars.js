import {
  Fancybox
} from "@fancyapps/ui/src/Fancybox/Fancybox.js";

import Swiper, {
  Navigation,
  Pagination
} from '../../node_modules/swiper/swiper-bundle';

new Swiper('.IconsAndTextsSwiper, .ProductsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});