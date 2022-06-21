
const landingPage = document.getElementById('landing')
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textbox');
console.log(textBox);


function boxEvent (elems){
elems.style.opacity = 0.2;
elems.style.size = 'cover';
// elems.style.width = '90vw';
elems.style.transition = '0.5s';
};

function boxEventTwo (elems){
  elems.style.opacity = 0.0;
  // elems.style.width = '80vw';
  elems.style.size = 'cover';
  elems.style.transition = '0.5s';
  };

let posY = landing.getBoundingClientRect().top;

let nowPosition = window.scrollY;
let documentHeight = document.body.offsetHeight
let nextPage = landingPage.offsetHeight;





// function scrollEventUp(elems){
//   elems.scrollBy({left : -1920, top : -(documentHeight+posY), behavior : 'smooth'});
//   };


// let isStatus = true;

export const scroll = function scrollEvent(elems){

elems.addEventListener('wheel', (event)=>{
event.preventDefault();
});
};





// export const scroll = landingPage.addEventListener('wheel', (e)=>{
// e.preventDefault();

// let isStatus = false;

// if(e.deltaY === 100){
//   boxEvent(backdropBox);
//   scrollEvent(backdropBox);
//   isStatus = true;
//   console.log(backdropBox);
//   }
//   if(e.deltaY === -100){
//     boxEventTwo(backdropBox);
//     scrollEventUp(window);
//     isStatus = false;
//   }
// });

