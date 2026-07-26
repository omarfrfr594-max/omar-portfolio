ScrollReveal({

    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false

});


// Hero

ScrollReveal().reveal('.hero-text', {

    origin: 'right'

});


ScrollReveal().reveal('.hero-image', {

    origin: 'left',
    delay: 400

});


// About

ScrollReveal().reveal('.about', {

    origin: 'bottom'

});


// Skills cards

ScrollReveal().reveal('.skill-card', {

    origin: 'bottom',
    interval: 150

});


// Projects cards

ScrollReveal().reveal('.project-card', {

    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
    reset: false

});


// CV / Experience

ScrollReveal().reveal('.experience', {

    origin: 'bottom'

});


// Contact

ScrollReveal().reveal('.contact-card', {

    origin: 'bottom',
    interval: 150

});


// Footer

ScrollReveal().reveal('footer', {

    origin: 'bottom'

});

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display = "none";

        },800);

    }

});

function toggleMenu(){

    const menu = document.getElementById("nav-menu");

    menu.classList.toggle("active");

}


// إغلاق القائمة بعد اختيار أي قسم

document.querySelectorAll("#nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
        .getElementById("nav-menu")
        .classList.remove("active");

    });

});