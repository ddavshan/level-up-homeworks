'use strict';

// Task 5.4.1
// function sum (a) {
//   return function (b) {
//     return a + b;
//   }
// }

// console.log(sum(-5)(10));

// Task 5.4.2
// function makeBuffer (value) {
//   let str = '';

//   return function (value) {
//     if (arguments.length === 0) {
//       return str;
//     }
//     return str += value;
//   }
// }

// var buffer = makeBuffer();

// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');

// console.log(buffer()); // Замыкания Использовать Нужно!

// Task 5.4.3
// function makeBuffer (value) {
//   let str = '';

//   function buffer (value) {
//     if (arguments.length === 0) {
//       return str;
//     }
//     str += value;
//   }

//   buffer.clear = function () {
//     str = '';
//   }
//   return buffer;
// }

// let buffer = makeBuffer();

// buffer("Тест");
// buffer(" тебя не съест ");
// console.log(buffer()); // Тест тебя не съест

// buffer.clear();

// console.log(buffer()); // ""

// Task 5.4.4
// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField (field) {
//   return function(a, b) {
//     return a[field] > b[field] ? 1 : -1;
//   }
// }

// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Маша, Вася, Петя

// Task 5.4.5
// function filter (arr, func) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (func(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// function inBetween (a, b) {
//   return function (c) {
//     return c >= a && c <= b;
//   };
// }

// function inArray (arr) {
//   return function (c) {
//     return arr.indexOf(c) !== -1;
//   };
// }


// var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6

// console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

// console.log(filter(arr, inArray([1, 2, 10]))); // 1,2

// Task 5.4.6
// function makeArmy() {

//   let shooters = [];

//   for (let i = 0; i < 10; i += 1) {
//     function shooter () {
//       console.log(shooter.i);
//     };
//     shooter.i = i;
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();
// console.log(army);
// army[0]();
// army[5]();


// Task 6.1.1
// this it is all array, we add method wich shows 'this', so the result will be whole array

// Task 6.1.2
// var obj = {
//   go: function() {
//     alert(this)
//   }
// }

// (obj.go)() // error!
// almoust understand

// Task 6.1.3
// Шикарные задачи!!! Бомбануло просто, давайте ка вы подумаете над механикой работы того, что мы не удосужились объяснить нигде ранее и обясним только в решении, да еще так, что вообще нифига не понятно.

// Task 6.1.4
// Шикарные задачи!!! Бомбануло просто, давайте ка вы подумаете над механикой работы того, что мы не удосужились объяснить нигде ранее и обясним только в решении, да еще так, что вообще нифига не понятно.

// Task 6.1.5
// var name = "";

// var user = {
//   name: "Василий",

//   export: function() {
//     return this;
//   }

// };

// alert( user.export().name );

// export() = user => user.user.name = 'Василий';

// Task 6.1.6
// var name = "";

// var user = {
//   name: "Василий",

//   export: function() {
//     return {
//       value: this
//     };
//   }

// };

// alert( user.export().value.name ); //'Василий'
// understand

// Task 6.1.7
// var calculator = {
  
//   read: function () {
//     this.firstNumber = +prompt('Enter the first number:');
//     this.secondNumber = +prompt('Enter the second number:');
//   },

//   sum: function () {
//     return this.firstNumber + this.secondNumber;
//   },

//   mul: function () {
//     return this.firstNumber * this.secondNumber;
//   },

// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Task 6.1.8
// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up();
// console.log(ladder);
// ladder.up();
// ladder.down();
// ladder.showStep();

// ladder.up().up().down().up().down().showStep();
