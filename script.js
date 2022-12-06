"use strict";
let rollback = 22;
let title = prompt("Как называется ваш проект ?");
let screens = prompt("Какие типы экранов нужно разработать ?");
let screenPrice = +prompt("Сколько будет стоить данная работа ?");
let adaptive = prompt("Нужен ли адаптив на сайте ?");
let service1 = prompt("Какой дополнительный тип услуги нужен ?");
let servicePrice1 = +prompt("Сколько это будет стоить ?");
let service2 = prompt("Какой дополнительный тип услуги нужен ?");
let servicePrice2 = +prompt("Сколько это будет стоить ?");
let fullPrice = getFullPrice;
let servicePercentPrice = getServicePercentPrices;


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};
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
let getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices;

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

function getTitle(str) {
  return title
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
} function getServicePercentPrices(fullPrice, rollback) {
  return fullPrice - rollback;
}


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log(getTitle(title));
console.log(showTypeOf(title));
console.log(getServicePercentPrices(fullPrice, rollback));

// alert("hello teacher");
// console.log("hello world");
