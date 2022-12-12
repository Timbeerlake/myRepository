"use strict";
// let rollback = 22;
// let title ;
// let screens ;
// let screenPrice ;
// let adaptive;
// let allServicePrices;
// let fullPrice;
// let servicePercentPrices;
// let service1 ;
// let service2 ;
let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const appData = {
  rollback: 22,
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt(
      "Как называется ваш проект ?",
      "калькулятор верстки"
    );
    appData.screens = prompt(
      "Какие типы экранов нужно разработать ?",
      "простые, сложные"
    );
    appData.screenPrice = +prompt("Сколько будет стоить данная работа ?");
    appData.adaptive = confirm("Нужен ли адаптив на сайте ?");

    do {
      appData.screenPrice = +prompt("Сколько будет стоить данная работа ?");
    } while (!isNumber(appData.screenPrice));
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен ?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен ?");
      }
      let ask = +prompt("Сколько это будет стоить");
      while (!ask) {
        ask = +prompt("Сколько это будет стоить");
      }
      sum += ask;
    }
    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase()
    );
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
    for (let key in appData) {
      console.log("ключ:" + " " + key + " " + "значение" + " " + appData[key]);
    }
  },
  start: function () {
   appData.asking();
   appData.logger();
   
   appData.allServicePrices = appData.getAllServicePrices();
   appData.fullPrice = appData.getFullPrice();
   appData.servicePercentPrices = appData.getServicePercentPrices();
   appData.title = appData.getTitle();
  },
};

appData.start();



console.log(appData.fullPrice);
console.log(appData.allServicePrices);
