$(document).ready(function() {
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

    canvas.addEventListener('click', clickReporter, false);
    
});

function clickReporter(e){
	alert("here");
};

