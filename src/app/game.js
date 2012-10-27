$(document).ready(function() {
	
	TicTacToe.Game.newGame();
	
	var canvas = $("#gameBoard")[0];
    var ctx = canvas.getContext("2d");

    // draw board
    ctx.beginPath();
    for (var i = 100; i < 300; i += 100){
    	ctx.moveTo(i, 0);
    	ctx.lineTo(i, 300);
    }

    for (var i = 100; i < 300; i += 100){
    	ctx.moveTo(0, i);
    	ctx.lineTo(300, i);
    }
    ctx.stroke();

    canvas.addEventListener('click', placeTile, false);

	function placeTile(e) {

		var x = Math.floor(e.pageX / 100), 
			y = Math.floor(e.pageY / 100);

		TicTacToe.Game.placeTile(x, y, TicTacToe.square.x);

		draw();
	};  


	function draw() {
		var board = TicTacToe.Game.getBoard();

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++){
				if (board[i][j] != ""){
					drawX(i, j);
				}
			}
		}

	};

	function drawX(x, y){

		x *= 100;
		y *= 100;

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + 100, y + 100);
		ctx.moveTo(x + 100, y);
		ctx.lineTo(x, y + 100);
		ctx.stroke();
	};
});