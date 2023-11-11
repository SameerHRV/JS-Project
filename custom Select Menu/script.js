let selectField = document.getElementById("selectField")


let selectText = document.getElementById("text")
let options = document.getElementsByClassName("options")

let list = document.getElementById("list")


selectField.onclick = function() {
    list.classList.toggle("hide")
}


for (option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide");
    }
}
