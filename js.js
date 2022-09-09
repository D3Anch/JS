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
