function checkInfoBlockHeight(infoBlock) {
  if (infoBlock.classList.contains('InfoBlock-offsetHalfUp')) {
    infoBlock.style.marginBottom = `-${infoBlock.offsetHeight / 2}px`;
  } else if (infoBlock.classList.contains('InfoBlock-offsetHalfDown')) {
    infoBlock.style.marginTop = `-${infoBlock.offsetHeight / 2}px`;
  }
}

let InfoBlocksHalfOverlap = document.querySelectorAll('.InfoBlock-offsetHalfUp, .InfoBlock-offsetHalfDown');
InfoBlocksHalfOverlap.forEach(infoBlock => {
  checkInfoBlockHeight(infoBlock);
});

window.addEventListener('resize', function () {
  InfoBlocksHalfOverlap.forEach(infoBlock => {
    checkInfoBlockHeight(infoBlock);
  });
});