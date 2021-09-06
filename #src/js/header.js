const headerWrapeer = document.querySelector('.header__wrapeer');
const listImh = document.querySelector('.header__wrapeer img');
const headerHeading = document.querySelector('.header h1');
const headerText = document.querySelector('.header__description p');

if(window.innerWidth < 991) {
    headerWrapeer.style.display = 'block'
    headerHeading.style.width = '100%'
    // headerHeading.style = 'font-size: 70px'
    headerText.style.width = '70%'
    listImh.style.display = 'none'
    
}
