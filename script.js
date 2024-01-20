let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".new-game");
let winMsg = document.querySelector(".alert-btn")
let newReset = document.querySelector(".reset-game")
let turnO = true;
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 8],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                
                showWinner(pos1val);
                
                let disablebtn = () =>{
                    for(let box of boxes){
                        box.disabled = true;
                    }
                }
                disablebtn();
                resetBtn.addEventListener("click", resetGame);

            }
        }
    
    }
}

let showWinner = function (winner) {
    winMsg.innerHTML = `Congratulations , Winner is ${winner}`
}

let enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}
let rstBoxes= () => {
    for(box of boxes){
        box.innerText = "";
    }
};


let resetGame = () => {
    turnO = true;
    enablebtn();
    rstBoxes();
    winMsg.innerHTML = "";

}

newReset.addEventListener("click", resetGame);




