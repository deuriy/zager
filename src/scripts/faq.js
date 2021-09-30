import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

new Swiper('.FilterTabsListSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
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