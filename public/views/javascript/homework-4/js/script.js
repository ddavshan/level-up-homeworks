'use strict';

// Task 15.1
// var i = 3;

// while (i) {
//   alert( i-- );
// }
// Последним выведенным значением будет 1, так как при i = 0 в цикле получается значение false и цикл останавливается.

// Task 15.2
// var i = 0;
// while (++i < 5) alert(i);
// 1, 2, 3, 4

// var i = 0;
// while (i++ < 5) alert( i );
// 1, 2, 3, 4, 5 Пять выводится так как ++ возвращет для сравнения исходное значение, а потом записывает текущее, то есть, доходя до 5, происходит сраснение 4 и 5, и пятерка выводится.

// Task 15.3
// for (var i = 0; i < 5; i++) alert(i);
// взяли начальное значение 0, сравниваем 0 < 5, увеличили
// взяли начальное значение 1, сравниваем 1 < 5, увеличили
// взяли начальное значение 2, сравниваем 2 < 5, увеличили
// взяли начальное значение 3, сравниваем 3 < 5, увеличили
// взяли начальное значение 4, сравниваем 4 < 5, увеличили
// взяли начальное значение 5, сравниваем 5 < 5, цикл завершился 5 не вывели

// for (var i = 0; i < 5; ++i) alert(i);
// аналогично, оператор for сначало сравнивает, потом видоизменяет переменную, выводется все точно так же

// Task 15.4
// for (var i = 2; i <= 10; i += 2)
// console.log(i);

// for (var i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Task 15.5
// var i = 0;
// while (i < 3) {
//   alert("номер " + i + "!");
//   i += 1;
// }

// Task 15.6
// var value;
// do {
//   value = prompt('Введите число, большее 100:', '');
// } while (value <= 100 && value !== null)

// Task 15.7
// Логика вычисления:
// Перебираем пошагово все значения от 2 до 10
// На каждом шаге нужно проверить делится ли число на какое-либо предыдущее так, чтоб не было остатка
// Если остатка нет - пропускаем число

// nextPrime:
//   for (var i = 2; i <= 10; i += 1) {
//     for (var j = 2; j < i; j += 1) {
//       if (i % j === 0) {
//         continue nextPrime;
//       }
//     }
//     console.log(i);
//   }

// Код подсмотрел в решении.
// 2 вывелась из строки 66 где мы назначили i = 2.
// Логика работы метки в том, что как только мы нашли во внутреннем цикле число, которое разделилось без остатка, continue срабатывает как пропуск этой итерации для внешнего цикла.

// Task 16.1
// switch (browser) {
//   case 'IE':
//     alert('О, да у вас IE!');
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Да, и эти браузеры мы поддерживаем');
//     break;

//   default:
//     alert('Мы надеемся, что и в вашем браузере все ок!');
// }

// My code:
// var browser = prompt('Какой у вас браузер?', '');

// if (browser === 'IE') {
//   alert('О, да у вас IE!');
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert('Да, и эти браузеры мы поддерживаем');
// } else {
//   alert('Мы надеемся, что и в вашем браузере все ок!');
// }

// Task 16.2
// var a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// My code:
// var a = +prompt('a?', '');

// switch (a) {
//   case 0: {
//     alert(0);
//     break;
//   }

//   case 1: {
//     alert(1);
//     break;
//   } 

//   case 2:
//   case 3: {
//     alert('2,3');
//     break;
//   } 
// }

// Task 17.1
// function checkAge (age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }

// else не обязательно. При правдивом значении мы попадаем в if и выполняется return true, если мы не попадаем в if выполняется 144 строка.

// Task 17.2
// function checkAge (age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// using '?'
// var age = prompt('Enter your age:', '')
// function checkAge (age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }
// checkAge(age);

// using '||'
// var age = prompt('Enter your age:', '')
// function checkAge (age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(age);

// Task 17.3
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// using '?'
// function min (a, b) {
//   return (a < b) ? a : b;
// }

// without '?'
// function min (a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Task 17.4
// function pow (x, n) {
//   var result = x;
//   var i;
//   for (i = 1; i < n ; i += 1) {
//     result *= x;
//   }
//   return result;
// }

// var x = prompt('Enter the X:', '');

// if (isNaN(x)) {
//   do {
//     x = prompt('X should be a number:', '');
//   } while(x !== null && isNaN(x));
// }

// if (x === null) {
//   alert('Calculation is canceled.');
// } else {
//   var n = prompt('Enter the N:', '')

//   while(n !== null && (isNaN(n) || +n < 1)) {
//     n = prompt('Enter positive integer N:', '');
//   }

//   if (n === null) {
//     alert('Calculation is canceled.');
//   } else {
//     alert(x + ' in ' + n + ' degree is ' + pow(x, n));
//   }
// }
