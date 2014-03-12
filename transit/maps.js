
var theMap;
var Mymarker;
var infoWindow=new google.maps.InfoWindow();

function init_map() {
	var myLoc= new google.maps.LatLng(myLat, myLng);
	var myLng=0;
	var myLat=0;


	var mapOptions = {
  		center: myLoc,
  		zoom: 10,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	theMap =new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	getMyLocation();
}

function getMyLocation() 
{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat=position.coords.latitude;
			myLng=position.coords.longitude;
			renderMap();
		});
	else {
		alert("Your Browser Does Not Support Geolocation");
	}
}


function renderMap() {

	myLoc=new google.maps.LatLng(myLat,myLng);
	theMap.panTo(myLoc);
	
	Mymarker=new google.maps.Marker({
		position: myLoc,
		title: "You are Here"
	});

	Mymarker.setMap(myLoc);

	google.maps.event.addListener(Mymarker, 'click', function() {
					infowindow.setContent(Mymarker.title);
					infowindow.open(theMap, Mymarker);
				});


}