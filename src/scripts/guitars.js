import {
  Fancybox
} from "@fancyapps/ui";

import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

import Plyr from 'plyr';

const players = Plyr.setup('audio', {
  controls: ['play-large', 'play', 'progress', 'duration', 'captions', 'pip', 'airplay']
});

function slideToggle(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.maxHeight = '';
  }
}

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

new Swiper('.IconsAndTextsSwiper, .ProductCardsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});

new Swiper('.FilterTabsListSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
});

document.addEventListener('click', function (e) {
  let filterTabsMenuItem = e.target.closest('.FilterTabsMenu_item');

  if (!filterTabsMenuItem) return;

  let filterTabsMenu = filterTabsMenuItem.closest('.FilterTabsMenu');
  let activeFilterTabsMenuItem = filterTabsMenu.querySelector('.FilterTabsMenu_item-active');

  if (activeFilterTabsMenuItem) {
    activeFilterTabsMenuItem.classList.remove('FilterTabsMenu_item-active');
  }

  filterTabsMenuItem.classList.add('FilterTabsMenu_item-active');
  e.preventDefault();
});

document.addEventListener('click', function (e) {
  let filterTabsMenuItem = e.target.closest('.FilterTabsMenu_item');

  if (!filterTabsMenuItem) return;

  let filterName = filterTabsMenuItem.dataset.filter;
  let filterTabs = filterTabsMenuItem.closest('.FilterTabs');

  filterTabs.querySelectorAll('.FilterTabs_item').forEach(item => {
    let itemName = item.dataset.itemName;

    if (itemName != filterName && filterName != 'all') {
      item.style.display = 'none';
    } else {
      item.style.display = '';
    }
  });

  e.preventDefault();
});

document.addEventListener('click', function (e) {
  let qaMoreLink = e.target.closest('.QA_moreLink');

  if (!qaMoreLink) return;

  let qa = qaMoreLink.closest('.QA');

  if (!qa) return;

  let qaItems = qa.querySelector('.QA_items');

  qaItems.classList.toggle('QA_items-expanded');
  qaMoreLink.classList.toggle('ArrowLink-arrowTop');
  slideToggle(qaItems);

  if (qaMoreLink.classList.contains('ArrowLink-arrowTop')) {
    qaMoreLink.textContent = 'Read Less';
  } else {
    qaMoreLink.textContent = 'Read More';
  }

  e.preventDefault();
});