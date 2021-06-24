import Player from "./Player.js";

const players = [ ];
let currentPlayer = 0; 
const fields = document.querySelectorAll('.board > .field');
const resetButton = document.querySelector(".reset-btn");

const playerOne = new Player("Koen", "X")
const playerTwo = new Player("Pim", "O")

players.push(playerOne, playerTwo);

for (let i = 0; i < fields.length; i++){
    const field = fields[i];
    field.addEventListener("click", function(){
        if (addSymbolToField(field)) {
            let p = document.createElement("p")
            field.append(p)
            p.textContent = players[currentPlayer].symbol;
        }
        if (currentPlayer == 0) {
            currentPlayer = 1
        }
        else {
            currentPlayer = 0
        }
        checkWinner()
    })
    }

resetButton.addEventListener("click", resetGame);

function addSymbolToField(field) {
    const fieldContent = field.textContent;
    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
        return;
    }

    return true;
    }

    function checkWinner() {
     const winnningBox = [   
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let xcounter = 0;
    let ocounter = 0;
    
for (let i = 0; i < winnningBox.length; i++) {
        const winline = winnningBox[i];
        console.log(winline);
        ocounter = 0;
        xcounter = 0;
    for (let j = 0; j < winline.length; j++) {   
        console.log(winnningBox[i][j]);
        const fieldIndex = winline[j]
        console.log(fieldIndex);
        const symbol = fields[fieldIndex].textContent;
        console.log(symbol);
    if(symbol.toLowerCase() === "x") {
        xcounter++;
    }
    else if(symbol.toLowerCase() === "o") {
        ocounter++;
    }
    if(xcounter === 3) {
        alert(playerOne.name + ' has won');
    }
    else if(ocounter === 3) {
        alert(playerTwo.name + ' has won'); 
    }
}
 
}
}  
    function resetGame() {
     location.reload();
}

console.log('File loaded');