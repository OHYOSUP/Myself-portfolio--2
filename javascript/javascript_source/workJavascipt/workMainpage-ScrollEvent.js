export const workDownScroll = function Upcroll(eventType,elems){
  work.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 

export const workUpScroll = function downscroll(eventType,elems){
  work.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY < 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 