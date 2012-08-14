var assert = require("assert");
var Testfile = require("../src/app/tictactoe.js");

describe('TicTacToe', function () {
	describe('#game ()', function () {
		it('should not be null', function () {
			var newBoard = new Testfile.Game.createBoard();
			assert.notEqual(newBoard, null);
		});
	});

	describe('#createBoard ()', function () {
		it('should be a 3x3 board', function () {
			var newBoard = new Testfile.Game.createBoard();
			for (var i = 0; i < 3; i++){
				for (var j = 0; j < 3; j++){
					assert.equal('', newBoard[i][j]);
				}
			}
		});
	});
});


