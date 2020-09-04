const squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = "";
let currentPlayerSymbol = "x";

const checkGameStatus = () => {
	if (rowCheck()) {
    gameStatus = currentPlayerSymbol.toUpperCase();
    console.log("rowcheck is bad")

	} else if (columnCheck()) {
    gameStatus = currentPlayerSymbol.toUpperCase();
    console.log("column is bad")
	} else if (diagonalCheck()) {
    gameStatus = currentPlayerSymbol.toUpperCase();
    console.log("diagonal is bad")
	} else if (squareValues.every((square) => square !== "")) {
    gameStatus = "None";
    console.log("tie is bad")
	}
	if (gameStatus !== "") {
		document.getElementById("game-status").innerHTML = `Winner: ${gameStatus}`;
	}
};

function rowCheck() {
	for (let i = 0; i < 8; i + 3) {
		if (
			squareValues[i][0] === squareValues[i][1] &&
			squareValues[i][1] === squareValues[i][2]
		) {
			return true;
		}
	}
	return false;
}

function columnCheck() {
	for (let i = 0; i < 3; i++) {
		if (squareValues[i] === squareValues[i + 3] && squareValues[i] === squareValues[i + 6]) {
			return true;
		}
	}
	return false;
}

function diagonalCheck() {
	if (squareValues[0] === squareValues[4] && squareValues[0] === squareValues[8]) {
		return true;
	} else if (squareValues[2] === squareValues[4] && squareValues[2] === squareValues[6]) {
		return true;
	} else {
		return false;
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
	// let currentPlayerSymbol = "x";
	const grid = document.getElementById("tic-tac-toe-board");
	const squares = grid.querySelectorAll("div");
	squares.forEach((square) => {
		square.addEventListener("click", (event) => {
			// if (gameStatus !== "") return;
			if (currentPlayerSymbol !== "o" && square.innerHTML === "") {
				//use X picture
				square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg">`;
				square.classList.add(currentPlayerSymbol);
				let squareNum = square.id[7];
				squareValues[squareNum] = currentPlayerSymbol;
				currentPlayerSymbol = "o";
			} else if (square.innerHTML === "") {
				//use O picture
				square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg">`;
				square.classList.add(currentPlayerSymbol);
				let squareNum = square.id[7];
				squareValues[squareNum] = currentPlayerSymbol;
				currentPlayerSymbol = "x";
			}
			// checkGameStatus();
		});
	});
});
