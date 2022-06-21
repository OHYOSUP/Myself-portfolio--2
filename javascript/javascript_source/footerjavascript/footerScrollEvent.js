
const work =document.getElementById('work');

const title = document .getElementById('title');


export const footerTotheTop = function downscroll(eventType,elems){
  footer.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY < 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 
export const footerTotheBottom = function downscroll(eventType,elems){
  footer.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 

