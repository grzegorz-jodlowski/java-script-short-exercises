import "./style.css";

const CAT_API_URL = "https://cataas.com/cat?";
const CAT_MAX_NUMBER = 10;

const topCatImage = document.querySelector(".top-cat-image");
const topCatNumber = document.querySelector(".top-cat-number");
const bottomCatImage = document.querySelector(".bottom-cat-image");
const bottomCatNumber = document.querySelector(".bottom-cat-number");
const container = document.querySelector(".cats-container");
const title = document.querySelector(".cats-title");
const replayButton = document.querySelector(".buttons");

const cuteButtons = document.querySelectorAll(".cute-button");

let showedCats = [];

const createRandomIndex = () => {
  let catIndex = Math.floor(Math.random() * CAT_MAX_NUMBER + 1);

  if (showedCats.length === CAT_MAX_NUMBER) {
    container.classList.add("hidden");
    title.innerHTML = "Nie ma więcej kotów!";
    replayButton.classList.remove("hidden");
    return;
  } else {
    while (showedCats.includes(catIndex)) {
      catIndex = Math.floor(Math.random() * CAT_MAX_NUMBER + 1);
    }
  }
  showedCats.push(catIndex);

  return catIndex;
};

const voteForCat = event => {
  event.preventDefault();
  const { id } = event.target.dataset;

  const index = createRandomIndex();
  const url = `${CAT_API_URL}${index}`;

  if (id === "top" && index) {
    bottomCatNumber.innerHTML = index;
    bottomCatImage.setAttribute("src", url);
  } else if (id === "bottom" && index) {
    topCatNumber.innerHTML = index;
    topCatImage.setAttribute("src", url);
  }
};

const replay = () => {
  showedCats = [];
  replayButton.classList.add("hidden");
  container.classList.remove("hidden");
  title.innerHTML = "Ktory kot?";
};

cuteButtons.forEach(button => button.addEventListener("click", voteForCat));
replayButton.addEventListener("click", replay);
