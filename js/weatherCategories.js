function displayWeatherCategory(baseUrl) {

    let weatherCategory = (theUrl) => {
        
        let xmlHttp = new XMLHttpRequest();
    
        xmlHttp.onreadystatechange = ((theUrl) => {

            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                
                let weatherCategory = document.getElementById('category');
                let result = JSON.parse(xmlHttp.responseText);

                console.log(result);

                let weatherType = result.weather[0].main
                let temperature = result.main.temp

                switch(weatherType) {
                    case "Clear":
                        var type = document.getElementById('weather-image')
                        type.setAttribute('src', 'images/urban_sunshine.jpg')
                    break
                    case "Rain":
                        var type = document.getElementById('weather-image')
                        type.setAttribute('src', 'images/urban_rain.jpg')
                    break
                    case "Cloudy":
                    var type = document.getElementById('weather-image')
                    type.setAttribute('src', 'images/urban_cloudy.jpg')
                    break
                    case "Snow":
                    var type = document.getElementById('weather-image')
                    type.setAttribute('src', 'images/urban_snow.jpg')
                    break
                }
    
                var degrees = document.getElementById('degrees')
                degrees.innerHTML = `${temperature}°`
            }
            else {
                console.log("Waiting....")
            }

        }).bind(undefined, theUrl);
    
        xmlHttp.open( "GET", theUrl, true );
        xmlHttp.send( null );
    }

    weatherCategory(baseUrl) 
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
