

// landing.style.width = '150vw';
// landing.style.height = '200vh';
// landing.style.backgroundColor = '#666';
// landing.style.display = 'flex';
// landing.style.justifyContent = 'center';
// // landing.style.alignItems = 'center';

// backdropBox.style.width = '150vw';
// backdropBox.style.height = '80vh';
// backdropBox.style.backgroundColor = '#222';
// backdropBox.style.opacity = 0;


// textBox.style.width = '50vw';
// textBox.style.height = '50vh';
// textBox.style.fontSize = '3rem';
// textBox.style.position = 'absolute';
// textBox.style.backgroundColor = '#ccc';



//   let nextPage = document.createElement('div');
//   backdropBox.appendChild(nextPage);

// nextPage.style.width = '5vw';
// nextPage.style.height = '5vw';
// nextPage.style.backgroundColor = '#000';
// nextPage.style.position = 'absolute';
// nextPage.style.right = '10vw';
// nextPage.style.top = '50vh';
// console.log(nextPage);





// function eventMove(e) {
//   e.preventDefault();
//   if(e.deltaY === 100){
//     moveRight(backdropBox);
//     addOpacityDiv(backdropBox);

//   }
//   if(e.deltaY === -100){
//     moveLeft(backdropBox);
    
//   }
// }
const landing = document.getElementById('landing');
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textBox');


backdropBox.style.position = 'absolute';
backdropBox.style.left = 0;
backdropBox.style.opacity = 0;


root.style.overflowX = 'hidden';
// console.log(window.pageYOffset);


function moveRight(elems){

  elems.scrollBy({left : 1920, top : 0, behavior : 'smooth'});
  elems.style.opacity = 0.2;
  elems.style.transition = '0.5s';
}


function moveLeft(elems){


  elems.scrollBy({left : -1920, top : 0, behavior : 'smooth'});
  elems.style.opacity = 0;
  elems.style.transition = '0.5s';
}

console.log(backdropBox.pageXOffset);



function nextPage(elems){
  elems.scrollBy({left : 0, top : 1356, behavior : 'smooth'});
}




export const scrollTwo = landing.addEventListener('wheel', (e)=>{
  e.preventDefault()

  if(e.deltaY === 100){
    moveRight(window);
    // setTimeout(function(){
    //   nextPage(window)
    // },2000)
  }if(e.deltaY === -100){
    moveLeft(backdropBox);
  }
// nextPage(window);

});


console.log()