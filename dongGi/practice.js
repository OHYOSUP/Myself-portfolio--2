let nuri = 100;

// work1 1번 행동에는 1초 뒤에 nuri가 10 더해지고 콘솔에 출력
// work2 2번 행동에는 1초 뒤에 nuri에서 30을 빼고 콘솔에 출력
//todo



function first() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      nuri = nuri + 10
      console.log(nuri);
      resolve();
    },1000)
  });
}

// console.log(a());`

first()
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        nuri = nuri - 30
        console.log(nuri);
        resolve();
      },1000)
  });
})