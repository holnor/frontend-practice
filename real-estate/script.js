const menuBtn = document.querySelector(".inner");
const nav = document.querySelector(".outer");
const barTop = document.querySelector(".top");
const barMiddle = document.querySelector(".mid");
const barBottom = document.querySelector(".bot");
const body = document.querySelector("body");
const outerNavRing = document.querySelector(".outer");

menuBtn.addEventListener('click', ()=> {
    nav.classList.toggle("active");
    barTop.classList.toggle("closed");
    barMiddle.classList.toggle("closed");
    barBottom.classList.toggle("closed");
});