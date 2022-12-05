"use strict";
let title = "My Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 2500;
let rollback = 22;
let fullPrice = 30000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей");

console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект ?");
screens = prompt("Какие типы экранов нужно разработать ?");
screenPrice = +prompt("Сколько будет стоить данная работа ?");
adaptive = prompt("Нужен ли адаптив на сайте ?");

let service1 = prompt("Какой дополнительный тип услуги нужен ?");
let servicePrice1 = +prompt("Сколько это будет стоить ?");
let service2 = prompt("Какой дополнительный тип услуги нужен ?");
let servicePrice2 = +prompt("Сколько это будет стоить ?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice =  Math.ceil(fullPrice - 6600);
console.log(servicePercentPrice);



if (fullPrice > 30000){
    console.log('Даем скидку 10%');

} else if (30000 > fullPrice && fullPrice > 15000) {
    console.log('Даем скидку в 5%');

} else if (fullPrice > 0 && 15000 > fullPrice){
    console.log('Скидка не предусмотрена');
    
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice == 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice == 15000) {
    console.log ('Даем скидку в 5%');
} else if (fullPrice == 30000) {
    console.log('Даем скидку в 10%');
}
console.log (fullPrice);

// alert("hello teacher");
// console.log("hello world");
