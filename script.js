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
			boxes.id = `${turn.player + index}`;
			boxes.innerText = `${turn.player}`;
			gameBoard[index] = boxes.id;
			let comp = computerTurn();
			log(gameBoard, comp);
		});
	}));
	function computerTurn() {
		let index = Math.floor((Math.random() * 9));
		// check if the index is empty
		if (gameBoard[index] ==  null || gameBoard[index] !== undefined) {
			// if the spot is free do this
			let compPlayPosition = clickElement[index];
			compPlayPosition.id = `${turn.computer + index}`
			gameBoard[index] = compPlayPosition.id;
			compPlayPosition.innerText = `${turn.computer}`;
			return index;
		}
		else{
			computerTurn();// recursively check and call the function
		}

		// end of check index is empty


	}
	function checker(){
		
	}
	function log(result, comp) {
		console.log(result);
		console.log(comp);
	}
}();