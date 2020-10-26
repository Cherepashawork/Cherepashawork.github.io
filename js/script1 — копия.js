"use strict";
let count=0;                    /* количество попыток */
let ctrue=0;                    /* количество правильных ответов */
var n=1;                        /* Переменная-счётчик и ограничитель вопросов */
var a;                          /* Переменная ID */
var test;                       /* Переменная для проверки */
var content = document.getElementById("Kvest1").innerHTML;
var element_start;
var element;
var element1;
var element2;
var element3;
var Namereci = ["Где река Печора?","Где река Мезень?","Где река Урал?","Где река Тобол?","Где река Обь?","Где река Иртыш?","Где река Ишим?","Где река Волга?","Где река Дон?","Где река Ока?",
"Где река Кама?","Где река Вятка?","Где река Москва?","Где река Северная Двина?","Где река Сухона?","Где река Вычегда?","Где река Клязьма?","Где река Вах?","Где река Западная Двина?",
"Где река Ахтуба?","Где река Юг?","Где река Нева?","Где река Свирь?","Где река Бия?","Где река Катунь?","Где река Тура?","Где река Чулым?",
"Где река Северная Сосьва?","Где река Онега?","Где река Енисей?","Где река Нижняя Тунгуска?","Где река Подкаменная Тунгуска?","Где река Ангара?",
"Где река Селенга?","Где река Хатанга?","Где река Оленек?","Где река Лена?","Где река Алдан?","Где река Витим?","Где река Вилюй?","Где река Яна?",
"Где река Колыма?","Где река Индигирка?","Где река Анадырь?","Где река Амур?","Где река Аргунь?","Где река Шилка?","Где река Зея?"];
let Mreci = new Array();
let Nreci = new Array();

                                                                /* РЕЧКА (при нажатии) */
																
function isReca(a1) {
	a = a1;
	test = n;
	content = document.getElementById("Kvest1").innerHTML;
	var i4 = 0;
	while (i4 < Namereci.length) {
		if ((content == Namereci[i4]) && (a==i4+1)) {
			ctrue=ctrue+1;
			n=n+1;
			element3 = document.getElementById("Kvest1");       /* Получаем "идентефекатор" блока с вопросом вверху экрана */
			element3.classList.add("Yes");                      /*   проверка */
			setTimeout(CvetYes, 400);
		}
		i4++;
	}
	if (test == n) {
		element3 = document.getElementById("Kvest1");      /* Получаем "идентефекатор" блока с вопросом вверху экрана */
		element3.classList.add("No");                      /*   проверка */
		setTimeout(CvetNo, 400);	
	}
	count=count+1;
}

                                                                /* "Начать"(блок с вопросами) */

function Start() {                             /* Нажатие кнопки "Начать" */
	n = 1;
	count = 0;
	ctrue = 0;
	Mreci.length=Namereci.length;
	Nreci.length=Namereci.length;
	var i3 = 0;
	while (i3 < Namereci.length) {                               /* Присваиваем индивидуальные строковые данные(вопросы) вместо цифр  */
		Mreci[i3]=i3+1;
		Nreci[i3]=i3+1;
		i3++;
	}
	Mreci.sort(() => Math.random() - 0.5);              /*   Перемешиваем значения массива*/
	var i = 0;
	while (i < Mreci.length) {   
		var i2 = 0;
		while (i2 < Mreci.length) {                     /* Присваиваем индивидуальные строковые данные(вопросы) вместо цифр  */
			if (Mreci[i]==i2+1) {Nreci[i] = Namereci[i2];}
			i2++;
			}
		i++;
	}
	element_start = document.getElementById("start");   /* Удаляем блок "Начать" */
	element_start.classList.remove("Старт");
	element_start.innerHTML = "";
	element_start = document.getElementById("h1");      /* Удаляем зелёный фон */
	element_start.classList.remove("hhead");
	element_start = document.getElementById("h2");
	element_start.classList.remove("head");
	element = document.getElementById("Kvest1");        /* создаём блок с вопросом вверху экрана */
	element.classList.add("Kvest"); 	
	element.innerHTML = Nreci[n-1];                     /* Вписываем в этот блок вопрос*/
	element1 = document.getElementById("Kvest2");       /* создаём блок "Закрыть" вверху экрана */
	element1.classList.add("KvestX"); 
	element2 = document.getElementById("zanovo");       /* создаём блок "Заново" вверху экрана */
	element2.classList.add("Заново"); 
}

function Smena() {
	element = document.getElementById("Kvest1"); 
	if (n <= Mreci.length) {element.innerHTML = Nreci[n-1];}             /* Вписываем в этот блок вопрос*/
	if (n > Mreci.length) {
		element.innerHTML = `Молодец, правильных ответов ${ctrue} из ${count}`;
	}
}

function CvetYes() {
	element3.classList.remove("Yes");
	Smena();
}

function CvetNo()  {element3.classList.remove("No");}

function clickX() {
	element = document.getElementById("Kvest1"); 
	element.innerHTML = `Молодец, правильных ответов ${ctrue} из ${count}`;
	element1 = document.getElementById("Kvest2"); 
	element1.classList.remove("KvestX");
}

function clickzanovo() {
	element_start = document.getElementById("h1");      /* Удаляем зелёный фон */
	element_start.classList.add("hhead");
	element_start = document.getElementById("h2");
	element_start.classList.add("head");
	element = document.getElementById("Kvest1"); 
	element.innerHTML = ``;
	element.classList.remove("Kvest");                 /* Удаляем блок с вопросами */
	element1 = document.getElementById("Kvest2"); 
	element1.classList.remove("KvestX");               /* Удаляем блок "Закрыть" */
	element2 = document.getElementById("zanovo"); 
	element2.classList.remove("Заново");               /* Удаляем блок "Заново" */
	element_start = document.getElementById("start");  /* Добавляем блок "Начать" */
	element_start.classList.add("Старт");
	element_start.innerHTML = "НАЧАТЬ";
	count=0;                    /* количество попыток */
	ctrue=0;                    /* количество правильных ответов */
	n=1;                        /* Переменная-счётчик и ограничитель вопросов */
}