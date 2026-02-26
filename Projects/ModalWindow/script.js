'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); // only the first one selected

console.log(btnCloseModal);
console.log(btnOpenModal); 

for(let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}