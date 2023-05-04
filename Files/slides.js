/* My JavaScript Code */
let parent = document.querySelector(".parent");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

function slides() {
  let getScrollX = parent.scrollLeft;
  let getWidth = parent.offsetWidth;  
  
  //For Left Handler..
  if (getScrollX == 0) {
    left.style.display = "none";
  } else {
    left.style.display = "block";
  }
  
  //For Right Handler..
  if (getWidth >= (getWidth * 7 - getScrollX - 5)) {
    right.style.display = "none";
  } else {
    right.style.display = "block";
  }
  
  setTimeout(() => {
    parent.style.animation = "none";
  }, 300);
}

left.addEventListener("click", () => {
  let parX = parent.scrollLeft;
  let parW = parent.offsetWidth;
  let total = parX - parW;
  
  if (parW != 0) {
    parent.scrollLeft = total;
    parent.style.animation = "left 0.3s linear";
  }
  slides();
});
right.addEventListener("click", () => {
  let parX = parent.scrollLeft;
  let parW = parent.offsetWidth;
  let total = parX + parW;
  
  parent.scrollLeft = total;
  parent.style.animation = "right 0.3s linear";
  slides();
});