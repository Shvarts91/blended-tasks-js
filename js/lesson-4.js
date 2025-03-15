// //Завдання 1:

// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);
// console.log(document.body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector("#title");
// console.log(title);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector(".list");
// console.log(list);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const allElements = document.querySelectorAll("[data-topic]");
// console.log(allElements);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstElement = document.querySelector("[data-topic]");
// console.log(firstElement);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const elements = document.querySelectorAll("[data-topic]");
// const lastElement = elements[elements.length - 1];
// console.log(lastElement);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const bodyTitle = document.querySelector("#title");
// console.log(bodyTitle.nextElementSibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const h3Titles = document.querySelectorAll("h3");
// console.log(h3Titles);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// h3Titles.forEach((elem) => {
//   elem.classList.add("active");
// });
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const item = document.querySelector('[data-topic="navigation"]');
// console.log(item);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// item.style.backgroundColor = "yellow";
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const paragraph = item.querySelector("p");
// paragraph.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const manipuliationElement = document.querySelector(
//   `[data-topic="${currentTopic}"]`
// );
// console.log(manipuliationElement);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// manipuliationElement.style.backgroundColor = "blue";
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const titleCompleted = document.querySelector(".completed");

// console.log(titleCompleted);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// titleCompleted.remove();
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const parag = document.createElement("p");
// parag.textContent = "Об'єктна модель документа (Document Object Model)";
// title.insertAdjacentElement("afterend", parag);
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const ulElement = document.querySelector("ul");

// const liElement = document.createElement("li");

// const h3Element = document.createElement("h3");

// h3Element.textContent = "Властивість innerHTML";

// const pElement = document.createElement("p");

// pElement.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// liElement.appendChild(h3Element);
// liElement.appendChild(pElement);
// ulElement.appendChild(liElement);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const listItem = `
//     <li>
//       <h3>Властивість innerHTML</h3>
//       <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//     </li>
// `;
// ulElement.insertAdjacentHTML("beforeend", listItem);
// // 20 - очисти список
// ulElement.innerHTML = "";

// Завдання 2:

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const list = document.querySelector("ul");

// const boxElements = document.createElement("div");

// boxElements.classList.add("numberContainer");

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const elements = [];

// for (let i = 0; i < 100; i++) {
//   const block = document.createElement("div");

//   block.classList.add("number");

//   if (i % 2 === 0) {
//     block.classList.add("even");
//   } else {
//     block.classList.add("odd");
//   }

//   block.textContent = randomNumber();

//   elements.push(block);
// }

// boxElements.append(...elements);
// list.appendChild(boxElements);

//Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector("form");
// const inputText = document.querySelector('[type="text"]');
// const nameSpan = document.querySelector(".js-username-output");

// form.addEventListener("input", () => {
//   if (inputText.value.length > 6) {
//     inputText.classList.add("success");
//     inputText.classList.remove("error");
//   } else {
//     inputText.classList.add("error");
//     inputText.classList.remove("success");
//   }
// });

// inputText.addEventListener("focus", () => {
//   if (inputText.value === "") {
//     inputText.style.outline = "3px solid red";
//   } else {
//     inputText.style.outline = "3px solid green";
//   }
// });

// inputText.addEventListener("blur", () => {
//   if (inputText.value === "") {
//     inputText.style.outline = "3px solid red";
//   } else {
//     inputText.style.outline = "3px solid green";
//   }
//   nameSpan.textContent = inputText.value || "Anonymous";
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let userName = {};
//   const userCheck = e.target.querySelector('[type="checkbox"]').checked;
//   if (userCheck && inputText.value) {
//     userName = {
//       text: inputText.value,
//       check: userCheck,
//     };
//   } else {
//     alert("Введено не всі данні");
//   }
//   console.log(userName);
//   form.reset();
//   nameSpan.textContent = "Anonymous";
// });

//Завдання 4:

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const decreaseButton = document.querySelector(".js-decrease");

// const increaseButton = document.querySelector(".js-increase");

// const box = document.querySelector(".box");

// decreaseButton.addEventListener("click", () => {
//   let currentWidth = box.offsetWidth;
//   let currentHeight = box.offsetHeight;
//   currentWidth -= 20;
//   currentHeight -= 20;
//   box.style.width = `${currentWidth}px`;
//   box.style.height = `${currentHeight}px`;
// });

// increaseButton.addEventListener("click", () => {
//   let currentWidth = box.offsetWidth;
//   let currentHeight = box.offsetHeight;
//   currentWidth += 20;
//   currentHeight += 20;
//   box.style.width = `${currentWidth}px`;
//   box.style.height = `${currentHeight}px`;
// });
