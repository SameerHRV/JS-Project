const emailField = document.getElementById("email-field");
const emailLable = document.getElementById("email-lable");
const emailError = document.getElementById("email-error");

const validateEmail = () => {
    emailLable.style.bottom = "45px"

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please Enter a valid Email";
        emailField.style.borderBottomColor = "red";
        emailError.style.top = "120%";
        return false;
    }

    emailError.innerHTML = "";
    emailField.style.borderBottomColor = "green";
    emailError.style.top = "100%";
    return true;
}