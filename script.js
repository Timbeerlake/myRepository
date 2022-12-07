"use strict";
let rollback = 22;
let title ;
let screens ;
let screenPrice ;
let adaptive; 
let allServicePrices;
let fullPrice; 
let servicePercentPrices;
let service1 ;
let service2 ;



const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект ?", "калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать ?", "простые, сложные");
    screenPrice = prompt("Сколько будет стоить данная работа ?");
    adaptive = confirm("Нужен ли адаптив на сайте ?");
 
    do {
      screenPrice = prompt("Сколько будет стоить данная работа ?");
    } while (!isNumber(screenPrice)); 

}


let getAllServicePrices = function () {
  let sum = 0

  for (let i = 0; i < 2; i++){

      if (i === 0) {
        service1 = prompt("Какой дополнительный тип услуги нужен ?");

      } else if (i ===1) {
        service2 = prompt("Какой дополнительный тип услуги нужен ?");
      }  
      let ask = +prompt("Сколько это будет стоить")
      while(!isNumber(ask)){
        ask = prompt("Сколько это будет стоить")}
      sum += ask }
      return sum
    };

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}

function getTitle() {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
}

const getRollbackMessage = function (Price) {
  if (Price > 30000) {
    return "Даем скидку 10%";
  } else if (30000 >= Price && Price >= 15000) {
    return "Даем скидку в 5%";
  } else if (Price >= 0 && 15000 >= Price) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

asking()

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrice", allServicePrices)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screens);
console.log(typeof adaptive);

console.log(screens.length)
console.log(servicePercentPrices)

console.log("Стоимость верстки экранов" + screenPrice + "рубли")
console.log("Стоимость разработки сайта" + fullPrice + "рубли")

// alert("hello teacher");
// console.log("hello world");
