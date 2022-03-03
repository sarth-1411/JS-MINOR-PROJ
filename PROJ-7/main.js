const Playbtn = document.querySelector('.play-btn');

const Pausebtn = document.querySelector('.pause-btn');

const video = document.querySelector('.video-container');

Playbtn.addEventListener("click",function(){
    video.play();
});

Pausebtn.addEventListener("click",function(){
    video.pause();
});