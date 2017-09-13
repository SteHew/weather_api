var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6d5d22aef48b5087d22f2e0ef3ad790e';
var units = '&units=metric';


function cityImage() {
    
    var src;
    var city_image = document.getElementById('city-image');
    var city = document.getElementById("city").value;

    console.log(city)

    if (city == "London") {
        src = "images/London-on-Thames.jpg";
        console.log(src)
    } else
    if (city == "Paris") {
        src = "images/Paris_skyline.jpg";
        console.log(src)
    } else
    if (city == "") {
        src = "";
        console.log("No image loaded")
    }

    city_image.setAttribute('src', src)
    console.log(city_image)

}
