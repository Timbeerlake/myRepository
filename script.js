"use strict";


const titleText = document.getElementsByTagName("h1");
const buttonStart = document.getElementsByClassName("handler_btn");
const buttonStop = document.getElementsByClassName("handler_btn");
const plus = document.querySelector(".screen-btn");
const percent1 = document.querySelectorAll(".other-items .percent");
const number1 = document.querySelectorAll(".other-items .number");
const inputTypeRange = document.querySelector(".rollback  input")
const span1 = document.querySelector(".rollback span");
const totalInput = document.getElementsByClassName("total-input");
let screen = document.querySelectorAll(".screen")

console.log(titleText);
console.log(buttonStart);
console.log(buttonStop);
console.log(plus);
console.log(percent1);
console.log(number1);
console.log(inputTypeRange);
console.log(span1);
console.log(totalInput);
console.log(screen);


let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const appData = {
  rollback: 22,
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  services: [],
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект ?","калькулятор верстки")
    } while (isNumber(appData.title))

    for (let i = 0; i < 2; i++) {
      let name = 0;
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (isNumber(name));
      let price = 0;
      do {
        price = +prompt("Сколько будет стоить данная работа ?");
      } while (!price);
      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = 0;
      do {
        name = prompt("Какой дополнительный тип услуги нужен ?");
      } while (isNumber(name));
      let price = 0;
      do {
        price = +prompt("Сколько это будет стоить ?");
      } while (!price);
      appData.services[name] = price;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте ?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrices =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
  },

  getRollbackMessage: function (Price) {
    if (Price > 30000) {
      return "Даем скидку 10%";
    } else if (30000 >= Price && Price >= 15000) {
      return "Даем скидку в 5%";
    } else if (Price >= 0 && 15000 >= Price) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.allServicePrices);
    console.log(appData.screens);
    console.log(appData.services);
    console.log(typeof appData.allServicePrices)
    console.log(typeof appData.fullPrice)
  },
};

appData.start();
