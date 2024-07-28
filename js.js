let progress = document.getElementById("progress");
var cnt = document.getElementById("song");
let btnp = document.getElementById("p");
let beat = new Audio('./Better.mp3');

function play(){
  beat.play();
}

function pause(){
    beat.pause();
}

function load(){
    beat.load();
}