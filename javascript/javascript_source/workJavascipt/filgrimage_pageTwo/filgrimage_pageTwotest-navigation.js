const nav = document.getElementById('nav');
const item = document.querySelectorAll('.items');
const pageOne = document.getElementById('pageOne');


export const navEvent = function navEvent(eventType, color, animationTime, fontWeight){
item.forEach((elem)=>{
  elem.addEventListener(eventType, ()=>{
    cursor : 'hand';
    elem.style.color = color;
    elem.style.transition = animationTime;
    elem.style.fontWeight = fontWeight;
  });
})
}

export const navEventSecond = function navEventSecond(eventType, color, animationTime, fontWeight){
  item.forEach((elem)=>{
    elem.addEventListener(eventType, ()=>{
      elem.style.color = color;
      elem.style.transition = animationTime;
      elem.style.fontWeight = fontWeight;
    });
  })
  }



  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          }); 
      });
  })
  







