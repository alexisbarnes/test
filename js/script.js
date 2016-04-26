var infobox = "";

$(document).ready(function(){
  console.log("DOC Ready!");

  loadData2();
});

function loadData2() {
    $.getJSON("tour.json", function(json){
      data = json;
      // console.log(data);

      for (var i = 0; i < data.venues.length; i++) {
        var info = data.venues[i];

        //Info Box

        infobox += '<div class="info-bg">'
        infobox += '<h1 class="stadium-box">' + info.Stadium + '</h1>';
        infobox += '<h2 class="location-box">' + info.Location + '</h2>';
        infobox += '<p class="date-box"><span class="sub-title-box">Date:</span> ' + info.Date + '</p><br>'
        infobox += '<p class="time-box"><span class="sub-title-box">Time:</span> ' + info.Time + '</p><br>';
        infobox += '<p class="address-box"><span class="sub-title-box">Address:</span> ' + info.Address + '</p><br>'
        infobox += '<p class="number-box"><span class="sub-title-box">Phone Number:</span> ' + info.Number + '</p>';
        infobox += '<p class="site-box"><span class="sub-title-box">Website:</span> <a href="http://' + info.Website + '" target="_blank">' + info.Website + '</a></p>';
        infobox += '</div>'




      }

    });



}





function ButtonText() {
  if ($(".all-twitter").is(":visible")) {
    $("button").text("Instagram");
  } else {
    $("button").text("Twitter");
  }
}

ButtonText();
$("button").click(function() {
  $(".all-twitter").toggle();
  $(".instagram-content").toggle();
  ButtonText();
});



function toggleSound() {
  var audioElem = document.getElementById('audio');
  if (audioElem.paused) {
    audioElem.play();
  }else
    audioElem.pause();
}
