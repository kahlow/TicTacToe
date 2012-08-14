// tic tac toe
// holds game logic
var TicTacToe = {};

TicTacToe.square = {
	x: 'X',
	o: 'O',
	none: ''
};

TicTacToe.Game = function () {
	var board = [];

	return {
		createBoard: function () {
			for (var i = 0; i < 3; i++) {
				board[i] = new Array(3);
				for (var j = 0; j < 3; j++) {
					board[i][j] = TicTacToe.square.none;
				}
			}

			return board;
		},
		placeTile: function(x, y, tile) {
			if (board[x][y] == TicTacToe.square.none) {
				board[x][y] = tile;
			}
			else{
				return "NOPE";
			}
		},
		newGame: function () {
			TicTacToe.game.createBoard();
		},
		getBoard: function () {
			return board;
		},
		checkWinner: function () {
			var count = 0;

			for (var i = 0; i < 3; i++){
				for (var j = 0; j < 3; j++){
					if (board[j][i] == TicTacToe.square.x){
						count++;
					}
					else if (board[j][i] == TicTacToe.square.o){
						count--;
					}
				}

				if (count == 3){
					return 'X';
				}
				else if (count == -3){
					return 'O';
				}

				count = 0;

				for (var j = 0; j < 3; j++){
					if (board[i][j] == TicTacToe.square.x){
						count++;
					}
					else if (board[i][j] == TicTacToe.square.y){
						count--;
					}
				}

				count = 0;
			}

			count = 0;

			for (var i = 0; i < 3; i++){
				if (board[i][i] == TicTacToe.square.x){
					count++;
				}
				else if (board[i][i] == TicTacToe.square.o){
					count--;
				}
			}

			if (count == 3){
				return 'X';
			}
			else if (count == -3){
				return 'O';
			}

			count = 0;

			for (var i = 3; i > 0; i--){
				if (board[i][i] == TicTacToe.square.x){
					count++;
				}
				else if (board[i][i] == TicTacToe.square.o){
					count--;
				}
			}

			if (count == 3){
				return 'X';
			}
			else if (count == -3){
				return 'O';
			}
		}
	};
}();

module.exports = TicTacToe;