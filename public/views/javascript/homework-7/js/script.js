'use strict';

// Task 4.3.1
// function ucFirst(str) {
//   str = str.charAt(0).toUpperCase() + str.slice(1);

//   return str;
// }

// alert(ucFirst('вася'));

// Task 4.3.2
// function checkSpam(str) {
//   let newStr = str.toLowerCase();

//   return !!((newStr.indexOf('viagra') + 1) || (newStr.indexOf('xxx') + 1));
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam('innocent rabbit'));

// Task 4.3.3
// function truncate (str, maxlength) {
//   if (str.length > maxlength) {
//     str = str.slice(0, maxlength - 3) + '...';

//     return str;
//   } return str;
// }

// alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

// Task 4.3.4
// let price = '$120';

// function extractCurrencyValue (str) {
//   return Number(str.slice(1));
// }

// console.log(extractCurrencyValue(price));

// Task 4.4.1
// let user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;

// Task 4.5.1
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   } return true;
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

// let sum = 0;

// function salariesSum (obj) {
//   for (let key in obj) {
//     sum += obj[key];
//   } return sum;
// }

// alert(salariesSum(salaries));

// Task 4.5.3
// var salaries = {
//   // 'Вася': 100,
//   // 'Петя': 300,
//   // 'Даша': 250
// };

// function maxObjKey (obj) {
//   let maxValue = 0;
//   let maxKey = 'нет сотрудников';
//   for (let key in obj) {
//     if (obj[key] > maxValue) {
//       maxValue = obj[key];
//       maxKey = key;
//     } 
//   } 

//   return maxKey;
// } 

// alert(maxObjKey(salaries));

// Task 4.5.4
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric (obj) {
//   for (let key in obj) {
//     if (isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);
// console.log(menu);

// ADDITIONAL TASKS
// Reverse the given string
// (function () {
//   function reverseString (string) {
//     let newString = '';

//     for (let i = 1; i <= string.length; i += 1) {
//       newString += string.slice(-i, -i + 1 === 0 ? undefined : -i + 1);
//     } 

//     return newString;
//   }
//   console.log(reverseString('Some string')); // -> 'gnirts emoS'
// }());

// Compare two objects
// This function must return true if two objects refer to the same object or they refer to different objects but have the same keys number and their corresponding values are equal. The function must work with unlimited nestend objects. You can use "book" object with different set of properties to test.
// (function () {
//   function compareObj (obj, comparingObj) {
//     let comparedObj = {};

//     for (let key in obj) {

//       if (typeof obj[key] === 'object') {
//         for (let key in comparingObj) {
//           if (typeof comparingObj[key] === 'object') {
//             obj[key] = compareObj(obj[key], comparingObj[key]);
//             comparingObj[key] = compareObj(obj[key], comparingObj[key]);
//           }
//         }
//       }

//       for (let key in comparingObj) {
//         obj[key] === comparingObj[key] ?
//         comparedObj[key] = true :
//         comparedObj[key] = false;
//       }
//     }

//     for (let key in comparedObj) {
//       if (!comparedObj[key]) {
//         return false;
//       }
//     } return true;
//   }

//   console.log(compareObj(
//     { key: 'Value' },
//     { key: 'Value' }
//   )); // -> true
//   console.log(compareObj(
//     { key: 'Value' },
//     { key: 'Value 1' }
//   )); // -> false
//   console.log(compareObj(
//     { key: 'Value', nested: { key: 'Value' } },
//     { key: 'Value', nested: { key: 'Value' } }
//   )); // -> true
//   console.log(compareObj(
//     { key: 'Value', nested: { key: 'Value' } },
//     { key: 'Value 1', nested: { key: 'Value' } }
//   )); // -> false
// }());

// Draw an area
// Draw an area N wide and N height like it the example below. Use ' @ ' and ' - '.
// (function () {
//   function drawAnArea (N) {
//     let a = ' @ ';
//     let b = ' - ';
//     let internalStringsAcc = a;
//     let externalStringsAcc = a;
     
//     for (let i = 1; i < N - 1; i += 1) {
//       internalStringsAcc += b;
//     }

//     for (let j = 1; j <= N; j += 1) {
//       if (j === 1 || j === N) {
//         for (let i = 1; i < N; i += 1) {
      
//           externalStringsAcc += a;
//         }

//         console.log(j + externalStringsAcc.slice(0, externalStringsAcc.length - 1));
//         externalStringsAcc = a;
//       } else {
//         console.log(j + internalStringsAcc + a.slice(0, 2));
//       }
//     }
//   }
//   drawAnArea(8); // -> http://prntscr.com/jpobhn
// }());

// Strings comparison
// Check whether two strings have the same set of chars. Return true if they are equal length and have the same set of chars no matter at which index those chars are

// function countSameChars (str) {
//   let obj = {};
//   let target = '';
//   let counter = 0;
//   let pos = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     target = str[i];

//     while (true) {
//       let foundPos = str.indexOf(target, pos);

//       if (foundPos === -1) break;

//       counter += 1;
//       pos = foundPos + 1;
//       obj[target] = counter;
//     }

//     counter = 0;
//     pos = 0;
//   } return obj;
// }

// (function () {
//   function compareStrings (str, comparingStr) {
//     let obj = countSameChars(str);
//     let comparingObj = countSameChars(comparingStr);
//     let comparedObj = {};

//     for (let key in obj) {
//       for (let key in comparingObj) {
//         obj[key] === comparingObj[key] ?
//         comparedObj[key] = true :
//         comparedObj[key] = false;
//       }
//     }

//     for (let key in comparedObj) {
//       if (!comparedObj[key]) {
//         return false;
//       }
//     } return true;
//   }
//   console.log(compareStrings('clock', 'lockc'));
//   console.log(compareStrings('tree', 'three'));
//   console.log(compareStrings('mttudd', 'dutmtd'));
// }());
