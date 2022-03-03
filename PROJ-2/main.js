let count=0;

document.getElementById("counter").textContent= count;

const buttonDecrease = document.getElementById('btnd');
const buttonReverse = document.getElementById('btnr');
const buttonIncrease = document.getElementById('btni');

buttonDecrease.addEventListener("click",function(){
    count--;
    document.getElementById("counter").textContent = count;
});

buttonIncrease.addEventListener("click",function(){
    count++;
    document.getElementById("counter").textContent = count;
});

buttonReverse.addEventListener("click",function(){
    count=0;
    document.getElementById("counter").textContent = count;
});

