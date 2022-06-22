const hanbok_nav = document.getElementById('hanbok_nav');
const hanbok_item = document.querySelectorAll('.hanbok_items');
const pageOne = document.getElementById('pageOne');


export function hanbok_navEvent(eventType, color, animationTime, fontWeight){
  hanbok_item.forEach((elem)=>{
  elem.addEventListener(eventType, ()=>{
    cursor : 'hand';
    elem.style.color = color;
    elem.style.transition = animationTime;
    elem.style.fontWeight = fontWeight;
  });
})
}

export function hanbok_navEventSecond(eventType, color, animationTime, fontWeight){
  hanbok_item.forEach((elem)=>{
    elem.addEventListener(eventType, ()=>{
      elem.style.color = color;
      elem.style.transition = animationTime;
      elem.style.fontWeight = fontWeight;
    });
  })
  }

  // export function hanbok_navEventClick(eventType, color, fontWeight){
  //   hanbok_item.forEach((elem)=>{
  //     elem.addEventListener(eventType, ()=>{
  //       elem.style.color = color;
  //       // elem.style.transition = animationTime;
  //       elem.style.fontWeight = fontWeight;
  //     });
  //   })
  //   }




  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  })
  