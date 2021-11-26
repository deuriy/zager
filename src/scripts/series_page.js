import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

function checkInfoBlockHeight(infoBlock) {
  if (infoBlock.classList.contains('InfoBlock-offsetHalfUp')) {
    infoBlock.style.marginTop = `-${infoBlock.offsetHeight / 2}px`;

    let prevSection = infoBlock.closest('.InfoBlockSection').previousElementSibling;
    let paddingBottom = window.getComputedStyle(prevSection).paddingBottom;
    prevSection.style.paddingBottom = parseInt(paddingBottom) + infoBlock.offsetHeight / 2 + 'px';
  } else if (infoBlock.classList.contains('InfoBlock-offsetHalfDown')) {
    infoBlock.style.marginBottom = `-${infoBlock.offsetHeight / 2}px`;
    
    let nextSection = infoBlock.closest('.InfoBlockSection').nextElementSibling;
    let paddingTop = window.getComputedStyle(nextSection).paddingTop;
    nextSection.style.paddingTop = parseInt(paddingTop) + infoBlock.offsetHeight / 2 + 'px';
  }
}

import {
  Fancybox
} from "@fancyapps/ui";

new Swiper('.IconsAndTextsSwiper, .ProductCardsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});

let infoBlocksOffsetHalf = document.querySelectorAll('.InfoBlock-offsetHalfUp, .InfoBlock-offsetHalfDown');
infoBlocksOffsetHalf.forEach(infoBlock => {
  checkInfoBlockHeight(infoBlock);
});

// window.addEventListener('resize', function () {
//   infoBlocksOffsetHalf.forEach(infoBlock => {
//     checkInfoBlockHeight(infoBlock);
//   });
// });