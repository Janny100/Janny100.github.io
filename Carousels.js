let currentIndex = 1;

function getIndex(index){
  let amountToMove = index - currentIndex;
  clickToSlide(amountToMove);
  currentIndex = index;
}

function clickToSlide(n){
  let slide = document.getElementsByClassName("carousel");
  if (n == 0) return;
  else{
    slide[0].style.left = -(currentIndex-1)*300 - n*300 + 'px';
  }
}
