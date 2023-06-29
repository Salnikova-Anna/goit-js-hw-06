let counterValue = 0;

const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");

buttonDecrementRef.addEventListener("click", btnDecremClickHandler);
buttonIncrementRef.addEventListener("click", btnIncremClickHandler);

function btnDecremClickHandler(event) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function btnIncremClickHandler(event) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
