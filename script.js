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

let servicePercentPrice =  Math.ceil(fullPrice - "Откат посреднику");
console.log(servicePercentPrice);

// - Если fullPrice больше 30000, то “Даем скидку в 10%” 
//   - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
//   - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
//   - Если отрицательное значение то вывести “Что то пошло не так” 
//   - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)

if (fullPrice > 30000){
    console.log('Даем скидку 10%');

} else if (30000 > fullPrice && fullPrice > 15000) {
    console.log('Даем скидку в 5%');

} else if (fullPrice > 0 && 15000 > fullPrice){
    console.log('Скидка не предусмотрена');
    
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} 
console.log (fullPrice)

// alert("hello teacher");
// console.log("hello world");
