'use strict';

// Task 4.9.1
// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];

// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

// alert( arrLength ); // 4,5,2,5

// Solution
// var arr = ['Есть', 'жизнь', 'на', 'Марсе'];

// var arrLength = arr.map(function (value) {
//   return value.length;
// });

// console.log(arrLength);

// Task 4.9.2
// let arr = [1, 2, 3, 4, 5];

// function sumValues (arr) {
//   let result = [];
//   let sum = arr.reduce(function (sum, current) {
//     result.push(sum);    
//     return sum + current;
//   });

//   result.push(sum);
//   return result;  
// };

// console.log(sumValues(arr));

// ---> My own 'every'&'some'
// var arr = [-1, -2, 0];

// function isPositive (number) {
//   return number > 0;
// }

// function every (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!callback(arr[i])) {

//       return false;
//     }
//   }

//   return true;
// }

// console.log(every(arr, isPositive));

// function some (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i])) {

//       return true;
//     }
//   }

//   return false;
// }

// console.log(some(arr, isPositive));

// ---> My own 'filter'
// var arr = [1, -1, 2, -2, 3, 2];

// function checkCondition (number) {
//   return number > 0;
// }

// function filter (arr, callback) {
//   let newArr = [];

//   arr.forEach(function (item) {
//     if (callback(item)) {
//       newArr.push(item);
//     }
//   });

//   return newArr;
// }

// console.log(filter(arr, checkCondition));

// ---> My own 'map'
// var arr = ['HTML', 'CSS', 'JavaScript'];

// function callback (arg) {
//   return arg.length;
// }

// function map (arr, callback) {
//   let newArr = [];

//   arr.forEach(function (item) {
//     newArr.push(callback(item));
//   });

//   return newArr;
// }

// console.log(map(arr, callback));

// --> My own 'reduce' some day later
