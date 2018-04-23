$(document).ready ( function(){

let slides = $('.carousel');
 let currentSlide = 0;

$('.next').on('click', function(){
	slides[currentSlide].className = 'carousel';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'carousel demonstration';
})
function nextSlide() {
goToSlide(currentSlide+1);
};
function previousSlide() {
goToSlide(currentSlide-1);
};
function goToSlide(n) {
slides[currentSlide].className = 'carousel';
currentSlide = (n+slides.length)%slides.length;
slides[currentSlide].className = 'carousel demonstration';
}
$('.next').on('click', function(){
	nextSlide();
})
$('.prev').on('click', function(){
	previousSlide();
});
})

