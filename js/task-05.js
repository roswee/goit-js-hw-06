const span = document.querySelector("#name-output");
const inputValue = document.querySelector("#name-input");

if (inputValue != null) {
    inputValue.addEventListener("input", (event) => {
        span.textContent = event.currentTarget.value;
      });
}