import { lightEffect } from "./javascript_source/landingPage/nightPinLight.js";
import { colorChange } from "./javascript_source/landingPage/nightPinLight.js";
import { addElem } from "./javascript_source/mainJavascript/main.js";
import { totheLeft, totheBottom } from "./javascript_source/landingPage/scrollEvent.js";
import { totheUp, mainTotheBottom } from "./javascript_source/mainJavascript/mainpage-upScroll.js";
import {lightItUp, lightItUp_bottom} from './javascript_source/mainJavascript/mainpage-lightGlow.js'
import { workUpScroll, workDownScroll } from "./javascript_source/workJavascipt/workMainpage-ScrollEvent.js";
import { filgrimageTotheTop } from "./javascript_source/workJavascipt/filgrimage_pageTwoUpScroll.js";
import { fade } from "./javascript_source/workJavascipt/filgrimage_pageOneText-anim.js";
import { filgrimage_pageOneTotheBottom, filgrimage_pageOneTotheTop } from "./javascript_source/workJavascipt/filgrimagePageOne-scrollEvent.js";
import { navEvent, navEventSecond} from "./javascript_source/workJavascipt/filgrimage_pageTwotest-navigation.js";




window.addEventListener('load',()=>{
  
const pinLight = document.getElementById('box');

colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove');

const root = document.getElementById('root');
const main = document.getElementById('main');
addElem('scroll', main);

const landingPage = document.getElementById('landing')

landingPage.addEventListener('onload', totheLeft());
totheBottom('wheel', main);
// landing페이지 백그라운드 슬라이드, 다운스크롤이벤트

totheUp('wheel', main, landing);
mainTotheBottom('wheel',work)
// main페이지 스크롤 이벤트
const lightGroup = document.getElementById('lightGroup');
lightItUp();
lightItUp_bottom()
// main페이지 조명 애니메이션

workUpScroll('wheel', main);
workDownScroll('wheel', filgrimage_pageOne);
// workMain페이지 스크롤이벤트
// pilgrimage_pageOne 텍스트애니메이션
filgrimage_pageOneTotheBottom('wheel', filgrimage_pageTwo)
filgrimage_pageOneTotheTop('wheel', work)
// filgrimage_pageOne 스크롤이벤트
navEvent('mouseover')
navEventSecond('mouseout')
// filgrimage_pageTwo 네비게이션 이벤트
filgrimageTotheTop('wheel',filgrimage_pageOne);
});