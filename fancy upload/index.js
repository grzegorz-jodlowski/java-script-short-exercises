const previewButton = document.querySelector(".preview-button");
const nextButton = document.querySelector(".next-button");

const progressItems = document.querySelectorAll(".item");

const disabledButtonOpacity = "opacity-50";
const disabledButtonCursor = "cursor-not-allowed";

const filledCircle = `
  <div class="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
		<span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i></span>
	</div>`;
const filledDash = fill => `
  <div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
    <div class="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: ${fill}%"></div>
  </div>`;
const emptyCircle = step => `
	<div class="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
	<span class="text-grey-darker text-center w-full">${step}</span>
  </div>`;

const emptyDash = `
  <div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
    <div class="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 0%"></div>
  </div>`;

let step = 1;

const updateStep = step => {
  previewButton.classList.remove(disabledButtonOpacity);
  previewButton.classList.remove(disabledButtonCursor);
  nextButton.classList.remove(disabledButtonOpacity);
  nextButton.classList.remove(disabledButtonCursor);
  previewButton.removeAttribute("disabled");
  nextButton.removeAttribute("disabled");

  if (step <= 1) {
    previewButton.classList.add(disabledButtonOpacity);
    previewButton.classList.add(disabledButtonCursor);
    previewButton.setAttribute("disabled", true);
  }
  if (step >= 4) {
    nextButton.classList.add(disabledButtonOpacity);
    nextButton.classList.add(disabledButtonCursor);
    nextButton.setAttribute("disabled", true);
  }

  progressItems.forEach(item => {
    let { id, type } = item.dataset;
    id = parseInt(id);
    item.innerHTML = type === "circle" ? emptyCircle(id) : emptyDash;

    if (id <= step && type === "circle") {
      item.innerHTML = filledCircle;
      item.classList.add = "animation";
    } else if (id < step && type === "dash") {
      item.innerHTML = filledDash(100);
    } else if (id === step && type === "dash") {
      item.innerHTML = filledDash(50);
    }
  });
};

const changeStep = event => {
  const id = event.target.dataset.id;
  if (id === "-") {
    --step;
  } else if (id === "+") {
    ++step;
  }
  updateStep(step);
};

previewButton.addEventListener("click", changeStep);
nextButton.addEventListener("click", changeStep);

updateStep(step);
