// selectors
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// The getElementsByTagName() method returns a collection of an elements's child elements with the specified tag name, as a NodeList object.

let tableRow = document.getElementsByTagName('tr');
let tableCell = document.getElementsByTagName('td');
// has to be querySelectorAll here
let tableSlot = document.querySelectorAll('.slot');
let currentPlayer = document.querySelector('.currentPlayer');
const reset = document.querySelector('.reset');

// when we click on a certain slot, we want the table coordinates to be logged

// while i is less than all the cells on the table (42)
for (let i = 0; i < tableCell.length; i++) {
    // add event listener for each cell, click
    // pass a function here, e
    // coordinates tr console.log will give row & column of what was clicked
    tableCell[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
};

// let doesn't work here because of the function scope
// while not player1
while (!player1) {
    var player1 = prompt('Enter name! You are Purple!');
}
let player1Color = 'purple';

// while not player2
while (!player2) {
    var player2 = prompt('Enter name! You are Orange!');
}
let player2Color = 'orange';

let playerGo = 1;
let winner;
currentPlayer.textContent = `${player1}'s turn!`;

// // add event listener to each cell
// //iterate through all the cells
// // when more js is added, make sure that it stays the same color
// Array.prototype.forEach.call(tableCell, (cell) => {
//     cell.addEventListener('click', changeColor);
//     cell.style.backgroundColor = 'whitesmoke';
// })

// // take in an event (e)
// let changeColor = (e) => {
//     let column = e.target.cellIndex;
//     // empty array to push the cell into
//     let row = [];

//     // starting with 5 to check the bottom index first. subtract 1 each time
//     for (let i = 5; i > -1; i--) {
//         // children = each cell of each row
//         if (tableRow[i].children[column].style.backgroundColor == 'whitesmoke') {
//             row.push(tableRow[i].children[column]);
//             if(playerGo === 1) {
//                 row[0].style.backgroundColor = player1Color;
//                 if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) {
//                     currentPlayer.textContent = `${player1} wins!`;
//                     currentPlayer.style.color = player1Color;
//                     return(alert(`${player1} WINS!!!`));
//                 } else if (drawCheck) {
//                     currentPlayer.textContent = `Draw Game...`;
//                     return alert('DRAW!');
//                 }else {
//                     currentPlayer.textContent = `${player2}'s turn!`;
//                     return playerGo = 2;
//                 }
//             } else {
//                 row[0].style.backgroundColor = player2Color;
//                 currentPlayer.textContent = `${player1}'s turn`;
//                 if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) {
//                     currentPlayer.textContent = `${player2} wins!`;
//                     currentPlayer.style.color = player2Color;
//                     return(alert(`${player2} WINS!!!`));
//                 } else if (drawCheck) {
//                     currentPlayer.textContent = `Draw Game...`;
//                     return alert('DRAW!');
//                 }else {
//                     currentPlayer.textContent = `${player1}'s turn!`;
//                     return playerGo = 1;
//             }
//         }
//     }
// }
// }

let changeColor = (e) => {
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];

    for (i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor == 'whitesmoke'){
            row.push(tableRow[i].children[column]);
            if (playerGo === 1){
                row[0].style.backgroundColor = 'purple';
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()){
                    currentPlayer.textContent = `${player1} WINS!!`;
                    currentPlayer.style.color = player1Color;
                    return alert(`${player1} WINS!!`);
                }else if (drawCheck()){
                    currentPlayer.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    currentPlayer.textContent = `${player2}'s turn`
                    return playerGo = 2;
                }
            }else{
                row[0].style.backgroundColor = 'orange';
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()){
                    currentPlayer.textContent = `${player2} WINS!!`;
                    currentPlayer.style.color = player2Color;
                    return alert(`${player2} WINS!!`);
                }else if (drawCheck()){
                    currentPlayer.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    currentPlayer.textContent = `${player1}'s turn`;
                    return playerGo = 1;
                }
                
            }
        }
    }
   
}

Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'whitesmoke';
});


// win state, cannot be white because it's not a color
//comparing four different slots 

let colorMatchCheck = (one, two, three, four) => {
    return(one == two && one === three && one === four && one !== 'whitesmoke');
}

let horizontalCheck = () => {
    for (let row = 0; row < tableRow.length; row++) {
        // less than 4 because you can only win 4 ways on a horizontal check 
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row].children[col+1].style.backgroundColor, tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

let verticalCheck = () => {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor, tableRow[row+2].children[col].style.backgroundColor, tableRow[row+3].children[col].style.backgroundColor)) {
                return true;
            }
        }
    }
}

let diagonalCheck1 = () => {
    for (let col = 0; col < 4; col++) {
        for (row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor, tableRow[row+2].children[col+2].style.backgroundColor, tableRow[row+3].children[col+3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

let diagonalCheck2 = () => {
    for (let col = 0; col < 4; col++) {
        for (row = 5; row > 2; row--) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor, tableRow[row-2].children[col+2].style.backgroundColor, tableRow[row-3].children[col+3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

let drawCheck = () => {
    let fullBoard = [];
    for (let i = 0; i < tableCell.length; i++) {
        if (tableCell[i].style.backgroundColor !== 'whitesmoke') {
            fullBoard.push(tableCell[i]);
        }
    }
    if (fullBoard.length === tableCell.length) {
        return true;
    }
}

reset.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'whitesmoke';
    })
    currentPlayer.style.color = 'black';
    return (playerGo === 1 ? currentPlayer.textContent = `${player1}'s turn` : currentPlayer.textContent = `${player2}'s turn`)
});

