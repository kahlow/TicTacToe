$(document).ready(function() {
	
	TicTacToe.Game.newGame();
	
	var canvas = $("#gameBoard")[0];
    var ctx = canvas.getContext("2d");

    draw();

    canvas.addEventListener('click', placeTile, false);

	function placeTile(e) {

		var x = Math.floor(e.pageX / 100), 
			y = Math.floor(e.pageY / 100);

		var tile = TicTacToe.Game.whoseTurn();

		if (TicTacToe.Game.placeTile(x,y,tile)){
			if (tile == TicTacToe.square.x) {
				x *= 100;
				y *= 100;

				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x + 100, y + 100);
				ctx.moveTo(x + 100, y);
				ctx.lineTo(x, y + 100);
				ctx.stroke();
			}
			else{
				x *= 100;
				y *= 100;

				ctx.beginPath();
				ctx.arc(x+50, y+50, 50, 0, Math.PI*2, true); 
				ctx.closePath();
				ctx.stroke();
			}
		}

		if (TicTacToe.Game.checkWinner() == TicTacToe.square.x) {
			alert("X Wins!");
			TicTacToe.Game.newGame();
		}
		else if (TicTacToe.Game.checkWinner() == TicTacToe.square.o) {
			alert("O Wins!");
			TicTacToe.Game.newGame();
		}
	}
});

function draw(){
	var canvas = $("#gameBoard")[0];
    var ctx = canvas.getContext("2d");

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
};


function newGame(){
	TicTacToe.Game.newGame();

	var canvas = $("#gameBoard")[0];
    var ctx = canvas.getContext("2d");

	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	ctx.restore();

	draw();

};
