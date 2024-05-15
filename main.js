const openmenyu = document.getElementById('openmenyu');
const menyu = document.querySelector('.menyu');
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close__btn = document.querySelector(".close__btn");

openmenyu.addEventListener('click', () => {
    if (menyu.style.width === '250px') {
        menyu.style.width = '0';
    } else {
        menyu.style.width = '250px';
    }
});


openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

close__btn.addEventListener('click', () => {
    modal.style.display = 'none';
});




