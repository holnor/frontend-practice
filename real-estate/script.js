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


// const header = document.getElementById("header");
// const title = document.getElementById("title");
// const excerpt = document.getElementById("excerpt");
// const profileImg = document.getElementById("profile_img");
// const name = document.getElementById("name");
// const date = document.getElementById("date");
//
// const animatedBgs = document.querySelectorAll('.animated-bg');
// const animatedBgTexts = document.querySelectorAll('.animated-bg-text');
//
// setTimeout(getData, 2500);
// function getData() {
//     header.innerHTML =
//         '<img class="card-img special-offer_img" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />'
//     title.innerHTML = 'Lorem ipsum dolor sit amet.';
//     excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alic ducimus laudantium qui quidem recusandae voluptatem?';
//     profileImg.innerHTML = '<img src="https://xsgames.co/randomusers/avatar.php?g=female" alt=""/>';
//     name.innerHTML = 'Lorrine Soehren';
//     date.innerHTML = 'Jul 14 2023';
//
//     animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
//     animatedBgTexts.forEach(bgT => bgT.classList.remove('animated-bg-text'));
// }
