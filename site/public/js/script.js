function toggleMenu() {
    var element = document.querySelector(".menu");
    element.classList.toggle("show");

    var element = document.querySelector(".menu");
    element.classList.toggle("fade");
}

function initMap() {

    var uluru = {lat: 57.648303, lng: 11.940567};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 40, center: uluru});

    var marker = new google.maps.Marker({position: uluru, map: map});
  }