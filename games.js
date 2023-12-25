let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let tex=document.querySelector(".message");
let newgame=document.querySelector(".newgame");
let restart=document.querySelector(".reset")

let turn=true;
let count=0;

const win=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

const reset=()=>{
  count=0;
  turn=true;
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
    tex.classList.add("hide")
  }
}

const disable=()=>{
  for(box of boxes) {
    box.disabled=true;
  }
};

const playerwon=(val) =>{
  msg.innerText=`conragulation player ${val} won the game`;
  tex.classList.remove("hide");
  disable();
}

const drawgame=() =>{
  msg.innerText=`game is draw`;
  tex.classList.remove("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      
      box.innerText = "O";
      turn = false;
    } else {
      
      box.innerText = "X";
      turn = true;
      }
      box.disabled=true;
      count++;
      winner();
      if(count==9){
        drawgame();
      }
    });
  });
  
const winner=()=>{
  for (let pattern of win) {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
      if (pos1==pos2&&pos2==pos3) {
        playerwon(pos1);
      } 
    }
  }
}

newgame.addEventListener("click",reset);
restart.addEventListener("click",reset);
