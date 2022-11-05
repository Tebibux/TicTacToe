var game = function () {
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


	}
	var check = {

		horizontal: function (){

		},
		vertical: function (){

		},
		diagonal: function (){
			
		}
	}
	function log(result, comp) {
		console.log(result);
		console.log(comp)
	}
}();