// const headerWrapeer = document.querySelector('.header__wrapeer');
// const listImh = document.querySelector('.header__wrapeer img');
// const headerHeading = document.querySelector('.header h1');
// const headerText = document.querySelector('.header__description p');

// if(window.innerWidth < 900) {
//     // headerWrapeer.style.display = 'block'
//     headerHeading.style.width = '100%'
//     headerText.style.width = '75vw'
//     // listImh.style.display = 'none' 
// }

const spanItems = document.querySelectorAll('.main__conteiners-item--text span');
const conteiner = document.querySelectorAll('.main__conteiners-item');

spanItems.forEach(item => {
    item.addEventListener('click', (event) => {
        
        const target = event.target;
        const previousText = target.previousSibling.previousSibling;
        previousText.classList.toggle('hide');
        item.innerHTML = 'Свернуть ↑'

        if(!previousText.classList.contains('hide')) {
            item.innerHTML = 'Свернуть ↑'
        } else {
        item.innerHTML = 'Развернуть ↓'
        }
        
    })
});


