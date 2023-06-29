const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", inputBlurHandler);

function inputBlurHandler({ currentTarget }) {
  if (
    currentTarget.value.length === Number(currentTarget.dataset.length) &&
    inputRef.classList.length === 0
  ) {
    inputRef.classList.add("valid");
  } else if (
    currentTarget.value.length === Number(currentTarget.dataset.length) &&
    inputRef.classList.contains("invalid")
  ) {
    inputRef.classList.replace("invalid", "valid");
  } else if (
    currentTarget.value.length !== Number(currentTarget.dataset.length) &&
    inputRef.classList.length === 0
  ) {
    inputRef.classList.add("invalid");
  } else if (
    currentTarget.value.length !== Number(currentTarget.dataset.length) &&
    inputRef.classList.contains("valid")
  ) {
    inputRef.classList.replace("valid", "invalid");
  }
}
