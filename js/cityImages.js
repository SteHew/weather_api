var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6d5d22aef48b5087d22f2e0ef3ad790e';
var units = '&units=metric';


function cityImage() {
    
    var imgSrc;
    var city_image = document.getElementById('city-image');
    var city = document.getElementById("city").value;

    console.log(city)

    if (city == "London") {
        imgSrc = "images/London-on-Thames.jpg";
        console.log(imgSrc)
    } else
    if (city == "Paris") {
        imgSrc = "images/Paris_skyline.jpg";
        console.log(imgSrc)
    } else
    if (city == "Auckland") {
        imgSrc = "images/Auckland_skyline.jpg";
        console.log(imgSrc)
    } else
    if (city == "Sydney") {
        imgSrc = "images/Sydney_skyline.jpg";
        console.log(imgSrc)
    } else
    if (city == "Moscow") {
        imgSrc = "images/Moscow.jpg";
        console.log(imgSrc)
    } else
    if (city == "San Francisco") {
        imgSrc = "images/San_Francisco.jpg";
        console.log(imgSrc)
    } else
    if (city == "Tokyo") {
        imgSrc = "images/Tokyo_skyline.jpg";
        console.log(imgSrc)
    }

    city_image.setAttribute('src', imgSrc)
    console.log(city_image)

}

