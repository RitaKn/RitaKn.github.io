let images = [
	{
		alt: 'Image 1',
		title: 'Image 1',
		src: 'img/car.jpg'
	},
	{
		alt: 'Image 2',
		title: 'Image 2',
		src: 'img/city.jpg'
	},
	{
		alt: 'Image 3',
		title: 'Image 3',
		src: 'img/mountain.jpg'
	},
	{
		alt: 'Image 4',
		title: 'Image 4',
		src: 'img/0_c5a8f_4645e878_XXXL.jpg'
	}
]

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let autoplayBtn = document.querySelector('.autoplay');
let autoplayIcon = autoplayBtn.children[0];

let slideImg = document.querySelector('.slider1-img');
let counter = 0;
let count = images.length;

let playState = false;
let paginationList = document.querySelector('.slider-1 .pagination ul');
let pagLis;

// Обробник для кнопки вперед

const setNextSlide = () => {
	let prevItem = counter;
	counter++;
	if(counter >= count){
		counter = 0;
	}
	let nextItem = counter;
	updatePagination(prevItem, nextItem);
	slideImg.setAttribute('src', images[counter].src);
}

const setPrevSlide = () => {
	let prevItem = counter;
	counter++;
	if(counter >= count){
		counter = 0;
	}
	let nextItem = counter;
	updatePagination(prevItem, nextItem);
	slideImg.setAttribute('src', images[counter].src);
}

nextBtn.addEventListener('click', setNextSlide)
// Обробник для кнопки назад
prevBtn.addEventListener('click', setPrevSlide)
// Обробник для кнопки автоплей

let interval;
autoplayBtn.addEventListener('click', function(){
	playState = !playState;
	autoplayIcon.classList.toggle('fa-play-circle');
	autoplayIcon.classList.toggle('fa-pause-circle');
	
	if(playState){
		interval = setInterval(setNextSlide, 3000);
	} else{
		clearInterval(interval);
	}
	
})

paginationList.addEventListener('click', function(event){
	pagLis[counter].classList.remove('current');
	event.target.parentNode.classList.add('current');
	for(let i = 0; i < pagLis.length; i++){
		if(pagLis[i] === event.target.parentNode){
			counter = i;
			break;
		}
	}
	slideImg.setAttribute('src', images[counter].src);

})

function updatePagination(prevItem, newItem){
	pagLis[prevItem].classList.remove('current');
	pagLis[newItem].classList.add('current');
}

window.addEventListener('load', function(){
	slideImg.setAttribute('src', images[0].src);
	
	for(let i = 0; i < count; i++){
		let li = document.createElement('li');
		let i = document.createElement('i');
		i.classList.add('fas');
		i.classList.add('fa-circle');
		li.append(i);
		paginationList.append(li);
	}
	paginationList.children[0].classList.add('current');
	pagLis = document.querySelectorAll('li');
})