// use strict
//Завдання 1:

// let letterNumber = prompt("Введіть число");
// Number(letterNumber) === 10 ? alert("Вірно") : alert("Не Вірно");

//Завдання 2:

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min > 15 && min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min > 30 && min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else if (min > 46 && min <= 59) {
//   alert(`${min} входить в четверту чверть`);
// }

//Завдання 3:

// let number = prompt("Введіть число від 1 до 4");

// let result;

// switch (Number(number)) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Літо";
//     break;
//   case 4:
//     result = "Осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

//Завдання 4:

// const number = Number(prompt("Введіть кількість хвилин"));

// function formatTime(totalTime) {
//   let hours = String(Math.floor(totalTime / 60)).padStart(2, "0");
//   let minutes = String(totalTime % 60).padStart(2, "0");
//   return `${hours}:${minutes}`;
// }

// console.log(formatTime(number));

//Завдання 5:

// const userLogin = prompt("Введіть свій логін");
// let userPassword;

// console.log(userLogin);

// if (userLogin === "Адмін") {
//   userPassword = prompt("Введіть свій пароль");
//   if (userPassword === "Я головний") {
//     alert("Добрий день");
//   } else {
//     alert("Невірний пароль!");
//   }
// } else if (userLogin === "" || userLogin === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

//Завдання 6:

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

//Завдання 7:

// function getNumbers(min, max) {
//   let counter = 0;
//   for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       counter += i;
//     }
//   }
//   return counter;
// }

// console.log(getNumbers(1, 10));

//Завдання 8:

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return Math.min(a, b);
// }

// console.log(min(2, 9));

//Завдання 9:

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm();
//   }
// }

// console.log(isAdult(19));

//Завдання 10:

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     }
//   }
// }

// console.log(fizzBuzz(5));
