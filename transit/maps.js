
var theMap;
var Mymarker;

var myLng=0;
var myLat=0;
var myLoc;
var infoWindow;

function init_map() {

	var mapOptions = {
  		center: myLoc,
  		zoom: 13,
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
			myLoc= new google.maps.LatLng(myLat, myLng);
			renderMap();
		});
	}
	else {
		alert("Your Browser Does Not Support Geolocation");
	}
}


function renderMap() {

	infoWindow=new google.maps.InfoWindow();

	myLoc=new google.maps.LatLng(myLat,myLng);
	theMap.panTo(myLoc);
	
	Mymarker=new google.maps.Marker({
		position: myLoc,
		map: theMap,
		title: "You are Here"
	});

	google.maps.event.addListener(Mymarker, 'click', function() {
		infoWindow.open(theMap, Mymarker);
		infoWindow.setContent(Mymarker.title);
	});

	init_XMLRequest();
}

function init_XMLRequest() {

	xhr= new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	xhr.onreadystatechange=dataReady;
	xhr.send(null);
}

function dataReady() {
	mapDOM=document.getElementById("map_canvas");

	if (xhr.readyState==4 && xhr.status==200) {
		mbtaData=JSON.parse(xhr.responseText);
		closestStation();
		//console.log(mbtaData);
	}
	else if (xhr.readyState==4 && xhr.status==500) {
		mapDOM.innerHTML="Refresh The Page";
	}
}

function closestStation() {
	
	
}