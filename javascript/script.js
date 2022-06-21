
import { lightEffect } from "./javascript_source/landingPage/nightPinLight.js";
import { colorChange } from "./javascript_source/landingPage/nightPinLight.js";
const pinLight = document.getElementById('box');

colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove')

import { addElem } from "./javascript_source/mainJavascript/main.js";
const root = document.getElementById('root');
const main = document.getElementById('main');


addElem('scroll', main);
// import { scrollMoving } from "./javascript_source/workJavascipt/filgrimage_pageTwoUpScroll.js";




import { totheLeft, totheBottom } from "./javascript_source/landingPage/scrollEvent.js";
const landingPage = document.getElementById('landing')

landingPage.addEventListener('onload', totheLeft());
totheBottom('wheel', main);
// landing페이지 백그라운드 슬라이드, 다운스크롤이벤트


import { totheUp, mainTotheBottom } from "./javascript_source/mainJavascript/mainpage-upScroll.js";

totheUp('wheel', main, landing);
mainTotheBottom('wheel',work)
// main페이지 스크롤 이벤트
import {lightItUp, lightItUp_bottom} from './javascript_source/mainJavascript/mainpage-lightGlow.js'
const lightGroup = document.getElementById('lightGroup');
lightItUp();
lightGroup.onload = setTimeout(lightItUp_bottom,300);

  



// main페이지 조명 애니메이션


// import { footerTotheBottom, footerTotheTop } from "./javascript_source/footerjavascript/footerScrollEvent.js";
// footerTotheTop('wheel', main)
// footerTotheBottom('wheel', work)
// footer 스크롤 이벤트

import { workUpScroll, workDownScroll } from "./javascript_source/workJavascipt/workMainpage-ScrollEvent.js";
workUpScroll('wheel', main);
workDownScroll('wheel', filgrimage_pageOne);
// workMain페이지 스크롤이벤트
import { fade } from "./javascript_source/workJavascipt/filgrimage_pageOneText-anim.js";
// pilgrimage_pageOne 텍스트애니메이션
import { filgrimage_pageOneTotheBottom, filgrimage_pageOneTotheTop } from "./javascript_source/workJavascipt/filgrimagePageOne-scrollEvent.js";
filgrimage_pageOneTotheBottom('wheel', filgrimage_pageTwo)
filgrimage_pageOneTotheTop('wheel', work)
// filgrimage_pageOne 스크롤이벤트



import { navEvent, navEventSecond} from "./javascript_source/workJavascipt/filgrimage_pageTwotest-navigation.js";
navEvent('mouseover')
navEventSecond('mouseout')
// filgrimage_pageTwo 네비게이션 이벤트

import { filgrimageTotheTop } from "./javascript_source/workJavascipt/filgrimage_pageTwoUpScroll.js";
filgrimageTotheTop('wheel',filgrimage_pageOne);


// import { prevBtn, nextBtn } from "./javascript_source/hanbok_legacy/hanbok_legacy.js";
// import { a } from "./javascript_source/hanbok_legacy/hanbok_legacy.js";

  

