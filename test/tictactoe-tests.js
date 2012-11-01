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

	describe('#getBoard ()', function () {
		it('should return the current game board', function (){
			var board = new Testfile.Game.createBoard();
			board[0][0] = Testfile.square.x;
			var sameBoard = Testfile.Game.getBoard();
			assert.equal(board, sameBoard);
			assert.equal(board[0][0], sameBoard[0][0]);
		});
	});

	describe('#checkWinner ()', function () {
		it('should declare a winner', function() {
			var board = new Testfile.Game.createBoard();
			Testfile.Game.placeTile(0,0,Testfile.square.x);
			Testfile.Game.placeTile(0,1,Testfile.square.x);
			Testfile.Game.placeTile(0,2,Testfile.square.x);
			Testfile.Game.placeTile(1,1,Testfile.square.o);
		});
	});

	describe('#whoseTurn ()', function () {
		it('should return x', function () {
			var board = new Testfile.Game.createBoard();
			Testfile.Game.placeTile(0,0,Testfile.square.x);
			Testfile.Game.placeTile(0,1,Testfile.square.x);
			Testfile.Game.placeTile(0,2,Testfile.square.x);
			Testfile.Game.placeTile(1,1,Testfile.square.o);
			var x = Testfile.Game.whoseTurn();
			assert.equal(x, Testfile.square.x);
		});
	});

	describe('#whoseTurn ()', function () {
		it('should return o', function () {
			var board = new Testfile.Game.createBoard();
			Testfile.Game.placeTile(0,0,Testfile.square.o);
			Testfile.Game.placeTile(0,1,Testfile.square.o);
			Testfile.Game.placeTile(0,2,Testfile.square.x);
			Testfile.Game.placeTile(1,1,Testfile.square.o);
			var o = Testfile.Game.whoseTurn();
			assert.equal(o, Testfile.square.o);
		});
	});

	describe('#whoseTurn ()', function () {
		it('should return x on empty board', function () {
			var board = new Testfile.Game.createBoard();
			var o = Testfile.Game.whoseTurn();
			assert.equal(o, Testfile.square.x);
		});
	});


});


