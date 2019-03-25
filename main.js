var readMore = document.getElementsByClassName('read');
var i;
  console.log(readMore);
for (i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
};

var myAccordion = document.getElementsByClassName('accordion-control');
var i;
  console.log(myAccordion);
for (i = 0; i < myAccordion.length; i++) {
  myAccordion[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
};

var weatherSpace = document.getElementById('weather');


// API Format
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        var weatherToday = document.createTextNode(apiResult.weather[0].description);
        weatherSpace.appendChild(weatherToday);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5855797&appid=b6907d289e10d714a6e88b30761fae22', true);
xmlhttp.send();

//http://api.openweathermap.org/data/2.5/weather?id=5855797&appid=b6907d289e10d714a6e88b30761fae22

//https://samples.openweathermap.org/data/2.5/weather?id=5855797&appid=b6907d289e10d714a6e88b30761fae22


//https://samples.openweathermap.org/data/2.5/weather?id=5855797&appid=b6907d289e10d714a6e88b30761fae22

//https://samples.openweathermap.org/data/2.5/weather?zip=96731,us&appid=b6907d289e10d714a6e88b30761fae22

/* xmlhttp.open('GET','https://samples.openweathermap.org/data/2.5/weather?zip=96717,us&appid=b6907d289e10d714a6e88b30761fae22', true);
xmlhttp.send();
Kahuku 96731
'https://samples.openweathermap.org/data/2.5/weather?q=32801,us&appid=6efff70fe1477748e31c17d1c504635f'
api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}


//ABOUT DONATE BUTTON
/*
var donateNow = document.getElementsByClassName('donate');
  donateNow.addEventListener('click', function () {
  alert('would you like to donate')
}
);
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion
*/



//var elementSpace = document.getElementById('place');
