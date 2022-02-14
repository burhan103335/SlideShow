const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;
setInterval(() => {

    countElements ++;

    countElements  = countElements % slideshowElements.length;

    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    
    slideshowElements[countElements].classList.add("current");

}, 2000);