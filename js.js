'use strict'
// Переменные
// let number = 5;
// const leftBorderWidth = 1;
//
// number = 10;
// console.log(number);
//
// {
//     var result = 50;
// }
//
// console.log(result);
//
// Типы данных
//
// const num = 4.6;
// console.log(4/0);
// console.log('string' * 9);
//
// const persone = 'Alex';
// const user = 'Ivan';
// console.log(`${persone} ${user}`);
//
// const bool = true;
//
// console.log(something);
//
// let und;
// console.log(und);
//
// const user = {
//     name: 'Ivan',
//     age: 22,
//     isMan: true
// };
//
// console.log(user.name);
// console.log(user['age']);
//
// const arr = ['user1', 'user2', 'user3'];
//
// console.log(arr);
// console.log(arr[1]);
//
// console.log(typeof arr);
//
//
// Массивы и объекты
//
// const arr = ['a', 'b', 'c'];
// console.log(arr[2]);
//
// const obj = {
//     Anna: 500,
//     'Alice': 800
// };
// console.log(obj.Anna);
//
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };
// arrObj['3'] = 'd'
// console.log(arrObj)
//
//
// const b = 'b';
// const arrObj = {
//     a: 'a',
//     b: 'b',
//     c: 'c',
//     abc: {
//         def: {
//             dev: 'Dmitriy',
//             user: 'Alex'
//         },
//         nonDef: {
//           user: 'Ivan',
//           user1: 'Stepan'
//         }
//     }
// };
//
// arrObj[b] = '1234';
//
// console.log(arrObj['b']);
// console.log(arrObj.b);
//
//
// const arr = [ 'a', 'b', 'c'];
// // arr[10] = '3456';
// arr.push('3456');
// console.log(arr);
//
//
// Alert
//
// alert('Hello');
// const resultExit = confirm('Вы желаете выйти?');
// console.log(resultExit);
// const resultAge = +prompt('Сколько вам лет?', '22');
// console.log(typeof(resultAge));
// console.log(resultAge);
//
// const answers = [];
// answers.push(prompt('Введите ваше имя:', ''));
// answers.push(prompt('Введите вашу фамилию:', ''));
// answers.push(+prompt('Введите ваш возраст:', ''));
// console.log(typeof(answers));
//
//
// Интерполяция
//
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`)
//
// const user = 'Ivan';
// alert(`Привет, ${user}`)
//
//
// Операторы JS
//
// console.log(4 + +'5');
//
// let incr = 10,
//     decr = 10;
//
// ++incr;
// --decr;
// console.log(incr++);
// console.log(decr--);
// console.log(++incr);
// console.log(--decr);
//
// console.log(2+2*2 != '8');
//
// const isChecked = true,
//     isClose = true,
//     isLox = false;
// console.log(isChecked && !isLox);
//
//
// Git
//
// git config --global user.name 'Anch'
// git config --global user.email d3toony@gmail.com
//
// git config --local user.name 'Anch'
// git config --local user.email d3toony@gmail.com
//
// git add -A
// git commit -a -m''
// git push
// git pull
// git cd ..
//
//
// Практика №1. Консольное приложение
//
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//
// };
//
// const firstMovieName = prompt('Один из последних просмотренных фильмов?', ''),
//       firstMovieGrade = +prompt('На сколько оцените?', ''),
//       secondMovieName = prompt('Один из последних просмотренных фильмов?', ''),
//       secondMovieGrade = +prompt('На сколько оцените?', '');
//
// personalMovieDB.movies[firstMovieName] = firstMovieGrade;
// personalMovieDB.movies[secondMovieName] = secondMovieGrade;
// console.log(personalMovieDB);
//
//
// Условия
//
// if (1) {
//     console.log('This is true')
// } else {
//  console.log('This is false')
// }
//
// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('ok')
// }
//
// const num = 50;
// (num === 50) ? console.log('ok') : console.log('error');
//
// const num = 51;
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//             console.log('Неверно');
//             break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('В другой раз');
//         break;
// };
//
// Логические операторы
//
// const hamburger = 5;
// const fries = 6;
//
// if (hamburger && fries) {
//     console.log('Товар доступен');
// } else {
//     console.log('Товар недоступен');
// }
//
// const hamburger = 2;
// const fries = 1;
//
// if (hamburger === 3 && fries) {
//     console.log('Заказ возможен');
// } else {
//     console.log('Заказ невозможен');
// }
//
//
// const hamburger = 3;
// const fries = 6;
// const cola = 0;
//
// console.log(hamburger || cola || fries);
//
// const a = '';
// const b = 1;
// console.log(a ?? b);
//
// const hamburger = 3;
// const fries = 3;
// const cola = 2;
//
// if (hamburger || cola || fries) {
//     console.log('Заказ возможен');
// } else {
//     console.log('Заказ невозможен');
// }
//
// console.log(hamburger || cola || fries);
//
// let johnReport, alexReport, samReport, mariaReport = 'done';
//
// console.log(johnReport || alexReport || samReport || mariaReport);
//
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
//
// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Заказ возможен');
// } else {
//     console.log('Заказ невозможен');
// }
//
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
//
//
// Циклы
//
// let num = 50;
// while (num < 55) {
// console.log(num);
//     num++;
// }
//
// do {
//     console.log(num);
//     num++;
// } while (num < 55);
//
// for (let i = 1; i > 0; i++) {
//     if (i === 6) {
//         // break;
//         continue
//     }
//     if (i === 1000) {
//         break;
//         // continue
//     }
//     console.log(i);
// }
//
//  for (let i = 0; i < 3; i++) {
//  console.log(i)
//      for (let j = 0; j < 3; j++) {
//          console.log(j)
//          for (let k = 0; k < 3; k++) {
//              console.log(k)
//          }
//      }
// }
//
//
// let result = '';
// const length = 33;
// for ( let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++){
//         result += '*'
//     }
//     result +='\n';
// }
// console.log(result);
//
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`)
//     for ( let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`)
//         for ( let k = 0; k < 3; k++) {
//             if (k === 2) {
//                 break first;
//             }
//             console.log(`Second level: ${k}`)
//         }
//     }
// }
//
// Практика №2
//
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//
// };
//
// if (personalMovieDB.count <= 10 && personalMovieDB.count >= 1) {
//     console.log('Просмотрено довольно мало фильмов')
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель')
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман')
// } else {
//     console.log('Произошла ошибка')
// }
//
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените?', '');
//
//           if (a!== null && b != null && a != '' && b != '' && a.length < 50) {
//               personalMovieDB.movies[a] = b;
//               console.log('Finish')
//           } else {
//               console.log('Error');
//               i--;
//           }
// }
//
// console.log(personalMovieDB);
//
//
// Функции
//
//
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text)
//     const num = 10;
// }
//
// showFirstMessage('Hello');
// console.log(num)
//
// function calc(a, b) {
//     return a+b;
// }
//
// console.log(calc('a', 'b'))
//
// function ret() {
//     const number = 12
//     return number
// }
//
// const anoutherNum = ret();
// console.log(anoutherNum)
//
// const logger = function() {
// console.log('Hello')
// }
//
// logger();
//
//
// const calc = (a, b) =>{
//     console.log('1')
//     return a + b
// }
//
//
// const usdCurr = 28;
// const euroCurr = 27;
//
// function convert(amount, curr) {
//     console.log(curr * amount)
// }
//
// convert(500, usdCurr)
// convert(500, euroCurr)
//
//
// const usdCurr = 28;
// const discount = 0.9;
// function convert(amount, curr) {
//     return amount * curr;
//
// }
//
// function promotion(result) {
//     console.log(result * discount);
// }
//
// const res = convert(500, usdCurr)
// promotion(res);
//
// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//         if (i === 3) return
//     }
//     console.log('Finish')
// }
//
// test()
//
// function doNothing() {}
// console.log(doNothing() === undefined);
//
// Методы строк и чисел
//
// const str = 'Test'
// const arr = [1, 2, 5,]
// console.log(str.length)
// console.log(arr.length)
// console.log(str.toLowerCase())
//
// const fruit = 'Some fruit';
//
// console.log(fruit.indexOf('fruit'))
//
// const logg = 'Hello, world'
//
// console.log(logg.slice(7, 12))
// console.log(logg.substring(7, 12))
// console.log(logg.substr(7, 5))
//
// const num = 12.3;
// console.log(Math.round(num))
//
// const test = '12.2px';
// console.log(parseInt(test))
// console.log(parseFloat(test))
//
//
// Практика №3
//
//
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function start() {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count === 0) {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
//
// start()
//
// function detectPersonalLvl() {
//     if (personalMovieDB.count <= 10) {
//         console.log('Просмотрено довольно мало фильмов')
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель')
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман')
//     } else {
//         console.log('Произошла ошибка')
//     }
// }
//
// detectPersonalLvl()
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = +prompt('На сколько оцените?', '');
//
//         if (a && b && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Finish')
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }
//
// rememberMyFilms()
//
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
// }
//
// // function showMyDB() {
// //  if (personalMovieDB.privat === false) {
// //      console.log(personalMovieDB)
// //  }
// // }
//
// showMyDB(personalMovieDB.privat)
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
//
// writeYourGenres()
//
// Метод trim()
//
// str.trim()
//
// CallBack функция
//
// function first() {
//     //
//     setTimeout(function () {
//         console.log(1);
//     }, 1000)
// }
//
// function second() {
// console.log(2)
// }
//
// first();
// second();
//
// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback()
// }
//
// function done() {
//     console.log('Я прошел этот урок')
// }
//
// learnJS('JavaScript', done);
//
//
// Объект
//
//  const options = {
//     name: 'Test',
//     width: 1024,
//      height: 1024,
//      colors: {
//         border: 'black',
//          bg: 'red'
//      },
//      makeTest: function () {
//         console.log('Test')
//      }
//  }
//
//  const {border, bg} = options.colors
//
// console.log(bg, border)
//
// options.makeTest();
//
//  console.log(options.name)
//
// delete options.name;
//
// console.log(options)
//
// let counter = 0;
//
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for ( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}` )
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }
//
// for (let key in options) {
//     counter++
// }
//
// console.log(counter)
//
// console.log(Object.keys(options).length)
//
// const User3294812912 = {
//     firstName: 'Ewan',
//     lastName: 'Chils',
//     age: 18,
//     isStudent: true,
//     city: 'Verdansk',
//     family: {
//         mom: {
//             name: 'Anna',
//             age: 45
//         },
//         father: {
//             name: 'Stewe',
//             age: 48
//         }
//
//     }
// }
//
// console.log(Object.keys(User3294812912).length)
//
// Массивы и псевдомассивы
//
// const arr = [1, 34, 2, 23, 5, 7, 9];
//
// arr.pop();
//
// console.log(arr)
//
// arr.push(10);
//
// console.log(arr)
//
// arr.shift()
//
// console.log(arr)
//
// arr.unshift(0.3)
//
// console.log(arr)
//
// console.log(arr.length)
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
//
// for (let value of arr) {
//     console.log(value)
// }
//
// arr[99] = 0;
//
// console.log(arr.length)
// console.log(arr)
//
// arr.forEach(function(item, index, arr) {
// console.log(`${index}: ${item} внутри массива ${arr}`)
// });
//
// const str = prompt('', '')
// const products = str.split(', ')
// products.sort()
// console.log(products.join('; '))
//
// arr.sort(function compareNum(a, b) {
//     return a-b
// })
// console.log(arr)
//
// Передача данных по ссылке или по значени
//
// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(b)
// console.log(a)
//
// const obj = {
//     a: 5,
//     b: 1
// }
//
// const copy = obj;
//
// copy.a = 10
//
// console.log(copy)
// console.log(obj)
//
// function copy(mainObj) {
//     let objCopy = {}
//      let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }
//     return objCopy
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }
//
// const newNumbers = copy(numbers)
// newNumbers.a = 10;
// newNumbers.c.x = 10
// console.log(newNumbers)
// console.log(numbers)
//
//
// const add = {
//     d: 17,
//     e: 20
// }
//
// const clone =  Object.assign({}, add)
// clone.d = 20
// console.log(add)
// console.log(clone)
//
// const oldArr = ['a', 'b', 'c']
// const newArr = oldArr.slice()
//
// newArr[1] = 'asdaedas'
// console.log(newArr)
// console.log(oldArr)
//
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']
//
// console.log(internet)
//
// function log(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//
// const num = [2, 5, 7, 8]
//
// log(...num)
//
// const array = ['a', 'b']
// const newAaray = [...array]
//
// const q = {
//     one: 1,
//     two: 2
// }
//
// const newObject = {...q}
// console.log(newObject)
//
// Основы ООП
//
// let str = 'some'
// let strObj = new String(str)
//
// console.log(typeof(str))
// console.log(typeof(strObj))
//
// console.dir([1, 2, 3])
//
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello')
//     }
// }
// const john = Object.create(soldier)
//
// const John = {
//     health: 100
// }
//
// John.__proto__ = soldier;
// Object.setPrototypeOf(John, soldier)
//
// john.sayHello()
//
//
// Практика №4
//
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() { personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count === 0) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//
//     detectPersonalLvl: function(){
//         if (personalMovieDB.count <= 10) {
//             console.log('Просмотрено довольно мало фильмов')
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//             console.log('Вы классический зритель')
//         } else if (personalMovieDB.count > 30) {
//             console.log('Вы киноман')
//         } else {
//             console.log('Произошла ошибка')
//         }
//     },
//
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                 b = +prompt('На сколько оцените?', '');
//
//             if (a && b && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('Finish')
//             } else {
//                 console.log('Error');
//                 i--;
//             }
//         }
//     },
//
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++){
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные')
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//
//             personalMovieDB.genres.forEach((item, i) => {
//                 console.log(`Любимый жанр ${i + 1} - это ${item}`);
//             })
//         }
//     },
//
//     showMyDB: function() {
//         if (!personalMovieDB.privat) {
//             console.log(personalMovieDB)
//         }
//     },
//
//     toggleVisibleMyDB: function() {
//         personalMovieDB.privat = personalMovieDB.privat === false;
//     }
// }

// personalMovieDB.start()
//
// personalMovieDB.detectPersonalLvl()
//
// personalMovieDB.rememberMyFilms()
//
// personalMovieDB.writeYourGenres()
//
// personalMovieDB.showMyDB()
//
// personalMovieDB.toggleVisibleMyDB()
//
//
// Динамическая типизация
//
// To String
// console.log(typeof(String(null)))
// console.log(typeof(null + ''))
//
// const num = 5
// console.log('https://vk.com/catalog/' + num)
//
// const fontSize = 26 + 'px';
//
// to Number
//
// console.log(typeof(Number('4')))
// console.log(typeof(+'5'))
// console.log(typeof(parseInt('15px', 10)))
//
// let answ = +prompt('Введите число')
//
// to Boolean
//
// 0, null, '', undefined, NaN == false
//
// let switcher = null
//
// if (switcher) {
//     console.log('Working...')
// }
//
// switcher = 1
//
// if (switcher) {
//     console.log('Working...')
// }
//
//
// console.log(typeof(Boolean('4')))
// console.log(typeof(!!'4444444'))
//
// Замыкание и Лексическое окружение
//
// let number = 5; debugger
//
// function logNumber() {
//     let number = 4; debugger
//     console.log(number)
// }
//
// number = 6
//
// logNumber(); debugger
//
// function createCounter() {
//     let counter = 0
//
//     const myFunction = function() {
//         counter = counter + 1
//         return counter
//     }
//
//     return myFunction
// }
//
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
//
// console.log(c1, c2, c3)
//
// Задачи на собесах
//
// let x = 5;
// console.log(x++)
// console.log(x)
//
// console.log([] + false + null + true)
// console.log([]+1+2)
// const a = [1, 2, 3]
// const b = [1, 2, 3]
// console.log('1'[0])
// console.log(2 && 1 && null && 0 && undefined)
// console.log(!!(a && b))
// console.log(a && b)
// console.log(null || 2 && 3 || 4)
// console.log(a == b)
// console.log(+'Infinity')
// console.log('Ежик' < 'яблоко')
// console.log(0 || '' || 2 || undefined || true || false)
//
//
// Работа со страницей
//
// const box = document.getElementById('box')
// console.log(box)
//
// const btns = document.getElementsByTagName('button')
//
// console.log(btns[3])
// console.log(btns[1])
//
// const circles = document.getElementsByClassName('circle')
// console.log(circles)
//
// const hearts = document.querySelectorAll('.heart')
// // console.log(hearts)
// hearts.forEach(item => {
//     console.log(item)
// })
//
// const oneHeart = document.querySelector('.heart')
// console.log(oneHeart)
//
//
// const box = document.getElementById('box')
// const btns = document.getElementsByTagName('button')
// const circles = document.getElementsByClassName('circle')
// const hearts = document.querySelectorAll('.heart')
// const OneHeart = document.querySelector('.heart')
// const wrapper = document.querySelector('.wrapper')
//
// box.style.backgroundColor = 'blue'
// box.style.width = '500px'
//
// box.style.cssText = 'background-color: blue; width: 500px'
//
// btns[1].style.borderRadius = '100%'
// circles[0].style.backgroundColor = 'red'
//
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'Blue'
// }
//
// hearts.forEach(item => {
//     item.style.backgroundColor = 'Blue'
// })
//
const div = document.createElement('div')
// const test = document.createTextNode('Ekasmfdas kasmdaskdma aksmdaslkdm')
//
div.classList.add('black')
// document.body.append(div)
// document.querySelector('.wrapper').append(div)
//
wrapper.append(div)
// wrapper.appendChild(div)
// wrapper.prepend(div)
// hearts[0].after(div)
//
// wrapper.insertBefore(div, hearts[0])
//
// circles[0].remove()
// circles.removeChild(hearts[1])
//
// hearts[0].replaceWith(circles[0])
//
// wrapper.replaceChild(hearts[0], circles[0])
//
// div.innerHTML = '<h1>Hello World</h1>'
// div.textContent = 'Hulk'
//
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')
//