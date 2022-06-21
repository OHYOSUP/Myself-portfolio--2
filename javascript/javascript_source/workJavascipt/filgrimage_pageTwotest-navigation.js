const nav = document.getElementById('nav');
const item = document.querySelectorAll('.items');
const pageOne = document.getElementById('pageOne');


export const navEvent = function navEvent(eventType){
item.forEach((elem)=>{
  elem.addEventListener(eventType, ()=>{
    cursor : 'hand';
    elem.style.color = '#BA3737';
    elem.style.transition = '0.3s';
    elem.style.fontWeight = 1000;
  });
})
}

export const navEventSecond = function navEventSecond(eventType){
  item.forEach((elem)=>{
    elem.addEventListener(eventType, ()=>{
      elem.style.color = '#a5a5a5';
      elem.style.transition = '0.3s';
      elem.style.fontWeight = 1000;
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
  







