const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".keyboard__button");

let password = "";

const reset = () => {
  password = "";
  display.textContent = password;
};
const save = () => {
  if (password.length !== 4) {
    display.textContent = "Hasło powinno mieć 4 cyfry - wpisz hasło jeszcze raz";
    password = "";
  } else {
    display.textContent = password;
    password = "";
  }
};

const handleButtonClick = event => {
  if (event.target.dataset.value === "-99") {
    reset();
  } else if (event.target.dataset.value === "99") {
    save();
  } else {
    password += event.target.dataset.value;
  }
};

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});
