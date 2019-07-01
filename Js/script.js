/*AOS.init({
  duration: 1200,
})*/





$(document).ready(function(){
  $(".menu").hide();
    $(".hamburger").click(function(){
        $(".menu").fadeIn(500);
    });
      $(".closeBtn").click(function(){
        $(".menu").fadeOut(500);
    });
});






function stopAnimate() {clearInterval(time);
}

let time;

function animateScript() {
  var    position = 300;
  const  interval = 100;
  const  diff = 300;
  time = setInterval ( () => {
    document.getElementById("image").style.backgroundPosition =`-${position}px 0px`;
    document.getElementById("image1").style.backgroundPosition =`-${position}px 0px`;
    if (position < 4500)
      { position = position + diff;}
    else
{ position = 300; }
    }
, interval );}






window.addEventListener('scroll',() => {

  let scrolled = window.scrollY;
  console.log(scrolled);
  
  if (scrolled >= 5161) {
  document.getElementById("image").style.top='72%';
  document.getElementById("image1").style.top='72%';
  animateScript();
  
  }
  else {
  document.getElementById("image1").style.top='100%';
  document.getElementById("image").style.top='100%';
  stopAnimate();
  }
  
  
  });







