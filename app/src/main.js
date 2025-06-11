import "./styles/main.scss";


import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // モジュールはここから！

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// スライダー
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay], // Swiper.use() は使わない
  loop: true,
  speed: 750,
  autoplay: {
    delay: 4000, // 2秒ごとにスライド
    disableOnInteraction: true, // ユーザー操作後も自動再開
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});




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



setTimeout(()=>{
  const tweets = document.querySelectorAll('iframe[src*="twitter.com"]');
  tweets.forEach(iframe => {
    iframe.style.width = '100%';
    iframe.style.maxWidth = '100%';
  });

}, 1000)



const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// ハンバーガーメニューの開閉
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});

// nav内のaタグをすべて取得し、クリック時にメニューを閉じる
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
  });
});

