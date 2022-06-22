const lightGroup = document.querySelectorAll('#lightGroup');
const lightGroup_bottom = document.querySelectorAll('#lightGroup_bottom');

const upStair = Array.from(lightGroup);
const downStair = Array.from(lightGroup_bottom);





// let currnetYvalue = window.pageYOffset;
// let totalHeight = window.innerHeight
// let pageHeight = document.body.scrollHeight;
// console.log(currnetYvalue);
// console.log(totalHeight);
// console.log(pageHeight);



let i = -1;
export function lightItUp() {
  let timer = setInterval(lightItUp, 100);
  i++;
  if (i < upStair.length) {
    upStair[i].classList.add('glowing');
    // console.log(i);
    if (i >= upStair.length) {
      clearInterval(timer);
    }
  }
}


let d = -1;

// console.log(window.pageYOffset);
let currnetYpos = window.pageYOffset;
export function lightItUp_bottom() {
  let timer = setInterval(lightItUp_bottom, 100);
  d++;
  if (d < downStair.length) {
    downStair[d].classList.add('glowing');
    // console.log(d);
    if (d >= downStair.length) {
      clearInterval(timer);
    }
  }
}
