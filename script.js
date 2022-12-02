
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
 console.log("стоимость верстки экранов" + screenPrice + "рублей")
console.log("стоимость разработки сайта" + fullPrice + "рублей");

console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100))

// alert("hello teacher");
// console.log("hello world");