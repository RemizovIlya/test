'use strict'; // директива означает что мы пишем на стандарте ES6

// a = 5;
// console.log(a); // пример ошибки старого стандарта

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let something;
console.log(4/0);
console.log('string'*9);
console.log(something)

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name) // or // console.log(person["name"]);

// массив содержащий перечень фотографий

let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[2]);

// общение с пользователем

//alert("Hello world!"); // окно уведомление\предупреждение
//let answer = confirm("Are you here"); // окно с выбором ок или отмена
console.log(answer);

let answer2 = prompt("Есть ли вам 18?", "Да");
console.log(typeof(answer2)); // typeof указывает нам тип данных
console.log(typeof(arr)); // выдаст тип object, т.к массив это частный случай объекта
console.log(typeof(null)); // выдаст тип object

// -------------------------------
// ОПЕРАТОРЫ
// -------------------------------
console.log("arr" + " - object"); // конкатенация
console.log(4 + " - object");

let answer3 = +prompt("Есть ли вам 18?", "Да"); // унарный + перед prompt превратит строку в число
console.log(typeof(answer3));

// префиксные и постфиксные операторы
let incr = 10,
    decr = 10;

incr++;
decr--;
console.log(incr);
console.log(decr);
//
console.log(++incr);
console.log(decr--);
// % остаток от деления двух чисел
console.log(5%2);
// = присваивание, == равенство, === строгая проверка по типу данных
console.log("2" == 2); // true
console.log("2" === 2); // false
//
let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(!isChecked)




