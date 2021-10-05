import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

import PerfectScrollbar from 'perfect-scrollbar';

new Swiper('.FilterTabsListSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
});

new Swiper('.VideoTilesSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoHeight: true,
});

function slideToggle(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.maxHeight = '';
  }
}

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
  let accordionPanelTitle = e.target.closest('.AccordionPanel_title');

  if (!accordionPanelTitle) return;

  let accordionPanel = accordionPanelTitle.closest('.AccordionPanel');
  accordionPanel.classList.toggle('AccordionPanel-expanded');
  slideToggle(accordionPanel);
});

document.addEventListener('click', function (e) {
  let accordionPanelCloseBtn = e.target.closest('.AccordionPanel_closeBtn');

  if (!accordionPanelCloseBtn) return;

  let accordionPanel = accordionPanelCloseBtn.closest('.AccordionPanel');
  accordionPanel.classList.remove('AccordionPanel-expanded');
  slideToggle(accordionPanel);
  e.preventDefault();
});

// Video Section
document.addEventListener('click', function (e) {
  let videoTilePlaylist = e.target.closest('.VideoTile-playlist');

  if (!videoTilePlaylist) return;

  let videoID = videoTilePlaylist.getAttribute('href').slice(1);

  let videoPlayer = videoTilePlaylist.closest('.VideoPlayer');
  let activevideoTilePlaylist = videoPlayer.querySelector('.VideoTile-active');

  activevideoTilePlaylist.classList.remove('VideoTile-active');
  videoTilePlaylist.classList.add('VideoTile-active');

  let iframe = videoPlayer.querySelector('.VideoPlayer_video iframe');
  iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

  e.preventDefault();
});

const videoPlaylist = document.querySelector('.VideoPlaylist_items');
const videoPlaylistPS = new PerfectScrollbar(videoPlaylist);

videoPlaylist.addEventListener('ps-scroll-y', (e) => {
  if (videoPlaylist.scrollHeight == (videoPlaylist.scrollTop + videoPlaylist.clientHeight)) {
    videoPlaylist.parentNode.classList.add('VideoPlaylist_itemsWrapper-scrolled');
  } else {
    videoPlaylist.parentNode.classList.remove('VideoPlaylist_itemsWrapper-scrolled');
  }
});