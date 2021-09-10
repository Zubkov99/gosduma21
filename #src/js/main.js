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
