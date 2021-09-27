import Plyr from 'plyr';

const players = Plyr.setup('audio', {
  controls: ['play-large', 'play', 'progress', 'duration', 'captions', 'pip', 'airplay']
});

import Swiper, {
  Navigation,
  Pagination
} from '../../node_modules/swiper/swiper-bundle';

import {
  Fancybox
} from "@fancyapps/ui/src/Fancybox/Fancybox.js";

new Swiper('.FilterTabsListSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  autoHeight: true,
});

document.addEventListener('click', function (e) {
  let filterTabsItem = e.target.closest('.FilterTabs_item');

  if (!filterTabsItem) return;

  let filterTabsListWrapper = filterTabsItem.closest('.FilterTabs_listWrapper');
  let activeFilterTabsItem = filterTabsListWrapper.querySelector('.FilterTabs_item-active');

  if (activeFilterTabsItem) {
    activeFilterTabsItem.classList.remove('FilterTabs_item-active');
  }

  filterTabsItem.classList.add('FilterTabs_item-active');
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

document.addEventListener('click', function (e) {
  let filterTabsItem = e.target.closest('.FilterTabs_item');

  if (!filterTabsItem) return;

  let reviewCategoryFilter = filterTabsItem.dataset.reviewCategoryFilter;

  document.querySelectorAll('.FilterTabs_review').forEach(review => {
    let id = review.dataset.reviewCategoryId;

    if (id != reviewCategoryFilter && reviewCategoryFilter != 'all') {
      review.style.display = 'none';
    } else {
      review.style.display = '';
    }
  });

  countSearchResults();
  e.preventDefault();
});