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
