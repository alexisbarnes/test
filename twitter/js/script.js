$(document).ready(function(){
  console.log("DOC Ready!");

//GOOGLE MAP
  var map;


  function initMap() {
    var myLatLng = {lat: 35.913200, lng: -79.055847};
    var alexisMap;


    alexisMap = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: alexisMap,
      title: 'Hello World!',
    });

    var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the '+
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  'south west of the nearest large town, Alice Springs; 450&#160;km '+
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  'Aboriginal people of the area. It has many springs, waterholes, '+
  'rock caves and ancient paintings. Uluru is listed as a World '+
  'Heritage Site.</p>'+
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
  'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
  '(last visited June 22, 2009).</p>'+
  '</div>'+
  '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(alexisMap, marker);
    });

    console.log(alexisMap);
  }
});
