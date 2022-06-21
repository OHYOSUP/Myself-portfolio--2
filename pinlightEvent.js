const root = document.getElementById('root');
const container = document.getElementsByClassName('container');
const box= document.getElementById('box');
const title = document.getElementById('title');
const content = document.getElementById('content');


title.style.width = '40vw';
title.style.heigth = '5vh';
content.style.width = '40vw';
content.style.heigth = '5vh';


function colorChange (colorA, colorB, colorC, colorD, elems)  {

  // let colors = ["#F0DA31", "#F01886", "#F01372"];
  let colors = [colorA, colorB, colorC, colorD];

  let c1 = colors[Math.floor(Math.random()*colors.length)];
  let c2 = colors[Math.floor(Math.random()*colors.length)];

  elems.style.background = `linear-gradient(To right, ${c1}, ${c2})`;
  elems.style.boxShadow = `30px 40px 100px ${c2}`
  elems.style.width = '20vw';
  elems.style.height = '20vw';
  elems.style.borderRadius = '50%';
  elems.style.position = 'absolute';
  elems.style.zIndex = 0;
  elems.style.left = 0;
  elems.style.top = 0;
  elems.style.transform = 'translate(-50%, -50%)';  
  elems.style.zIndex = '10';
  elems.style.opacity = '0.3';
  
}

const pinLight = document.getElementById('box');

function lightEffect (parentTarget, childrenTarget, eventType) {
  parentTarget.addEventListener(eventType, (event) => {

    let xPos = event.clientX;
    let yPos = event.clientY;
    childrenTarget.style.left = `${parentTarget.innerWidth - xPos}px`;
    childrenTarget.style.top = `${parentTarget.innerHeight - yPos}px`;

  });
}


colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove');





function colorChangeSecond (colorA, colorB, colorC, colorD, elems)  {

  // let colors = ["#F0DA31", "#F01886", "#F01372"];
  let colors = [colorA, colorB, colorC, colorD];

  let c1 = colors[Math.floor(Math.random()*colors.length)];
  let c2 = colors[Math.floor(Math.random()*colors.length)];

  elems.style.background = `linear-gradient(To right, ${c1}, ${c2})`;
  elems.style.boxShadow = `30px 40px 100px ${c2}`
  elems.style.width = '10vw';
  elems.style.height = '10vw';
  // elems.style.transition  = '0.2s';
  elems.style.borderRadius = '50%';
  elems.style.position = 'absolute';
  elems.style.zIndex = 0;
  elems.style.left = 0;
  elems.style.top = 0;
  elems.style.transform = 'translate(-50%, -50%)';  
  elems.style.zIndex = '10';
  elems.style.opacity = '0.3';
  
}


function lightEffectSecond (parentTarget, childrenTarget, eventType) {
  parentTarget.addEventListener(eventType, (event) => {

    let xMousepos = event.clientX;
    let yMousepos = event.clientY;
    // console.log(xMousepos);
    // console.log(yMousepos);

    childrenTarget.style.left = `${xMousepos}px`;
    childrenTarget.style.top = `${yMousepos}px`;
  });
}










// title.addEventListener('mouseover',()=>{
// root.classList.add('background');

// });

// title.addEventListener('mouseout',()=>{
//   root.classList.remove('background');
//   });
  



// title.addEventListener('mouseover', (event)=>{
//   // event.stopPropagation();
  
// // console.log(e);
//   lightEffectSecond(window, pinLight, 'mousemove');
//   colorChangeSecond('#fff', '#fff', '#fff', '#fff', pinLight);

  
// });


// title.addEventListener('mouseout', (event)=>{
//   // event.stopPropagation();

  
//   colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
//   lightEffect(window, pinLight, 'mousemove');
// });


// content.addEventListener('mouseover', (e)=>{


//   lightEffectSecond(window, pinLight, 'mousemove');
//   colorChangeSecond('#fff', '#fff', '#fff', '#fff', pinLight);
// });
// content.addEventListener('mouseout', (e)=>{


//   colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
//   lightEffect(window, pinLight, 'mousemove');
// });
