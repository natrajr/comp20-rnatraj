// Your work goes here...
var sprites= new Image();
sprites.src="./assets/duckhunt.png";

 function Draw() {
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	//drawImage(img, sx, sy, sW, sH, dx, dy, dW, dH)
	//tree slice
	ctx.drawImage(sprites, 4, 272, 78, 124, 100, 310, 130, 210);
	//ground slice
	ctx.drawImage(sprites, 0, 710, 800, 190, 0, 440, 800, 160);
	//dog slice
	ctx.drawImage(sprites, 0, 0, 60, 50, 150, 510, 70, 80);
	//the birds
	ctx.drawImage(sprites, 40, 120, 208, 26, 30, 100, 350, 30);
}
