import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.SeriesSwiper, .ProductCardsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
});

new Swiper('.AccessoriesSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,

  pagination: {
    el: '.SwiperPagination',
    clickable: true,
    bulletClass: 'SwiperPagination_bullet',
    bulletActiveClass: 'SwiperPagination_bullet-active',
  },

  navigation: {
    prevEl: '.AccessoriesSection_prev',
    nextEl: '.AccessoriesSection_next',
  },

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 48,
      loop: true
    },
  },
});

function slideToggle(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.maxHeight = '';
  }
}

function checkInfoBlockHeight(InfoBlock) {
  if (InfoBlock.classList.contains('InfoBlock-halfOverlapTop')) {
    InfoBlock.style.marginBottom = `-${InfoBlock.offsetHeight / 2}px`;
  } else if (InfoBlock.classList.contains('InfoBlock-halfOverlapBottom')) {
    InfoBlock.style.marginTop = `-${InfoBlock.offsetHeight / 2}px`;
  }
}

let InfoBlocksHalfOverlap = document.querySelectorAll('.InfoBlock-halfOverlapTop, .InfoBlock-halfOverlapBottom');
InfoBlocksHalfOverlap.forEach(InfoBlock => {
  checkInfoBlockHeight(InfoBlock);
});

window.addEventListener('resize', function () {
  InfoBlocksHalfOverlap.forEach(InfoBlock => {
    checkInfoBlockHeight(InfoBlock);
  });
});

document.querySelectorAll('.Tabs_list').forEach(tabList => {
  tabList.querySelectorAll('.Tabs_item').forEach((tab, tabIndex) => {
    tab.dataset.tabIndex = tabIndex;

    tab.onclick = () => {
      let activeTab = tab.parentNode.querySelector('.Tabs_item-active');

      if (activeTab) {
        activeTab.classList.remove('Tabs_item-active');
      }

      tab.classList.add('Tabs_item-active');

      let parent = tab.closest('.Tabs');
      let tabsContent = parent.querySelectorAll('.Tabs_content');

      parent.querySelectorAll('.Tabs_list').forEach(tabsList => {
        tabsList.querySelector(`.Tabs_item:nth-child(${tabIndex + 1})`).click();
      })

      tabsContent.forEach(function (tabContent, tabContentIndex) {
        tabContent.style.display = 'none';
      });

      tabsContent[tabIndex].style.display = 'block';
    }
  });
});

document.querySelectorAll('.Tabs').forEach(tabs => {
  tabs.querySelectorAll('.Tabs_content').forEach((tabContent, tabIndex) => {
    tabContent.dataset.tabIndex = tabIndex;
  });
});


function setMaxHeight(elem) {
  elem.style.maxHeight = `${elem.scrollHeight}px`;
}

function setTabsVisibility(visible = true) {
  let allTabs = document.querySelectorAll('.Tabs');
  let prop = visible ? 'block' : '';

  allTabs.forEach(tabs => {
    let tabsContent = tabs.querySelectorAll('.Tabs_content');

    tabsContent.forEach(tabContent => {
      if (!tabContent.classList.contains('Tabs_content-active')) {
        tabContent.style.display = prop;
      }
    });
  });
}

setTabsVisibility();

let expandedTables = document.querySelectorAll('.ExpandTable-expanded');
expandedTables.forEach(expandTable => {
  setMaxHeight(expandTable);
});

setTabsVisibility(false);


window.addEventListener('resize', function () {
  // expandedTables.forEach(expandTable => setMaxHeight(expandTable));
  expandedTables.forEach(expandTable => {
    setTimeout(() => {
      setMaxHeight(expandTable)
    });
  });
});

document.addEventListener('click', function (e) {
  let expandTableSwitchLink = e.target.closest('.ExpandTable_switchLink');

  if (!expandTableSwitchLink) return;

  let expandTable = expandTableSwitchLink.closest('.ExpandTable');
  let expandTableTH = expandTable.querySelector('.ExpandTable_th');
  let expandTableTHStyle = getComputedStyle(expandTableTH);
  let expandTableTHHeight = expandTable.querySelector('.ExpandTable_th').offsetHeight + parseInt(expandTableTHStyle.borderBottomWidth) + parseInt(expandTableTHStyle.borderTopWidth);

  if (expandTable.clientHeight != expandTableTHHeight) {
    expandTable.querySelectorAll('.Hint_wrapper').forEach(hintWrapper => {
      hintWrapper.style.display = 'none';
    });
    expandTableSwitchLink.classList.add('SwitchLink-collapsed');
    expandTable.classList.remove('ExpandTable-expanded');
    setTimeout(() => {
      expandTable.style.maxHeight = `${expandTableTHHeight}px`;
    });
  } else {
    expandTable.querySelectorAll('.Hint_wrapper').forEach(hintWrapper => {
      hintWrapper.style.display = '';
    });
    expandTableSwitchLink.classList.remove('SwitchLink-collapsed');
    expandTable.style.maxHeight = `${expandTable.scrollHeight}px`;
    setTimeout(() => {
      expandTable.classList.add('ExpandTable-expanded');
    }, 100);
  }

  e.preventDefault();
});

function isTouchDevice() {
  return !!('ontouchstart' in window);
}

if (!isTouchDevice()) {
  document.addEventListener('mouseover', function (e) {
    let hint = e.target.closest('.Hint');

    if (!hint) return;

    hint.classList.add('Hint-opened');

    e.preventDefault();
  });

  document.addEventListener('mouseout', function (e) {
    let hint = e.target.closest('.Hint');

    if (!hint) return;

    hint.classList.remove('Hint-opened');

    e.preventDefault();
  });
} else {
  document.addEventListener('touchstart', function (e) {
    let hintIcon = e.target.closest('.Hint_icon');

    if (!hintIcon) return;

    let hint = hintIcon.closest('.Hint');
    let openedHint = document.querySelector('.Hint-opened');

    if (openedHint && openedHint != hint) {
      openedHint.classList.remove('Hint-opened');
    }
    hint.classList.toggle('Hint-opened');
  });

  document.addEventListener('touchstart', function (e) {
    let hintWrapper = document.querySelector('.Hint-opened .Hint_wrapper');

    if (!hintWrapper) return;

    let hint = hintWrapper.closest('.Hint');
    let hintIcon = hint.querySelector('.Hint_icon');

    if (!hintWrapper.contains(e.target) && !hintIcon.contains(e.target)) {
      hint.classList.remove('Hint-opened');
    }
  });
}

document.addEventListener('click', function (e) {
  let hintIcon = e.target.closest('.Hint_icon');

  if (!hintIcon) return;

  e.preventDefault();
});


window.addEventListener('scroll', function () {
  let openedHintWrapper = document.querySelector('.Hint-opened .Hint_wrapper');

  if (!openedHintWrapper) return;

  let coords = openedHintWrapper.getBoundingClientRect();

  if (coords.top < 0 || coords.bottom > document.documentElement.clientHeight + coords.height / 2) {
    openedHintWrapper.closest('.Hint-opened').classList.remove('Hint-opened');
  }
});

document.querySelectorAll('a[href^="#"]:not(a[href="#"])').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let targetElem = document.querySelector(this.getAttribute("href"));

    if (!targetElem) return;

    if (targetElem.closest('.Tabs_content:not(.Tabs_content-active)')) {
      let tabs = targetElem.closest('.Tabs');
      let activeTabContent = tabs.querySelector('.Tabs_content-active');
      activeTabContent.classList.remove('Tabs_content-active');

      let tabContent = targetElem.closest('.Tabs_content');
      tabContent.classList.add('Tabs_content-active');

      let tabIndex = tabContent.dataset.tabIndex;
      let activeTabItem = tabs.querySelector('.Tabs_item-active');
      activeTabItem.classList.remove('Tabs_item-active');

      let tabItem = tabs.querySelector(`.Tabs_item[data-tab-index="${tabIndex}"]`);
      tabItem.classList.add('Tabs_item-active');
    }

    setTimeout(() => {
      targetElem.scrollIntoView({
        behavior: "smooth",
      });
    });

  });
});