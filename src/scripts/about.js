function checkInfoLineHeight(infoLine) {
  if (infoLine.classList.contains('InfoLine-halfOverlapTop')) {
    infoLine.style.marginBottom = `-${infoLine.offsetHeight / 2}px`;
    console.log('1');
  } else if (infoLine.classList.contains('InfoLine-halfOverlapBottom')) {
    infoLine.style.marginTop = `-${infoLine.offsetHeight / 2}px`;
    console.log('2');
  }
}

let infoLinesHalfOverlap = document.querySelectorAll('.InfoLine-halfOverlapTop, .InfoLine-halfOverlapBottom');
infoLinesHalfOverlap.forEach(infoLine => {
  console.log(infoLine);
  checkInfoLineHeight(infoLine);
});

window.addEventListener('resize', function () {
  infoLinesHalfOverlap.forEach(infoLine => {
    checkInfoLineHeight(infoLine);
  });
});