var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}



var next = document.getElementById('next');
var previous = document.getElementById('previous');
