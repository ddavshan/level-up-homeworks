'use strict';
// Task 1
var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 префиксная форма переназначает переменную и возвращает ее новое значение
d = b++; alert(d); // 1 постфиксная форма переназначает переменную, но возвращает ее старое значение

c = (2+ ++a); alert(c); // 5 префиксная форма переназначает переменную и возвращает ее новое значение, выполняется сложение
d = (2+ b++); alert(d); // 4 постфиксная форма переназначает переменную, но возвращает ее старое значение, выполняется сложение

alert(a); // 3 префиксная форма два раза переназначила переменную
alert(b); // 3 постфиксная форма два раза переназначила переменную

// Task 2
var a = 2;

var x = 1 + (a *= 2);
// x = 1 + (2 * 2) = 5

// Task 3
var a = 2;
var b = 4;

var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
console.log(b);

// Вычисление в первых скобках: b = 9, переменная 'b' переназначена
// Вычисляется умножение: 2 * 9, переменная 'a' передает в скобки 3
// Выполняется первое вычитание: 9 - 18 = - 9
// Выполняется второе вычитание: - 9 - 3 = - 12
// Вычисляются вторые скобики: 9 - (3 + 1 - (3 - 1)) = 7, переменная 'b' переназначена
// Вычисляется 'c': - 12 + 7 = - 5
