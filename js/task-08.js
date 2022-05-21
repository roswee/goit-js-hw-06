const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    if (email.value === "" || password.value === ""){
        alert("Please fill all poles")
    };
    
     console.log(`Email: ${email.value}, password: ${password.value}`)
    event.currentTarget.reset()
}