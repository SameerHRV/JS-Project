const lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists){
    list.addEventListener("dragstart", function (e) {
        let select = e.target;

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function (e) { 
            rightBox.appendChild(select);
            select = null;
        })
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function (e) { 
            leftBox.appendChild(select);
            select = null;
        })
    })
}