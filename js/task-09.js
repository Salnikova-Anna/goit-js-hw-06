function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", buttonClickHandler);

function buttonClickHandler(event) {
  const randomColor = getRandomHexColor();

  colorRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
