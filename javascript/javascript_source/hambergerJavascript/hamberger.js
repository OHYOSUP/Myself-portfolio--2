

  const hamberger = document.getElementById('hamberger');
  const icon = document.getElementById('icon');
  const lines = document.querySelectorAll('#icon>div');
  const list = document.getElementById('list');
  const items = document.querySelectorAll('#list>li');

  const line = Array.from(lines);
  hamberger.style.position = 'fixed';

  icon.style.position = 'relative';
  list.style.display = 'none';

  
  let isStatus = true;


export const iconFunction = function iconEvent(){
  icon.addEventListener('mouseover', ()=>{
    line.forEach(elems=>{
      elems.style.backgroundColor = '#FA520D';
      elems.style.transition = '0.5s';
      // elems.style.position = 'relative';
    })
    });

    icon.addEventListener('mouseout', ()=>{
      line.forEach(elems=>{
        elems.style.backgroundColor = '#fff';
        elems.style.transition = '0.5s';
        // elems.style.position = 'relative';
      })
      });

      icon.addEventListener('click', ()=>{

        line.forEach(elems=>{
          if(isStatus === true){
            
            list.style.display = 'flex';
  
            isStatus = false;
          } else if(isStatus === false){
            
            list.style.display = 'none';
            isStatus = true;
          }
        });
        });
}

iconFunction(icon);
