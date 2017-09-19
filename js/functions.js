var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6d5d22aef48b5087d22f2e0ef3ad790e';
var units = '&units=metric';



function setup() {
    
        var button = document.getElementById('submit');
        // button.mousePressed(weatherAsk);
    
        //input = document.getElementById('#city');
}
    
function weatherAsk() {
    var input = document.getElementById('city');
    var url = api + input.value + apiKey + units;
    displayWeatherCategory(url);
}
