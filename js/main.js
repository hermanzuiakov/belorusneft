"use strict";

let scrollPos = 0;
const toTopButton = document.getElementById("toTop");

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY > scrollPos) {
        toTopButton.classList.add("show");
    } else {
        toTopButton.classList.remove("show");
    }
    scrollPos = windowY;
}

function toTop() {
    /*document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera*/

    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.addEventListener('scroll', checkPosition);
toTopButton.onclick = function () {
    toTop();
}

Fancybox.bind("[data-fancybox='gallery']", {
    // Your options go here
});


Fancybox.bind("[data-fancybox='video']", {
    // Your options go here
});