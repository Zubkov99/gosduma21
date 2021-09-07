const headerWrapeer = document.querySelector('.header__wrapeer');
const listImh = document.querySelector('.header__wrapeer img');
const headerHeading = document.querySelector('.header h1');
const headerText = document.querySelector('.header__description p');

if(window.innerWidth < 1000) {
    headerWrapeer.style.display = 'block'
    headerHeading.style.width = '100%'
    headerText.style.width = '75vw'
    listImh.style.display = 'none' 
}



