var count = 0;


const winMaps = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

let xSquares = [];
let oSquares = [];

var xPattern = [];
var oPattern = [];

function makeXPattern() {
    xPattern = [];

    if (xSquares.length >= 3) {
        xSquares = xSquares.sort();

        for (var i = 0; i < xSquares.length - 2; i++) {
            xPattern.push([xSquares[i], xSquares[i + 1], xSquares[i + 2]])
        }

    }

}


function makeOPattern() {
    oPattern = [];

    if (oSquares.length >= 3) {

        oSquares = oSquares.sort();

        for (var i = 0; i < oSquares.length - 2; i++) {
            oPattern.push([oSquares[i], oSquares[i + 1], oSquares[i + 2]])
        }
    }

}


function checkX() {

    xPattern.forEach((xWinPattern) => {
        let currentXWinPattern = parseInt(xWinPattern.join(""), 10);

        winMaps.forEach((winPattern) => {
            let winXPattern = parseInt(winPattern.join(""), 10);

            if (currentXWinPattern == winXPattern) {
                console.log("Winner: Player1");
                showGameStatus("Winner: Player 1")
            }

        })
    })

}

function checkO() {

    oPattern.forEach((oWinPattern) => {
        let currentOWinPattern = parseInt(oWinPattern.join(""), 10);

        winMaps.forEach((winPattern) => {
            let winOPattern = parseInt(winPattern.join(""), 10);

            if (currentOWinPattern == winOPattern) {
                console.log("Winner: Player 2")
                showGameStatus("Winner: Player 2")
            }
        })
    })

}


function player1(squareNumber) {
    xSquares.push(squareNumber)
    makeXPattern()
    checkX()
    return ["x", "Player 2"]
}

function player2(squareNumber) {
    oSquares.push(squareNumber)
    makeOPattern()
    checkO()
    return ["o", "Player 1"]
}

function turn(squareNumber) {

    count += 1;
    let [buttonText, nextTurn] = [];

    if (count % 2 == 0) {
        [buttonText, nextTurn] = player2(squareNumber);
    } else {
        [buttonText, nextTurn] = player1(squareNumber);
    }

    document.getElementById("turn").textContent = nextTurn;
    return buttonText;

}


function process(e) {

    const buttonText = turn(e.id);
    e.innerText = buttonText;
    e.setAttribute("class", buttonText)
    e.disabled = true;

}

function playNewGame() {
    document.getElementById("playNewGame").classList.replace("show", "hide")

    count = 0;
    xSquares = [];
    oSquares = [];

    xPattern = [];
    oPattern = [];

    for (var i = 1; i < 10; i++) {
        var btn = document.getElementById(i);
        btn.innerText = "";
        btn.disabled = false;
        btn.classList = []
        document.getElementById("turn").textContent = "Player 1";
        document.getElementById("winner").innerText = ""
    }
}

function showGameStatus(status) {
    let gameStatus = document.getElementById("gameStatus");
    gameStatus.showModal();

    document.getElementById("winner").innerText = status;
}

function closeGameStatus() {
    let gameStatus = document.getElementById("gameStatus");
    gameStatus.close();
    playNewGame();
}

function cancelClosingGame() {
    playNewGame();
}