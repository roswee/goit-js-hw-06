function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body")

const widget = document.querySelector(".widget");
widget.addEventListener("click", background);

function background() {
  body.style.backgroundColor = getRandomHexColor();
}