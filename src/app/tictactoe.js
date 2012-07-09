// tic tac toe
// holds game logic
var square = {
	x: 'X',
	o: 'O',
	none: ''
};

var board = [];

var game = {
	createBoard: function() {
		for (var i = 0; i < 2; i++) {
			board[i] = new Array(2);
			for (var j = 0; j < 2; j++) {
				board[i][j] = square.none;
			}
		}
	},
	placeTile: function(x, y, tile) {
		board[x][y] = tile;
	},
	getBoard = function(){
		return board;
	},
 };
