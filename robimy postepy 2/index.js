class ProgressMenu {
  constructor() {
    this.bubbles = document.querySelectorAll(".progress-bubble");
    this.progressNumber = document.querySelectorAll(".progress-number");
    this.bars = document.querySelectorAll(".progress-bar");
    this.prevBtn = document.querySelector(".prev-btn");
    this.nextBtn = document.querySelector(".next-btn");
    this.currentProgress = 0;
  }

  colorBars = (direction) => {
    if (direction === "progressive") {
      const bar = this.bars[this.currentProgress - 1];
      bar.classList.remove("uncolored-bar");
      bar.classList.add("colored-bar");
      bar.style.width = "100%";
    }
    else if (direction === "regressive") {
      const bar = this.bars[this.currentProgress];
      bar.classList.replace("colored-bar", "uncolored-bar");
      bar.style.width = "0%";
    }
  };

  colorBubbles = () => {
    this.bubbles.forEach((bubble, index) => {
      if (index <= this.currentProgress) {
        bubble.classList.add("bg-green");
        this.progressNumber[index].classList.remove("text-grey-darker");
      } else {
        bubble.classList.remove("bg-green");
        this.progressNumber[index].classList.add("text-grey-darker");
      }
    });
  };

  handleChangeButtons = () => {
    if (this.currentProgress >= this.bubbles.length - 1) {
      this.nextBtn.classList.add("disabled");
    } else {
      this.nextBtn.classList.remove("disabled");
    }
    if (this.currentProgress <= 0) {
      this.prevBtn.classList.add("disabled");
    } else {
      this.prevBtn.classList.remove("disabled");
    }
  };

  changeProgress = (e) => {
    if (e.target === this.prevBtn) {
      this.currentProgress--;
      this.colorBars("regressive");
    } else if (e.target === this.nextBtn) {
      this.currentProgress++;
      this.colorBars("progressive");
    }

    this.handleChangeButtons();
    this.colorBubbles();
  };
}

const progressMenu = new ProgressMenu();
progressMenu.colorBubbles();
progressMenu.handleChangeButtons();

document
  .querySelectorAll(".menu-btn")
  .forEach((el) => el.addEventListener("click", progressMenu.changeProgress));
