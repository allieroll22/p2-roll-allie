// /// /// /// READ MORE TAB /// //// //// ///

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

// // /// /// /// Get Involved ACCORDIAN // /// //// ///// ///
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

// ///// ///// //// BEGIN API ///// //// ////////
var weatherSpace = document.getElementById('weather');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);
        console.log(apiResult);
       var weatherToday = document.createTextNode(apiResult.data.current.pollution.aqicn);
       weatherSpace.appendChild(weatherToday);
    }
};
xmlhttp.open('GET', 'http://api.airvisual.com/v2/city?city=Honolulu&state=hawaii&country=USA&key=rSzMizcTS3qtiL9a4', true);
xmlhttp.send();

// /// //// /// /// Pop Up Ad // //// //// /// ///
var popUp = document.querySelector('.pop-up');

var closeButton = document.querySelector('.close-button');

function showPop() {
  popUp.classList.toggle('show-pop-up');
}


window.addEventListener("scroll",
  function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      showPop();
    }
    else {
    }
  }, false
);

closeButton.onclick = function() {
  popUp.style.display = 'none';
};

window.onclick = function(event) {
  if(event.target === popUp) {
    showPop();
  }
};

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion
