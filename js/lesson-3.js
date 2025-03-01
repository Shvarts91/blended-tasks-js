// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]];

// const newNumbers = numbers[0].map((item) => Math.pow(item, 2));
// console.log(newNumbers);

// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const numbers = data.flatMap((item) => item.values);

// console.log(numbers);

// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const person = people.some((item) => item.age < 20);

// console.log(person);

// 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const newNumbers = numbers.every((item) => item % 2 === 0);
// console.log(newNumbers);

// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const num = numbers.find((item) => item % 2 !== 0);

// console.log(num);

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortArray = numbersArray.toSorted((a, b) => a - b);
// console.log(sortArray);

// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const sortArray = stringArray.toSorted();
// console.log(sortArray);

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const sortArray = users.toSorted((a, b) => a.age - b.age);
// console.log(sortArray);

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const usersNew = user.filter((item) => item.age > 20);
// console.log(usersNew);

// 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const number = numbers.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(number);

// 11
// Створи клас для калькулятора, який має такі методи:
// - метод number, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// class Calculate {
//   constructor() {
//     this.result = 0;
//   }

//   number(number) {
//     this.result = number;
//     return this;
//   }

//   add(number) {
//     this.result + number;
//     return this;
//   }

//   substruct(number) {
//     this.result - number;
//     return this;
//   }

//   divide(number) {
//     if (number === 0) {
//       return this;
//     }
//     this.result / number;
//     return this;
//   }

//   multiply(number) {
//     this.result * number;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }

// 12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor({ email, login }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }
// }

// 13

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// ##### Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   static identifier = 0;
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//     this.identifier = ++Employee.identifier;
//   }

//   getEmployeeDetails() {
//     return {
//       identifier: this.identifier,
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }
