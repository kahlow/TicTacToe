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
				return true;
			}
			else{
				return false;
			}
		},
		newGame: function () {
			return TicTacToe.Game.createBoard();
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

			for (var i = 2; i >= 0; i--){
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

		},
		whoseTurn: function () {
			var xCount = 0,
				oCount = 0;

			for (var i = 0; i < 3; i++){
				for (var j = 0; j < 3; j++) {
					switch (board[i][j]){
						case TicTacToe.square.x:
							xCount++;
							break;
						case TicTacToe.square.o:
							oCount++;
							break;
					}
				}
			}

			if (xCount > oCount){
				return TicTacToe.square.o;
			}
			else if (xCount < oCount) {
				return TicTacToe.square.x;
			}
			else {
				return TicTacToe.square.x;
			}
		}
	};
}();

module.exports = TicTacToe;