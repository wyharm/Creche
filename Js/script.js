AOS.init({
  duration: 1200,
})

var time;
function animateScript() {
  var    position = 300;
  const  interval = 100;
  time = setInterval ( () => {
    document.getElementById("image").style.backgroundPosition =`-${position}px 0px`; 
    if (position < 4500)
      { position = position + 300;}
    else
{ position = 300; }
    }
, interval );}


window.addEventListener('scroll',() => {

let scrolled = window.scrollY;
console.log(scrolled);
 

if (scrolled >= 2000) {

  document.getElementById("image").style.visibility='visible';
  

  
}
else {
  document.getElementById("image").style.visibility='hidden';
 
 
}



});


var map;
      function initMap() {
        map = new google.maps.Map(
            document.getElementById('carte'),
            {center: new google.maps.LatLng(-33.91722, 151.23064), zoom: 16});
        }


