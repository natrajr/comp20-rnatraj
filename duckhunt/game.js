// Your work goes here...
var sprites= new Image();
sprites.src="./assets/duckhunt.png";

 function Draw() {
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	//drawImage(img, sx, sy, sW, sH, dx, dy, dW, dH)
	//tree slice
	ctx.drawImage(sprites, 4, 272, 78, 124, 100, 445, 80, 100);
	//ground slice
	ctx.drawImage(sprites, 0, 710, 800, 190, 0, 500, 800, 100);
}
