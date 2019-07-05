AOS.init({
  duration: 1200,
})

let prevScrollpos = window.pageYOffset;

function showNav() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
    document.getElementById("navbar1").style.opacity = "1";
  } else {
    document.getElementById("navbar1").style.top = "-80px";
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


function stopAnimate() {
  clearInterval(time);
}



let mq = window.matchMedia('@media (min-width: 1200px');
let mq1 = window.matchMedia('@media (min-width: 992px) and (max-width: 1199.98px)');
let mq2 = window.matchMedia('@media (min-width:768px)and (max-width: 991.98px)');
let mq3 = window.matchMedia('@media (min-width: 576px) and (max-width: 767.98px)');
let mq4 = window.matchMedia('@media (max-width: 575.98px)');


function animationPets() {
  
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
 
/* function hideNav(){
  document.getElementById("navbar1").style.visibility = "hidden";
}

function fd(){
  let scrolled = window.scrollY;
  console.log(scrolled);

  if(scrolled = 0){

  setTimeout(hideNav(), 3000);
}} */

window.onscroll = function() {
  showNav();
  animationPets();
  
}


