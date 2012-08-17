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

	describe('#placeTile ()', function () {
		it('should place a tile piece on the board', function () {
			var newBoard = new Testfile.Game.createBoard();
			Testfile.Game.placeTile(0,0,Testfile.square.x);
			assert.equal(Testfile.square.x, newBoard[0][0]);
		});
	});

	describe('#newGame ()', function () {
		it('should create a new game board', function () {
			var board = new Testfile.Game.createBoard();
			Testfile.Game.placeTile(0,0,Testfile.square.x);
			Testfile.Game.placeTile(0,1,Testfile.square.x);
			Testfile.Game.placeTile(0,2,Testfile.square.x);
			board = Testfile.Game.newGame();
			assert.notEqual(board[0,0], Testfile.square.x);
			assert.notEqual(board[0,1], Testfile.square.x);
			assert.notEqual(board[0,2], Testfile.square.x);
		});
	});
});


