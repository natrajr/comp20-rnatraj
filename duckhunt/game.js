// Your work goes here...
var sprites= new Image();
sprites.src="./assets/duckhunt.png";

 function Draw() {
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(sprites, 0, 710, 800, 190, 0, 500, 800, 100);

}
