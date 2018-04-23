//Шукаємо список із картинками
let ul = document.querySelector('.slider .slider-pictures ul');
//Загальна кількість картинок
let total = ul.children.length;
//Номер поточного слайду
let pictureNumber = 0;
//Ширина 1 слайду
let sliderWidth = parseInt(getComputedStyle(ul.querySelector('li')).width);

//Знаходимо кнопку "Вперед" і додаємо їй обробник при кліку
document.querySelector('.slider-buttons .next').addEventListener('click', function () {
  //Функція переміщення на 1 картинку вперед
  let oneImageRight = function () {
	//Лічильник поточного зміщення
    let counter = 0;
	//Анімація переміщення на наступний слайд
	
	//На скільки зсунути за 1 крок
	let iterationStep = sliderWidth / 200;
	
	//Запускаємо інтервал, зберігши його у змінній (даємо йому ім'я)
    let interval = setInterval(function () {
	  //Перевіряємо, чи пройшли ми 200 ітерацій
      if (counter < 200) {
		//Якщо ні, то зсовуємо слайд на крок ітерації
        ul.style.left = parseInt(getComputedStyle(ul).left) - iterationStep + "px";
		//І додаємо у лічильник 1
        counter++;
      } else {
		//Інакше закінчуємо анімацію
        clearInterval(interval);
      }
    }, 1);
  };
  
  //Якщо номер поточного слайду менше, ніж передостанній слайд
  if (pictureNumber < total-1) {
	//Тоді зсовуємо вправо
    oneImageRight();
	//І додаємо до номеру поточного слайду 1
    pictureNumber++
  } else {
	//Інакше скидаємо на 1 слайд
    pictureReset(1);
	//І обнуляємо номер слайду
    pictureNumber = 0;
  }

});


//Знаходимо кнопку "Назаж" і додаємо їй обробник при кліку
document.querySelector('.slider-buttons .prev').addEventListener('click', function () {
  //Функція переміщення на 1 картинку назад
  let oneImageLeft = function () {
    let counter = 0;
	let iterationStep = sliderWidth / 200;
	
    let interval = setInterval(function () {
      if (counter < 200) {
        ul.style.left = parseInt(getComputedStyle(ul).left) + iterationStep + "px";
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 1);
  };
  
  //Якщо номер картинки менше або рівно нулю
  if (pictureNumber <= 0) {
	//Тоді скидаємо на останній слайд
    pictureReset(-1);
	//І номеру картинки присвоюємо останній індекс
    pictureNumber = total-1;
  } else {
	//Інакше зсовуємо на 1 картинку вліво
    oneImageLeft();
    pictureNumber--;
  }
});

//Перемотування слайдера вкінець чи на початок
//sign: 1, якщо на початок, -1, якщо вкінець
let pictureReset = function (sign) {
  let counter = 0;
  let resetInterval = setInterval(function () {
	  
  let iterationStep = sliderWidth*(total-1) / 100;
    if (counter < 100) {
      ul.style.left = parseInt(getComputedStyle(ul).left) + sign * iterationStep + "px";
      counter++;
    } else {
      clearInterval(resetInterval);
    }
  }, 1);
};



