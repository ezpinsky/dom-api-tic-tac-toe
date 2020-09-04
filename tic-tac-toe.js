window.addEventListener("DOMContentLoaded", (event) => {
  const currentGrid = ["", "", "", "", "", "", "", "",""];

  const playerClicks = () => {
		let clickCount = 0;
		const grid = document.getElementById("tic-tac-toe-board");
		const squares = grid.querySelectorAll("div");
		squares.forEach((square) => {
			square.addEventListener("click", (event) => {
				if (clickCount % 2 === 0 && square.innerHTML === "") {
					console.log(square.innerHTML);
					//use X picture
					square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg" id="x-${clickCount}">`;
          square.classList.add("x");
          let squareNum = (square.id[7])
          currentGrid[squareNum] = "x"

          clickCount++;
				} else if (clickCount % 2 !== 0 && square.innerHTML === "") {
					console.log(square.innerHTML);
					//use O picture
					square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg" id="x-${clickCount}">`;
          square.classList.add("o");
          let squareNum = (square.id[7])
          currentGrid[squareNum] = "o"

          clickCount++;
				}
			});
    });

  };


	playerClicks();
});
