const signupForm = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const eMail = document.querySelector("#email");
const password = document.querySelector("#password");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const successMsg = document.querySelector("#success-message")


function submitForm(event){
    event.preventDefault();
    let isValid = true;

    if (firstName.value === ""){
        firstNameError.textContent = "First Name cannot be empty";
        firstName.parentElement.classList.add("input-error");
        isValid = false;
    }
    else {
        firstNameError.textContent = "";
        firstName.parentElement.classList.remove("input-error");
    }

    if (lastName.value === ""){
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.parentElement.classList.add("input-error");
        isValid = false;
    }
    else {
        lastNameError.textContent = "";
        lastName.parentElement.classList.remove("input-error");
    }

    if (eMail.value === ""){
        emailError.textContent = "Email cannot be empty";
        eMail.parentElement.classList.add("input-error");
        isValid = false;
    }
    else if (!/.+@.+\..+/.test(eMail.value)){
        emailError.textContent ="Looks like this is not an email";
        eMail.parentElement.classList.add("input-error");
        isValid = false;
    }
    else {
        emailError.textContent = "";
        eMail.parentElement.classList.remove("input-error");
    }

    if (password.value === ""){
        passwordError.textContent = "Password cannot be empty";
        password.parentElement.classList.add("input-error");
        isValid = false;
    }
    else {
        passwordError.textContent = "";
        password.parentElement.classList.remove("input-error");
    }

    if (isValid === true){
        successMsg.textContent = "You successfully claim your free trial!"
        successMsg.classList.add("show");
        signupForm.reset();
    }

}

signupForm.addEventListener("submit", submitForm)