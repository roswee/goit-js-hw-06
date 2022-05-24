const span = document.querySelector("#name-output");
const inputValue = document.querySelector("#name-input");


const eHandler = () => {
  if (inputValue.value === "") {
    span.textContent = `Anonymous`
  }
else {
      span.textContent = event.currentTarget.value;
    }};
inputValue.addEventListener("input", eHandler)