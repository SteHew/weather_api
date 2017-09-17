var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6d5d22aef48b5087d22f2e0ef3ad790e';
var units = '&units=metric';


function weatherCategory() {
    
    const theUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const theKey = '&appid=6d5d22aef48b5087d22f2e0ef3ad790e&units=metric';
    
    let weatherCategory = (theUrl) => {
        
        let xmlHttp = new XMLHttpRequest();
    
        xmlHttp.onreadystatechange = ((theUrl) => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                
                let weatherCategory = document.getElementById('category');
                let result = JSON.parse(xmlHttp.responseText);
    
                if (result.length > 0) {
    
                    for (let i = 0; i < result.length; i++) {
    
                        let listitems = document.createElement('li');
                        listitems.setAttribute('class', 'list-group-item');
                        listitems.innerHTML = "<span>"+result[i].id+"</span>"+result[i].weather[0].main;
                        listitems.innerHTML = "<span>"+result[i]+"</span>"+result[i].main[0].temp;
                        weatherCategory.appendChild(listitems);
                    }
                    console.log(listitems);
                }
            }
        }).bind(undefined, theUrl);
    
        xmlHttp.open( "GET", theUrl, true );
        xmlHttp.send( null );
    }
    
    let getWeatherCategories = () => {
        weatherCategory(baseurl)
    }  
}


function weatherImage() {
    
    var weatherData=api.weather;
    var weather_image = document.getElementById('weather-image');
    var weather = document.getElementById("weather").value;

    console.log(weather)

    if (weather == "Rain") {
        src = "images/Paris-rain.jpg";
        console.log(src)
    } else
    if (weather == "Drizzle") {
        src = "images/London_drizzle.jpg";
        console.log(src)
    } else
    if (weather == "Snow") {
        src = "images/urban_snow.jpg";
        console.log(src)
    } else
    if (weather == "Sunny") {
        src = "images/urban_sunshine.jpg";
        console.log(src)
    } else
if (weather == "Cloudy") {
        src = "images/urban_cloudy.jpg";
        console.log(src)
    }

    weather_image.setAttribute('src', src)
    console.log(weather_image)
}
