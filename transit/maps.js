//maps.js

	
Function init() {
	var mapOptions = {
  		center: new google.maps.LatLng(-34.397, 150.644),
  		zoom: 8
	};

	var map =new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}