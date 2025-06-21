const userNameInput = document.querySelector("#userName");
const continueButton = document.querySelector("#continue-button");

continueButton.setAttribute("disabled", true);

userNameInput.addEventListener("input", () => {
  const inputErrorMessage = userNameInput.parentElement.querySelector(
    ".input-error-message"
  );
  const inputValue = userNameInput.value.trim(); // Remove trailing or leading spaces
  const inputError =
    inputValue.length === 0
      ? { error: "required" }
      : inputValue.length < 4
      ? { error: "minlength" }
      : null;

  if (inputError) {
    userNameInput.classList.add("input--invalid");
    userNameInput.classList.remove("input--success");
    continueButton.setAttribute("disabled", true);
    if (inputError.error === "required") {
      inputErrorMessage.classList.add("show");
      inputErrorMessage.innerHTML = "User name is required";
    }
    if (inputError.error === "minlength") {
      inputErrorMessage.innerHTML =
        "User name should be at least 4 character long";
    }
    inputErrorMessage.classList.add("show");
  } else {
    userNameInput.classList.remove("input--invalid");
    userNameInput.classList.add("input--success");
    continueButton.removeAttribute("disabled");
    inputErrorMessage.classList.remove("show");
    inputErrorMessage.innerHTML = "";
  }
});
