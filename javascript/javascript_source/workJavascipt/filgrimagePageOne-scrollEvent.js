const filgrimage_pageTwo = document.getElementById('firgrimage_pageTwo')


const work =document.getElementById('work');

const title = document .getElementById('title');

export const filgrimage_pageOneTotheBottom = function downscroll(eventType,elems){
  filgrimage_pageOne.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 

export const filgrimage_pageOneTotheTop = function downscroll(eventType,elems){
  filgrimage_pageOne.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY < 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 