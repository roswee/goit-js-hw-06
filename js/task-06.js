const input = document.querySelector("#validation-input");
const expectedLength = input.dataset.length;

const handleEvent = () => {
if (input.value.length != expectedLength) {
input.classList.add("invalid"),
input.classList.remove("valid")
}
else {input.classList.add("valid"),
input.classList.remove("invalid")
}
};
input.addEventListener("blur", handleEvent)