const titleText = document.getElementById('titleText');
const strText = titleText.textContent;


titleText.style.fontSize = '10rem';
titleText.style.opacity = 1;
titleText.style.position = 'relative';
titleText.style.zIndex = 10;
titleText.style.left = '4vw'
titleText.style.top = '-30vh'
titleText.style.color = '#fff';

console.log(titleText);


console.log(titleText);

titleText.textContent = "";
const splitText = strText.split("");
// console.log(splitText);


for(let i = 0; i<splitText.length; i++){
  titleText.innerHTML += "<span>" + splitText[i] + "</span>";
};

// console.log(titleText);
// console.dir(titleText);


let char = 0;



let timer = setInterval(fade,50)

export  function fade(){
  const span = titleText.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}


