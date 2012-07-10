// tic tac toe
// holds game logic
var TicTacToe = {};

TicTacToe.square = {
	x: 'X',
	o: 'O',
	none: ''
};

TicTacToe.game = (function () {
	var board = [];

	return {
		createBoard: function () {
			for (var i = 0; i < 3; i++) {
				board[i] = new Array(3);
				for (var j = 0; j < 3; j++) {
					board[i][j] = TicTacToe.square.none;
				}
			}
		},
		placeTile: function(x, y, tile) {
			board[x][y] = tile;
		},
		getBoard: function() {
			return board;
		},
		checkWinner: function() {

		}
	};
})();