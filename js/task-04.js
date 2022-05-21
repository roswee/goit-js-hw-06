const counterValue = document.querySelector("#value");

let counter = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
function increment() {counter = counter + 1; counterValue.innerHTML = counter;};
function decrement() {counter = counter - 1; counterValue.innerHTML = counter;};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);