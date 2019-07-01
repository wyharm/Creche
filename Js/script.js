$(document).ready(function(){
  $(".menu").hide();
    $(".hamburger").click(function(){
        $(".menu").fadeIn(500);
    });
      $(".closeBtn").click(function(){
        $(".menu").fadeOut(500);
    });
});






/*AOS.init({
  duration: 1200,
})*/

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











