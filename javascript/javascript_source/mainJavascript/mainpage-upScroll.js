const landing = document.getElementById('landing');

export const totheUp = function downscroll(eventType,currentElem,targetElem){
  currentElem.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY < 0){
    targetElem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 

// const footer =document.getElementById('footer');

const title = document .getElementById('title');

export const mainTotheBottom = function downscroll(eventType,elems){
  main.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 