function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.firstElementChild;
const createBtnRef = inputRef.nextElementSibling;
const destroyBtnRef = controlsRef.lastElementChild;
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", createBtnClickHandler);
destroyBtnRef.addEventListener("click", destroyBtnClickHandler);

function createBtnClickHandler() {
  createBoxes(inputRef.value);
}

function destroyBtnClickHandler() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxesElementsArray = [];
  let elementsSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxesElement = document.createElement("div");

    boxesElement.style.width = `${elementsSize}px`;
    boxesElement.style.height = `${elementsSize}px`;
    boxesElement.style.backgroundColor = getRandomHexColor();

    boxesElementsArray.push(boxesElement);
    elementsSize += 10;
  }

  boxesRef.append(...boxesElementsArray);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}
