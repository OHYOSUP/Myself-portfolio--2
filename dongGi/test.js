// * 동기 비동기
// 1. 종작(모션)을 제어할 때 사용
// 2. event-driven : 이벤트주도 방식
// 3. 눈에 안보임

function text(){
  return `<div>hello</div>`;
}

function section(){
  return `<section>bye</section>`
}

let timerA = setTimeout(() => {
  console.log(text())
  let timerB = setTimeout(()=>{
    console.log(section());
  },0)
}, 1000);

// console.log(section());
// console.log(text());
// console.log(section());

// ! 함수는 최상급 취급을 받기 때문에 언제든지 콜링이 가능하다
// ! 순서를 어기는 setTimeout() -> 먼저 완료 된 것부터 바로 실행(위아래가 없음) : 비동기 => 함수 안에 함수를 넣어서 해결(콜백지옥)
