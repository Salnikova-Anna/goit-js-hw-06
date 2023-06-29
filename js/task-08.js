const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", loginFormSubmitHandler);

function loginFormSubmitHandler(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля форми повинні бути заповнені");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    event.currentTarget.reset();
  }
}
