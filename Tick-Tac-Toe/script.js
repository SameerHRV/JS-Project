let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let newGameBtn = document.querySelector(".newGame")
let 

let turnO = true;

const winnings = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]
boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
      if(turnO){
        box.innerHTML = "O"
        turnO = false;
      }else{
        box.innerHTML = "X"
        turnO = true;
      }
      box.disabled = true;

      checkWin();
  })
})

const checkWin = ()=>{
  for(pattern of winnings){
      let pos1Val = boxes[pattern [0]].innerHTML
      let pos2Val = boxes[pattern [1]].innerHTML
      let pos3Val = boxes[pattern [2]].innerHTML

      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
          
      }
    }
  }
}
