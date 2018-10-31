'use strict';

// Task 4.2.1
// var a = +prompt('Enter first number:', '');
// var b = +prompt('Enter second number:', '');

// alert(a + b);

// Task 4.2.2
// alert(6.35.toFixed(25));

// because 6.35 in binary system is 6.3499999999999996447286321...

// Task 4.2.3
// var goodsPrice1 = '0.1$';
// var goodsPrice2 = '0.2$';

// function totalPrice (a, b) {
//   a = parseFloat(a) * 100;
//   b = parseFloat(b) * 100;
//   let c = (a + b) / 100;
//   return c;
// }

// alert(totalPrice(goodsPrice1, goodsPrice2) + '$');

// Task 4.2.4
// var i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// my code
// for (let i = 0; i < 10.5; i += 0.2) {
//   console.log(i);
// }

// value equal to 10 doesn't exist due to error in binary system

// Task 4.2.5
// function fib(n) {
//   var a = 1,
//     b = 0,
//     x;
//   for (i = 0; i < n; i++) {
//     x = a + b;
//     a = b
//     b = x;
//   }
//   return b;
// }

// my code
// function fibBinet(n) {
//   let phi = (1 + Math.sqrt(5)) / 2;

//   return Math.round(Math.pow(phi, n) / Math.sqrt(5));
// }

// alert(fibBinet(77));

// fib(77) !== fibBinet(77) because Math.sqrt(5) doesn't integer, right value in fib(77)

// Task 4.2.6
// var max;

// console.log(Math.random() * max);

// Task 4.2.7
// will solve later...maybe... too hard for me

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