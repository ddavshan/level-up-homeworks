'use strict';

// Task 4.7.1
// let goods = [];
// let lastItem = goods[goods.length - 1];

// Task 4.7.2
// let goods = [];
// goods.push('Компьютер');

// console.log(goods);

// Task 4.7.3
// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// styles[styles.length - 2] = 'Классика';
// alert(styles.shift(0));
// styles.unshift('Рэп', 'Регги');

// console.log(styles);

// Task 4.7.4
// let arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
// let rand = Math.floor(Math.random() * arr.length); // >>> DO YOU UNDERSTAND WHY RANDOM INTEGER IS GENERATED THIS WAY? WHY floor()? >>> this formula is given in condition: var rand = min + Math.floor(Math.random() * (max + 1 - min)); I don't undersrtand how it is work, I just used it. 
  
// console.log(arr[rand]);

// Task 4.7.5
// let arr = [];
// let sum = 0;

// while (true) {
//   let a = prompt('Enter number:');
//   if (a === null || a === '' || isNaN(a)) {
//     break
//   }
//   arr.push(+a);
// }

// for (let j = 0; j < arr.length; j += 1) {
//   sum += arr[j];
// }

// console.log(sum);

// Task 4.7.6
// 5 and 5 because arr and arr2 are the same object

// Task 4.7.7
// let arr = ["test", 2, 1.5, false, NaN];

// function find (arr, value) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === value) {
//       return i;
//     } else if (isNaN(value)) {
//       if (isNaN(arr[i]) && typeof(arr[i]) !== 'string') {
//         return i;
//       }
//     }
//   }
//   return -1;
// }

// console.log(find(arr, "test")); // 0
// console.log(find(arr, 2)); // 1
// console.log(find(arr, 1.5)); // 2
// console.log(find(arr, 0)); // -1
// console.log(find(arr, NaN)); // 4

// Task 4.7.8
// var arr = [5, 4, 3, 8, 0];

// function filterRange (arr, a, b) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] >= a && arr[i] <= b) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(filterRange(arr, 3, 8));

// Task 4.7.9
// let arr = [];

// for (let i = 2; i <= 100; i += 1) {
//   arr[i] = i;
// }

// let p = 2;

// do {
//   for (let j = p + 1; j < arr.length; j += 1) {
//     if (arr[j] % p === 0) {
//       arr[j] = 0;
//     }
//   }
//   p += 1;
// } while (p * p < arr.length - 1);

// let sum = 0;

// for (let i = 2; i < arr.length; i += 1) {
//   sum += arr[i];
// }

// console.log(sum);

// Task 4.7.10
// solve later

// Task 4.8.1 
// var obj = {
//   className: 'open menu'
// }

// function addClass (obj, cls) {
//   let arr = obj.className.split(' ');

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === cls) {
//       return;
//     }
//   }

//   arr.push(cls);
//   obj.className = arr.join(' ');

//   return obj;
// }

// addClass(obj, 'new');
// console.log(obj);

// addClass(obj, 'open');
// console.log(obj);

// addClass(obj, 'me');
// console.log(obj);

// Task 4.8.2
// function camelize (str) {
//   let arr = str.split('-');

//   for (let i = 1; i < arr.length; i += 1) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }

//   return arr.join('');
// }

// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// Task 4.8.3
// var obj = {
//   className: 'open menu menu'
// }

// function removeClass (obj, cls) {
//   let arr = obj.className.split(' ');

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === cls) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }

//   obj.className = arr.join(' ');

//   return obj;
// }

// removeClass(obj, 'menu');
// console.log(obj);

// Task 4.8.4
// let arr = [5, 3, 8, 1, 15, 7, 4, 11, 29, 17, 10];

// function filterRangeInPlace (arr, a, b) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
// }

// filterRangeInPlace(arr, 5, 15);
// console.log(arr);

// Task 4.8.5
// var arr = [5, 2, 1, -10, 8];

// function compareNumeric (a, b) {
//   return b - a;
// }

// arr.sort(compareNumeric);
// console.log(arr);

// Task 4.8.6
// my solution
// var arr = ["HTML", "JavaScript", "CSS"];

// function arrSorted (arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     newArr[i] = arr[i];
//   }

//   newArr.sort();
//   return newArr;
// }

// console.log(arrSorted(arr));
// console.log(arr);

// book solution is better
// var arr = ["HTML", "JavaScript", "CSS"];

// var arrSorted = arr.slice().sort();

// console.log(arrSorted);
// console.log(arr);

// Task 4.8.7
// var arr = [1, 2, 3, 4, 5];

// function compareRandom (a, b) {
//   return Math.random() - 0.5;
// }

// arr.sort(compareRandom);
// console.log(arr);

// Task 4.8.8
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [vasya , masha , vovochka];

// function compareAge (a, b) {
//   return a.age - b.age;
// }

// people.sort(compareAge);
// console.log(people);

// let peoplesAge = [];

// for (let i = 0; i < people.length; i += 1) {
//   peoplesAge[i] = people[i].name;
// }

// console.log(peoplesAge);

// Task 4.8.9
// solve later


// Task 4.8.10
// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// function aclean (arr) {
//   let obj = {};
//   let result = [];
//   let key;

//   for (let i = 0; i < arr.length; i += 1) {
//     key = arr[i].toLowerCase().split('').sort().join('');
//     if (!obj[key]) {
//       obj[key] = arr[i];
//     } 
//   }

//   for (key in obj) {
//     result.push(obj[key]);
//   }

//   return result;
// }

// console.log(aclean(arr));

// Task 4.8.11
// function unique (arr) {
//   let obj = {};
//   let key;

//   for (let i = 0; i < arr.length; i += 1) {
//     key = arr[i];
//     obj[key] = key;
//   }

//   return Object.keys(obj);
// }

// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// console.log(unique(strings)); // кришна, харе, 8-()
