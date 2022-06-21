
const landingPage = document.getElementById('landing')
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textbox');
const backgroundCity = document.querySelector('.img');
const main = document.getElementById('main');



backgroundCity.style.width = '150vw';
backgroundCity.style.height = '150vh';
backgroundCity.style.position = 'absolute'
backdropBox.style.position = 'absolute';

// console.log(backdropBox);


let i = 0;
let isStatus = true;

// function gotodown (){
//   main.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
// }




export const totheLeft = function backgoundAnimation(){
// let isStatus = true;
  requestAnimationFrame(backgoundAnimation);
if(i < 400 && isStatus === true)
i++;
  backgroundCity.style.transform = `translateX(${-i}px)`;
  // console.log(i);
  if(i === 400){
    isStatus = false;
    // cancelAnimationFrame(backgoundAnimation);
    backgroundCity.style.opacity = 0;
    backgroundCity.style.transition = '1s';
    // main.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
  }
}


// 백그라운드 슬라이드



export const totheBottom = function downscroll(eventType,elems){
  landingPage.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 

