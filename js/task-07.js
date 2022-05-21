const selector = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

selector.addEventListener("change", () => {
    textToChange.style.fontSize = `${selector.value}px`;
})