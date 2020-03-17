// selectors
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// The getElementsByTagName() method returns a collection of an elements's child elements with the specified tag name, as a NodeList object.

let tableRow = document.getElementsByTagName('tr');
let tableCell = document.getElementsByTagName('td');
let tableSlot = document.querySelector('.slot');
const currentPlayer = document.querySelector('.currentPlayer');
const reset = document.querySelector('.reset');

// when we click on a certain slot, we want the table coordinates to be logged

// while i is less than all the cells on the table (42)
for (let i = 0; i < tableCell.length; i++) {
    // add event listener for each cell, click
    // pass a function here, e
    // coordinates tr console.log will give row & column of what was clicked
    tableCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}`, `${e.target.cellIndex}`);
    })
}

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
currentPlayer.textContent = `${player1}'s turn!`;

// take in an event (e)
let changeColor = (e) => {
    let column = e.target.cellIndex;
    // empty array to push the cell into
    let row = [];

// add event listener to each cell
//iterate through all the cells
// when more js is added, make sure that it stays the same color
Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'whitesmoke';
})

    // starting with 5 to check the bottom index first. subtract 1 each time
    for (let i = 5; i > -1; i--) {
        // children = each cell of each row
        if (tableRow[i].children[column].style.backgroundColor == 'whitesmoke') {
            row.push(tableRow[i].children[column]);
            if(currentPlayer === 1) {
                row[0].style.backgroundColor = player1Color;
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) {
                    currentPlayer.textContent = `${player1} wins!`;
                    currentPlayer.style.color = player1Color;
                    return(alert(`${player1} WINS!!!`));
                } else if (drawCheck) {
                    currentPlayer.textContent = `Draw Game...`;
                    return alert('DRAW!');
                }else {
                    currentPlayer.textContent = `${player2}'s turn!`;
                    return currentPlayer = 2;
                }
            } else {
                row[0].style.backgroundColor = player2Color;
                currentPlayer.textContent = `${player1}'s turn`;
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) {
                    currentPlayer.textContent = `${player2} wins!`;
                    currentPlayer.style.color = player2Color;
                    return(alert(`${player2} WINS!!!`));
                } else if (drawCheck) {
                    currentPlayer.textContent = `Draw Game...`;
                    return alert('DRAW!');
                }else {
                    currentPlayer.textContent = `${player1}'s turn!`;
                    return currentPlayer = 1;
            }
        }
    }
}

reset.addEventListener('click', () => {
    tableSlot.forEach(slot => {
        slot.style.backgroundColor = 'whitesmoke';
    });
    playerGo.style.backgroundColor = 'black';
    return (currentPlayer === 1 ? playerGo.textContent = `${player1}'s turn` : playerGo.textContent = `${player2}'s turn`);
})
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
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor, tableRow[row+2].children[col].style.backgroundColor, tableRow[row+3].children[col].style.backgroundColor,)) {
                return true;
            }
        }
    }
}

let diagonalCheck1 = () => {
    for (let col = 0; col < 4; col++) {
        for (row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor, tableRow[row+2].children[col+2].style.backgroundColor, tableRow[row+3].children[col+3].style.backgroundColor,)) {
                return true;
            }
        }
    }
}

let diagonalCheck2 = () => {
    for (let col = 0; col < 4; col++) {
        for (row = 5; row > 2; row--) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor, tableRow[row-2].children[col+2].style.backgroundColor, tableRow[row-3].children[col+3].style.backgroundColor,)) {
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

// different method
// // Strict Mode(“use strict”) helps identify common issues (or “bad” parts) and also helps with “securing” JavaScript. In ES5, the Strict Mode is optional but in ES6, it’s needed for many ES6 features. So most people and tools like babel automatically add “use strict” at the top of the file putting the whole JS code in strict mode and forcing us to write better JavaScript.

// "use strict";

// // colors
// const COLOR_BACKGROUND = "aliceblue";

// // set up canvas & context
// // The HTML5 Canvas element is an HTML tag similar to the <div>, <a>, or <table> tag, with the exception that its contents are rendered with JavaScript.  In order to leverage the HTML5 Canvas, we'll need to place the canvas tag somewhere inside the HTML document, access the canvas tag with JavaScript, create a context, and then utilize the HTML5 Canvas API to draw visualizations.

// // When using canvas, it's important to understand the difference between the canvas element and the canvas context, as often times people get these confused.  The canvas element is the actual DOM node that's embedded in the HTML page.  The canvas context is an object with properties and methods that you can use to render graphics inside the canvas element.  The context can be 2d or webgl (3d).

// // Each canvas element can only have one context.  If we use the getContext() method multiple times, it will return a reference to the same context object.

// // setting up the canvas (canv) and context (ctx)

// let canv = document.createElement('canvas'); // has to be added to the body
// document.body.appendChild(canv); 
// let ctx = canv.getContext('2d') //2d is needed here 

// //dimensions of the canvas (game)
// let height, width;

// /* set it dynamically*/ setDimensions();

// // event listener for when the window is resized
// window.addEventListener('resize', setDimensions);

// // in order for it to work, needs a game loop
// let timeDelta, timeLast; //difference between frames and the last frame time
// requestAnimationFrame(loop);

// let loop = (timeNow) /*parameter of the current time*/ => {
//     // initialize the last time (timeLast)
//     if (!timeLast) {
//         timeLast = timeNow; //it will only run once
//     }
//     //calculate time difference
//     timeDelta = (timeNow - timeLast) / 1000; // to convert to seconds 
//     timeLast = timeNow;

//     //update

//     //draw
//     drawBackground();

//     //call next frame
//     requestAnimationFrame(loop);
// } 

// let createGrid = () => {

// }

// let drawBackground = () => {
//     ctx.fillStyle = COLOR_BACKGROUND;
//     ctx.fillRect = (0, 0, width, height); // creating a rectangle with x & y set to 0 also set to the width and the height of the canvas
// };

// let newGame = () => {
//     createGrid();
// }

// let setDimensions = () => {
//     height = window.innerHeight;
//     width = window.innerWidth;
//     canv.height = height;
//     canv.width = width; 
//     newGame();
// }

// another method
// // Winning vertically
// wins[0]  = new Array(0, 7,  14, 21, 28, 35);
// wins[1]  = new Array(1, 8,  15, 22, 29, 36);
// wins[2]  = new Array(2, 9,  16, 23, 30, 37);
// wins[3]  = new Array(3, 10, 17, 24, 31, 38);
// wins[4]  = new Array(4, 11, 18, 25, 32, 39);
// wins[5]  = new Array(5, 12, 19, 26, 33, 40);
// wins[6]  = new Array(6, 13, 20, 27, 34, 41);
// // Winning horizontally
// wins[7]  = new Array(0,   1,  2,  3,  4,  5,  6);
// wins[8]  = new Array(7,   8,  9, 10, 11, 12, 13);
// wins[9]  = new Array(14, 15, 16, 17, 18, 19, 20);
// wins[10] = new Array(21, 22, 23, 24, 25, 26, 27);
// wins[11] = new Array(28, 29, 30, 31, 32, 33, 34);
// wins[12] = new Array(35, 36, 37, 38, 39, 40, 41);
// // Winning diagonally, left to right
// wins[13] = new Array(14, 22, 30, 38);
// wins[14] = new Array(7, 15, 23, 31, 39);
// wins[15] = new Array(0, 8, 16, 24, 32, 40);
// wins[16] = new Array(1, 9, 17, 25, 33, 41);
// wins[17] = new Array(2, 10, 18, 26, 34);
// wins[18] = new Array(3, 11, 19, 27);
// //Winning diagonally, right to left
// wins[19] = new Array(20, 26, 32, 38);
// wins[20] = new Array(13, 19, 25, 31, 37);
// wins[21] = new Array(6,  12, 18, 24, 30, 36);
// wins[22] = new Array(5,  11, 17, 23, 29, 35);
// wins[23] = new Array(4,  10, 16, 22, 28);
// wins[24] = new Array(3,   9, 15, 21);