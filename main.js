/* var elementSpace = document.getElementById('place');

var weatherSpace = document.getElementById('weather');


// API Format
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        var cityName = document.createTextNode(apiResult.name);
        elementSpace.appendChild(cityName);

        var weatherToday = document.createTextNode(apiResult.weather[0].description);
        weatherSpace.appendChild(weatherToday);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32801,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
*/
