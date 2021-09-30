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