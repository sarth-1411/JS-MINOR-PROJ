const btns1 = document.querySelectorAll('.plusbtn');

btns1.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const q = e.currentTarget.parentElement.parentElement;
        q.classList.toggle("show-text");
    });
});

const btns2 = document.querySelectorAll('.minusbtn');

btns2.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const q = e.currentTarget.parentElement.parentElement;
        q.classList.toggle("show-text");
    });
});