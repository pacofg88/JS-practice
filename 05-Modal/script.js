'use strict';

// element dialog box
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// button to close dialog box
const btnCloseModal = document.querySelector('.close-modal');
// object containing all the elements with the class
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  // the classList removes the "hidden" class
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  // the classList adds the "hidden" class
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// key press event listener
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
