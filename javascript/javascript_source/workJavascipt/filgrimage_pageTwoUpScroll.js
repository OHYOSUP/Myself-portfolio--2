const work = document.getElementById('work');
const rightPage = document.getElementById('rightPage');
const filgrimage_pageOne = document.getElementById('filgrimage_pageOne');
const filgrimage_pageTwo = document.getElementById('filgrimage_pageTwo');

const pageTwo = document.getElementById('pageTwo');

const footer =document.getElementById('footer');

const title = document .getElementById('title');

// export function filgrimageTotheTop(eventType,elems){
//   filgrimage_pageTwo.addEventListener(eventType, (e)=>{
//     e.preventDefault();
//   if(e.deltaY < 0){
//     elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//   }
//   });
// } 

console.log(window.scrollY);
let currY = window.scrollY;

export function filgrimageTotheTop(eventType,elems){
  filgrimage_pageTwo.addEventListener(eventType, (e)=>{
    // e.preventDefault();
  if(e.deltaY < 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
}


// scrollMoving(work);
// scrollMoving(filgrimage_pageOne);
// rightPageScoll(rightPage,'scroll');


