const navSlide = function() {
    const menu = document.querySelector('.menu');
    const navBar = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener("click",function()
    {
        navBar.classList.toggle('nav-active');
    });

    navLinks.forEach((link,index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 +0.7}s`;
    });
};

navSlide();