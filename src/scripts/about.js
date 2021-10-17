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