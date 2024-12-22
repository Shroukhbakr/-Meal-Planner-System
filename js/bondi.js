'use strict';
const modal = document.querySelector('.pop-box-sign-in');
const modal2 = document.querySelector('.pop-box-sign-up');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnsOpenSignin = document.querySelector('.show-sign-in');
const btnsOpenSignup = document.querySelector('.show-sign-up');


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
      
};
const openModal2 = function () {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
        
  };

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeModal2 = function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
  };

btnsOpenSignin.addEventListener('click', openModal);
btnsOpenSignup.addEventListener('click', openModal2);

btnCloseModal.addEventListener('click', closeModal);
btnCloseModal2.addEventListener('click', closeModal2);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    }   
});
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
      closeModal2();
      }   
  });
