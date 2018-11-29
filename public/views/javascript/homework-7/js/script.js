'use strict';

// Task 4.4.1
// let user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;

// Task 4.5.1
// function isEmpty (obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// var schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "подъём";

// alert( isEmpty(schedule) ); // false

// Task 4.5.2
// var salaries = {
//   'Вася': 100,
//   'Петя': 300,
//   'Даша': 250
// };

// function salariesSum (obj) {
//   let sum = 0;

//   for (let key in obj) {
//     sum += obj[key];
//   } 
//   return sum;
// }

// console.log(salariesSum(salaries));

// Task 4.5.3
// var salaries = {
//   'Вася': 100,
//   'Петя': 300,
//   'Даша': 250
// };

// function maxObjKey (obj) {
//   let max = 0;
//   let result = 'нет сотрудников';
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       result = key;
//     } 
//   } 
//   return result;
// } 

// console.log(maxObjKey(salaries));

// Task 4.5.4
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function isNumeric (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric (obj) {
//   for (let key in obj) {
//     if (isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(multiplyNumeric(menu));

// ADDITIONAL TASKS
// Reverse the given string
// (function () {
//   function reverseStr (str) {
//     let newStr = str[str.length - 1];

//     for (let i = str.length - 2; i >= 0; i -= 1) {
//       newStr += str[i];
//     } 

//     return newStr;
//   }
//   console.log(reverseStr('Some string')); // -> 'gnirts emoS'
// }());

// Compare two objects
// This function must return true if two objects refer to the same object or they refer to different objects but have the same keys number and their corresponding values are equal. The function must work with unlimited nestend objects. You can use "book" object with different set of properties to test.

// function countObjKeys (obj) {
//   let sum = 0;

//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       sum += countObjKeys(obj[key]);
//     }

//     sum += 1;
//   }

//   return sum;
// }

// function compareObj (obj1, obj2) {
  
//   if (obj1 === obj2) {
//     return true;
//   }

//   if (countObjKeys(obj1) !== countObjKeys(obj2)) {
//     return false;
//   }
  
//   for (let key in obj1) {
//     if (typeof obj1[key] === 'object') {
//       if (!compareObj (obj1[key], obj2[key])) {
//         return false;
//       }
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(compareObj(
//   { key: 'Value' },
//   { key: 'Value' }
// )); // -> true
// console.log(compareObj(
//   { key: 'Value' },
//   { key: 'Value 1' }
// )); // -> false
// console.log(compareObj(
//   { key: 'Value', nested: { key: 'Value' } },
//   { key: 'Value', nested: { key: 'Value' } }
// )); // -> true
// console.log(compareObj(
//   { key: 'Value', nested: { key: 'Value' } },
//   { key: 'Value 1', nested: { key: 'Value' } }
// )); // -> false

// Draw an area
// Draw an area N wide and N height like it the example below. Use ' @ ' and ' - '.
// (function () {
//   function drawAnArea (N) {
//     let a = '@';
//     let b = '-';
//     let c = a;
//     let d = a;

//     for (let i = 1; i < N - 1; i += 1) {
//       c += ('  ' + a);
//       d += ('  ' + b);
//       if (i === N - 2) {
//         c += ('  ' + a);
//         d += ('  ' + a);
//       }
//     }

//     for (let j = 1; j <= N; j += 1) {
//       if (j === 1 || j === N) {
//         console.log(j + '  ' + c);
//       } else {
//         console.log(j + '  ' + d);
//       }
//     }
//   }
//   drawAnArea(8); // -> http://prntscr.com/jpobhn
// }());

// Strings comparison
// Check whether two strings have the same set of chars. Return true if they are equal length and have the same set of chars no matter at which index those chars are

// function toObj (str) {
//   let obj = {};

//   for (let i = 0; i < str.length; i += 1) {
//     let key = str[i];

//     if (!obj[key]) {
//       obj[key] = true;
//     }
//   }

//   return obj;
// }


// function compareStr (str1, str2) {
//   if (str1.length !== str2.length) {

//     return false;
//   } else {
//     let obj1 = toObj(str1);
//     let obj2 = toObj(str2);

//     for (let key in obj1) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }      
//     }
//     return true;
//   }
// }
  
// console.log(compareStr('clock', 'lockc'));
// console.log(compareStr('tree', 'three'));
// console.log(compareStr('mttudd', 'dutmtd'));
