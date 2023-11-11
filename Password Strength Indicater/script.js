const pass = document.getElementById("password");
const massage = document.getElementById("msg");
const str = document.getElementById("strength");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        massage.style.display = "block";
    } else {
        massage.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        massage.style.color = "#ff5925";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        massage.style.color = "yellow";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        massage.style.color = "green";
    }
})