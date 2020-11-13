const fileInput = document.querySelector(".file-input");
const fileDescriptionBox = document.querySelector(".file-description");
const fileNameSpan = document.querySelector(".file-name");
const fileTypeSpan = document.querySelector(".file-type");
const fileSizeSpan = document.querySelector(".file-size");
const buttonsContainer = document.querySelector(".buttons-container");
const fileAttachButton = document.querySelector(".file-attach");
const fileRemoveButton = document.querySelector(".file-remove");

const pickFile = () => {
  if (fileInput.files[0]) {
    const { name: fullName, size } = fileInput.files[0];

    const name = fullName.slice(0, fullName.lastIndexOf("."));
    const type = fullName.slice(fullName.lastIndexOf(".") + 1, fullName.length);
    const shortSize = `${(size / (1024 * 1024)).toFixed(2)}MB`;

    fileDescriptionBox.classList.remove("hidden");
    buttonsContainer.classList.remove("hidden");

    fileNameSpan.innerHTML = name;
    fileTypeSpan.innerHTML = type;
    fileSizeSpan.innerHTML = shortSize;
  } else {
    fileDescriptionBox.classList.add("hidden");
    buttonsContainer.classList.add("hidden");
  }
};
const removeFile = () => {
  fileInput.value = "";
  pickFile();
};
const attachFile = () => {
  alert("wysłano plik");
};

fileInput.addEventListener("change", pickFile);
fileAttachButton.addEventListener("click", attachFile);
fileRemoveButton.addEventListener("click", removeFile);
