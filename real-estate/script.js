const menuBtn = document.querySelector(".menu-btn");
const middleBar = document.querySelector(".middle-bar");
const navBar = document.querySelector(".navbar");
const main = document.querySelector("main");

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle("open");
    middleBar.classList.toggle("hidden");
    navBar.classList.toggle("active");
    main.classList.toggle("overlay")
})