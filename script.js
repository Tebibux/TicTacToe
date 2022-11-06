(() => {
	var turn = {
		player: 'X',
		computer: 'O'
	}
	// retrieve all the DOM elements
	var clickElement = document.querySelectorAll('.box');
	// game board data
	const gameBoard = [];
	// game board size
	gameBoard.length = (clickElement.length);
	// console.log(clickElement)
	clickElement.forEach((boxes => {
		boxes.addEventListener('click', () => {
			// get the positional value of the boxes(.box)
			// which ranges within the length of clickElement
			let index = Array.prototype.indexOf.call(clickElement, boxes);
			if (boxes.innerText == '') {
				boxes.id = `${turn.player + index}`;
				boxes.innerText = `${turn.player}`;
				gameBoard[index] = boxes.id;
				let comp = computerTurn();
				log(gameBoard, comp);
			}
			else return;
		});
	}));
	function computerTurn() {
		// checks if the array is not full
		if (gameBoard.includes(undefined)) {
			let index = Math.floor((Math.random() * 9));
			// the array has no null element
			if (!gameBoard.some(elem => elem === null)) {
				// check if the index is empty
				if (gameBoard[index] != null) {
					computerTurn();// recursively check and call the function
				}
				else {
					// if (gameBoardFull) return;
					{
						// if the spot is free do this
						let compPlayPosition = clickElement[index];
						compPlayPosition.id = `${turn.computer + index}`
						gameBoard[index] = compPlayPosition.id;
						compPlayPosition.innerText = `${turn.computer}`;
						return index;
					}

				}
			}
		}
		else return;
		// end of check index is empty
	};
	// check and compare with the wining case.
	// win case
	var winCase = {
		horizontal: [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8]
		],
		vertical: [
			[0, 3, 6],
			[1, 4, 7],
			[2, 3, 8]
		],
		diagonal: [
			[0, 4, 8],
			[2, 4, 6]
		]
	};
	var check = function () {
		let horizontal = winCase['horizontal'];
		let vertical = winCase['vertical'];
		let diagonal = winCase['diagonal'];
		let boardData = {
			horTop: {

			}
		}

	}
	function log(result, comp) {
		console.log(result);
		console.log(comp);
		let diagonal = winCase['diagonal'];
	}
})();