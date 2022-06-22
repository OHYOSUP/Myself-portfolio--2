import { lightEffect } from "./javascript_source/landingPage/nightPinLight.js";
import { colorChange } from "./javascript_source/landingPage/nightPinLight.js";
import { backgoundAnimation } from "./javascript_source/landingPage/backgroundScrollEvent.js";
import { nextPage } from "./javascript_source/scrollEvent-nextPage.js";
import { prevPage } from "./javascript_source/scrollEvent-prevPage.js";
import { navEvent, navEventSecond} from "./javascript_source/workJavascipt/filgrimage_pageTwo/filgrimage_pageTwotest-navigation.js";
// import { bilboardEvent } from "./javascript_source/mainJavascript/bilboardEvent.js";
import {lightItUp, lightItUp_bottom} from './javascript_source/mainJavascript/mainpage-lightGlow.js'
import { titleTextStyle, fade } from "./javascript_source/workJavascipt/pilgrimage_pageOne/pilgrimage_pageOneText-anim.js";
import { hanbok_navEvent, hanbok_navEventSecond} from "./javascript_source/hanbokPage/hanbokNav.js";


const landingPage = document.getElementById('landing')
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textbox');
const pinLight = document.getElementById('box');
const backgroundCity = document.querySelector('.img');
const main = document.getElementById('main');
const work = document.getElementById('work');
const pilgrimage_pageOne = document.getElementById('pilgrimage_pageOne');
const pilgrimage_pageTwo = document.getElementById('pilgrimage_pageTwo');
const titleText = document.getElementById('titleText');

backgroundCity.style.width = '150vw';
backgroundCity.style.height = '150vh';
backgroundCity.style.position = 'absolute'
backdropBox.style.position = 'absolute';

let i = 0;
let isStatus = true;
backgoundAnimation();
// nextPage(landingPage, 'wheel', main);
// landing페이지 백그라운드 슬라이드, 다운스크롤이벤트
colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove')
// landingpage 마우스 핀라이트 이벤트

// nextPage(main, 'wheel', work)
// prevPage(main, 'wheel', landingPage)
// mainpage 스크롤이벤트


// lightItUp();
// setTimeout(lightItUp_bottom,300);
// mainpage 조명이벤트

// nextPage(work, 'wheel', pilgrimage_pageOne)
// prevPage(work, 'wheel', main)
// workpage 스크롤이벤트

// titleTextStyle('10rem', 1, '4vw', '-30vh', '#fff', 1000 )
// fade();
// pilgrimage_pageOne 텍스트애니메이션
// nextPage(pilgrimage_pageOne, 'wheel', pilgrimage_pageTwo)
// prevPage(pilgrimage_pageOne, 'wheel', work)
// pilgrimage_pageOne 스크롤이벤트


navEvent('mouseover', '#BA3737', '0.3s', 1000)
navEventSecond('mouseout', '#a5a5a5', '0.3s', 1000)
// filgrimage_pageTwo 네비게이션 이벤트

hanbok_navEvent('mouseover', '#F23920', '0.3s', 1000);
hanbok_navEventSecond('mouseout', '#ccc', '0.3s', 1000);
// hanbok_navEventClick('onclick', '#F23920', 1000)




// import { prevBtn, nextBtn } from "./javascript_source/hanbok_legacy/hanbok_legacy.js";
// import { a } from "./javascript_source/hanbok_legacy/hanbok_legacy.js";

  

// ---------------------scrollTest-------------------------------------




let totalHeight = document.body.clientHeight;
let getCurrentHeight = window.pageYOffset;
// console.log(totalHeight);
// console.log(getCurrentHeight);
// console.log(landingPage.offsetHeight);

let landingPageHeight = landingPage.offsetHeight
let setHeightValue = 0;
let count = 0;


// function valueScroll(e){
//   scrollValue += e.deltaY*0.01;
//   Math.floor(scrollValue);

//   console.log(scrollValue);
//   if(scrollvalue > 10){
//     count+=1;
//   }
//   if(scrollValue < -10){
//     count-=1;
//   }
// }
let scrollValue = 0;


root.addEventListener('wheel', (e)=>{
e.preventDefault();
// count = 0;

// scrollValue += e.deltaY*0.01;

// Math.floor(scrollValue);
// console.log(scrollValue);

// if(scrollvalue > 10){
//   count+=1;
if(e.deltaY > 0){
  setHeightValue = landingPageHeight;
  count +=1;
  // console.log(count);
  // console.log(getCurrentHeight);

  window.scrollBy({
    top : setHeightValue,
    left : 0,
    behavior : 'smooth'
  });
}
if(count ===2){
  function firstEvent(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        lightItUp();
        resolve();
      },500);
    });
  };
  firstEvent()
    .then(function(){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          lightItUp_bottom();
        },500);
      });
    });
    firstEvent()
    .then(function(){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          lightItUp_bottom();
        },500);
      });
    })
    .then(function(){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          bilboardEvent();
        },1000);
      });
    });

}


if(e.deltaY < 0){
  setHeightValue = -(landingPageHeight);
  count--;

  window.scrollBy({
    top : setHeightValue,
    left : 0,
    behavior : 'smooth'
  });
}
// if(scrollValue < -10){
//   count-=1;
//   console.log(count);
// }
});