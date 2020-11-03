const agreeButton = document.querySelector(".agree-button");
const modal = document.querySelector(".main-modal");
const modalBox = document.querySelector(".modal-container");
const modalCloseItems = document.querySelectorAll(".modal-close");

const closeModal = () => {
  modal.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
};

const modalClick = event => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  return false;
};

modal.addEventListener("click", closeModal);
modalBox.addEventListener("click", modalClick);
modalCloseItems.forEach(item => item.addEventListener("click", closeModal));
agreeButton.addEventListener("click", openModal);

// const agreeButton = document.querySelector(".agree-button");
// const modalBody = document.querySelector('.main-modal');

// agreeButton.addEventListener('click', openModal);
// document.addEventListener('click', closeModal);

// function openModal() {
//   modalBody.classList.remove('invisible');
// }

// function closeModal({target: clickedElement}) {
//   if(checkConditions(clickedElement)){
//     modalBody.classList.add('invisible');
//   }
// }

// function checkConditions(clickedElement) {
//   const isAuthorizedToModalClose = clickedElement.classList.contains('modal-close');
//   const isMainModalSurroundings = clickedElement.classList.contains('main-modal');
//   const isModalExitButton = clickedElement.closest('.modal-close');

//   const conditions = [isAuthorizedToModalClose, isMainModalSurroundings, isModalExitButton];

//   return conditions.some(condition => condition);
// }