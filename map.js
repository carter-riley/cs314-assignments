'use strict'



function initMap() {
  var pos1 = {lat: 47.204893, lng: -120.976022};
  var pos2 = {lat: 47.457621, lng: -122.343327};
  var pos3 = {lat: 47.668116, lng: -117.401996};
  let win1 = "Cle Elum Roslyn High School, Cle Elum, WA<br>Where I graduated High School and grew up.";
  let win2 = "Highline Medical Center, Burien, WA<br>Where I was born.";
  let win3 = "Gonzaga University, Spokane, WA<br>Where I spent my undergrad and earned my Bachelors degree in Computer Science";

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6.5,
    center: pos1
  });
  
  
  var marker1 = new google.maps.Marker({
    position: pos1,
    map: map,
	title: ""
  });
  var infowin1 = new google.maps.InfoWindow({
    content: win1
  });
  marker1.addListener('click', function() {
    infowin1.open(map, marker1);
  });
  
  var marker2 = new google.maps.Marker({
    position: pos2,
    map: map,
	title: ""
  });
  var infowin2 = new google.maps.InfoWindow({
    content: win2
  });
  marker2.addListener('click', function() {
    infowin2.open(map, marker2);
  });
  
  var marker3 = new google.maps.Marker({
    position: pos3,
    map: map,
	title: ""
  });
  var infowin3 = new google.maps.InfoWindow({
    content: win3
  });
  marker3.addListener('click', function() {
    infowin3.open(map, marker3);
  });
}