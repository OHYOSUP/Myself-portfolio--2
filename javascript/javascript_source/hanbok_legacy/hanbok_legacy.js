const hanbokLegacy = document.getElementById('hanbok_legacy');

const container = hanbokLegacy.children[0];
const images = document.querySelectorAll('.legacyImage');
const btnContainer = document.querySelector('.buttonContainer');
const next = document.getElementById('rightBtn');
const prev = document.getElementById('leftBtn');

// let slideWidht = 400;
// let slideMargin = 300;

// let slideCount = images.length;

// console.log(hanbokLegacy);
// console.log(btnContainer);

// export const prevBtn = prev.addEventListener('click', ()=>{
// if(countIndex !== 0){
//   moveSlide((countIndex -1));
// }
// });

// export const nextBtn = next.addEventListener('click', ()=>{
//   if(countIndex !== slideCount -1){
//     moveSlide((countIndex + 1));
//   }
//   });



let countIndex = 0;
let slideCount = images.length;


function moveSlide(num){
  container.style.left = -num*600 + 'px';
  // container.style.marign = slideMargin;
  countIndex = num;
}


const legacySecond = document.getElementById('legacy2');
function parallexSilde (elem){
  elem.scrollIntoView({behavior : 'smooth', block : 'end', inline : 'nearest'});
}

container.addEventListener('wheel', (e)=>{
  e.preventDefault();
  if(e.deltaY > 0){
    
    parallexSilde(legacySecond);
  }
  if(e.deltaY < 0){
    parallexSilde();
  }
  });