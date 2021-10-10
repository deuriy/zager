function slideToggle(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.maxHeight = '';
  }
}

function checkInfoLineHeight(infoLine) {
  if (infoLine.classList.contains('InfoLine-halfOverlapTop')) {
    infoLine.style.marginBottom = `-${infoLine.offsetHeight / 2}px`;
  } else if (infoLine.classList.contains('InfoLine-halfOverlapBottom')) {
    infoLine.style.marginTop = `-${infoLine.offsetHeight / 2}px`;
  }
}

let infoLinesHalfOverlap = document.querySelectorAll('.InfoLine-halfOverlapTop, .InfoLine-halfOverlapBottom');
infoLinesHalfOverlap.forEach(infoLine => {
  checkInfoLineHeight(infoLine);
});

window.addEventListener('resize', function () {
  infoLinesHalfOverlap.forEach(infoLine => {
    checkInfoLineHeight(infoLine);
  });
});

function setPostsVisibility(visible = true) {
  let prop = !visible ? 'none' : '';
  let posts = document.querySelectorAll('.PostsSection_item:nth-child(n+4)');
  posts.forEach(post => post.style.display = prop);
}

let postsSectionItems = document.querySelector('.PostsSection_items');
if (postsSectionItems && document.documentElement.clientWidth <= 767) {
  setPostsVisibility(false);
  postsSectionItems.style.maxHeight = postsSectionItems.offsetHeight + 'px';
  setPostsVisibility();
}

document.addEventListener('click', function (e) {
  let allPostsButton = e.target.closest('.PostsSection_viewAllBtn');

  if (!allPostsButton) return;

  let noBorderPosts = postsSectionItems.querySelectorAll('.Post-noBorder');
  noBorderPosts.forEach(post => post.classList.remove('Post-noBorder'));

  slideToggle(postsSectionItems);
  allPostsButton.remove();

  e.preventDefault();
});