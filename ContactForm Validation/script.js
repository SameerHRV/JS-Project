const nameError = document.getElementById("name-error")
const phoneError = document.getElementById("phone-error")
const emailError = document.getElementById("email-error")
const msgError = document.getElementById("error-message")
const submitError = document.getElementById("submit-message")

const valiadetName = () => {
    let name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = "valid";
    return true
}
