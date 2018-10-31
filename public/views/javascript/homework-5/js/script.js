'use strict';

// Task 2.19.1
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// using cycle
// function sumTo(n) {
//   for (var sum = n; n !== 1; n -= 1) {
//     sum += n - 1;
//   }
//   return sum;
// }

// console.log(sumTo(100));

// using recursion
// function sumTo(n) {
//   return n !== 1 ? (n + sumTo(n - 1)) : n;
// }

// console.log(sumTo(100));

// using formula
// function sumTo(n) {
//   var sum = n * (n + 1) / 2;
//   return sum;
// }

// console.log(sumTo(100));

// the fastest variant is last one, because it's use one mathematic action, the slowest is variant with recursion
// sumTo(100000) = Error, recursion has limited value of iterations

// Task 2.19.2
// function factorial(n) {
//   return n !== 1 ? (n * factorial(n - 1)) : n;
// }

// console.log(factorial(5));

// Task 2.19.3
// using cicle
// function fib(n) {
//   var value1 = 1;
//   var value2 = 1;

//   if (n < 3) {
//     return value1;
//   } else {
//     for (var i = 2; i < n; i += 1) {
//       var result = value1 + value2;
      
//       value1 = value2;
//       value2 = result;
//     }
//   } return result;
// }

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));
// console.log(fib(77));