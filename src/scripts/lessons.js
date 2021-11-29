function slideToggle(elem) {
  if (elem.offsetHeight < elem.scrollHeight) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  } else {
    elem.style.maxHeight = '';
  }
}

function checkInfoBlockHeight(infoBlock) {
  if (infoBlock.classList.contains('InfoBlock-halfOverlapTop')) {
    infoBlock.style.marginBottom = `-${infoBlock.offsetHeight / 2}px`;
  } else if (infoBlock.classList.contains('InfoBlock-halfOverlapBottom')) {
    infoBlock.style.marginTop = `-${infoBlock.offsetHeight / 2}px`;
  }
}

let infoBlocksHalfOverlap = document.querySelectorAll('.InfoBlock-halfOverlapTop, .InfoBlock-halfOverlapBottom');
infoBlocksHalfOverlap.forEach(infoBlock => {
  checkInfoBlockHeight(infoBlock);
});

window.addEventListener('resize', function () {
  infoBlocksHalfOverlap.forEach(InfoBlock => {
    checkInfoBlockHeight(InfoBlock);
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

document.addEventListener('click', function (e) {
  let studentReviewMoreLink = e.target.closest('.StudentReview_moreLink');

  if (!studentReviewMoreLink) return;

  let studentReview = studentReviewMoreLink.closest('.StudentReview');
  studentReview.classList.add('StudentReview-expanded');
  studentReviewMoreLink.remove();

  e.preventDefault();
});