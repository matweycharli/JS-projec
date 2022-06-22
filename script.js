let imgBox = document.querySelector('.imgBox');
let slides = imgBox.getElementsByTagName('img');
let i = 0;

function prevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

let contentBox = document.querySelector('.contentBox');
let slidesText = contentBox.getElementsByTagName('div');
let j = 0;

function prevSlideText() {
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slidesText.length;
    slidesText[j].classList.add('active');
}

function nextSlideText() {
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('active');
}

let menuToggle = document.querySelector('.bmw')
let nav = document.querySelector('.containb')
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    if (menuToggle.classList.contains('active')) {
        menuToggle.innerHTML = 'Назад'
    } else {
        menuToggle.innerHTML = 'Details'
    }

    nav.classList.toggle('active')

}

let menuToggle1 = document.querySelector('.volk');
let nav1 = document.querySelector('.containv');
menuToggle1.onclick = function () {
    menuToggle1.classList.toggle('active');
    if (menuToggle1.classList.contains('active')) {
        menuToggle1.innerHTML = 'Назад'
    } else {
        menuToggle1.innerHTML = 'Details'
    }
    nav1.classList.toggle('active');
}

let menuToggle2 = document.querySelector('.uaz');
let nav2 = document.querySelector('.containu');
menuToggle2.onclick = function () {
    menuToggle2.classList.toggle('active');
    if (menuToggle2.classList.contains('active')) {
        menuToggle2.innerHTML = 'Назад'
    } else {
        menuToggle2.innerHTML = 'Details'
    }
    nav2.classList.toggle('active');
}

let menuToggle3 = document.querySelector('.mers');
let nav3 = document.querySelector('.containm');
menuToggle3.onclick = function () {
    menuToggle3.classList.toggle('active');
    if (menuToggle3.classList.contains('active')) {
        menuToggle3.innerHTML = 'Назад'
    } else {
        menuToggle3.innerHTML = 'Details'
    }
    nav3.classList.toggle('active');
}

