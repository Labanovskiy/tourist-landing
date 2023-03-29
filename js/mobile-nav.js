const navBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};

fade.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};