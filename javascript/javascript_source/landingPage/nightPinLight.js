
const root = document.getElementById('root');
const box= document.getElementById('box');



export const colorChange = (colorA, colorB, colorC, colorD, elems) => {
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


export const lightEffect = (parentTarget, childrenTarget, eventType) => {
  parentTarget.addEventListener(eventType, (event) => {
    let xPos = event.clientX;
    let yPos = event.clientY;
    childrenTarget.style.left = `${parentTarget.innerWidth - xPos}px`;
    childrenTarget.style.top = `${parentTarget.innerHeight - yPos}px`;

  });
}




