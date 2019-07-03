AOS.init({
  duration: 1200,
})

/*const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navliens');
  
  burger.addEventListener('click',()=> {
    nav.classList.toggle('nav-active');
  });
}
navSlide();*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 

$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
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





let mq = window.matchMedia('@media (min-width: 1200px');
let mq1 = window.matchMedia('@media (min-width: 992px) and (max-width: 1199.98px)');
let mq2 = window.matchMedia('@media (min-width:768px)and (max-width: 991.98px)');
let mq3 = window.matchMedia('@media (min-width: 576px) and (max-width: 767.98px)');
let mq4 = window.matchMedia('@media (max-width: 575.98px)');


window.onscroll = function(ev) {
  
  if((mq) && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
    document.getElementById("image1").style.bottom='-7%';
    document.getElementById("image").style.bottom='-7%';
    animateScript();
  }
  else{
    document.getElementById("image1").style.bottom='-30%';
    document.getElementById("image").style.bottom='-30%';
    stopAnimate();
  }

}



