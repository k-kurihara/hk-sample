import "./styles/main.scss";
// import "swiper/css";
// import "swiper/css/navigation";

// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';


// const swiper = new Swiper('.swiper', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'; // モジュールはここから！

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination], // Swiper.use() は使わない
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



// スライダー初期化
// const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// console.log('Swiper初期化開始');

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   on: {
//     init: () => {
//       console.log('Swiper 初期化完了');
//     },
//     slideChange: () => {
//       console.log('スライドが切り替わりました');
//     }
//   }
// });

// console.log('Swiper初期化完了（下まで実行されました）');





// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// let current = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle("active", i === index);
//   });
// }

// prevBtn.addEventListener("click", () => {
//   current = (current - 1 + slides.length) % slides.length;
//   showSlide(current);
// });

// nextBtn.addEventListener("click", () => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// });

// 自動再生したい場合はこれを追加
// setInterval(() => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// }, 5000);













// フェードイン処理（この順序は後でもOK）
const targets = document.querySelectorAll(".fade-in-target");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.5 }
);

targets.forEach((target) => observer.observe(target));
