// ==UserScript==
// @name         国家大剧院古典音乐频道下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to open the classical music's door!
// @author       williamslay
// @match        http://ncpa-classic.cntv.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @run-at document-end
// ==/UserScript==
    'use strict';
    let download=document.createElement("div");
    download.setAttribute("class", "download");
    let myText = document.createTextNode("下载");
     GM_addStyle ( `
        .download {
           width: 38px;
           height: 18px;
           line-height: 18px;
           text-align: center;
           background-color: #577891;
           font-size: 14px;
           font-family: "宋体";
           cursor: pointer;
           display:inline-block;
           position:absolute;
           left: 63%;
          top: 35%;
           };
    ` );
     download.onclick=function(){
        var audioplayer=document.getElementById("audioplayer");
       var url=audioplayer.src;
       window.open(url,'_self');
    }
    download.appendChild(myText);
    var parent=document.getElementsByClassName("nr_2");
    var node=document.getElementById("audio_title_div");
    parent[0].insertBefore(download,node);
console.log("开发者williamslay,github:https://github.com/williamslay")