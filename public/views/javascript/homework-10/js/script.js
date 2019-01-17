'use strict';

// Task 5.1.1
// 1. Created var a = undefined
// 2. a in window is true
// 3. We entered if and a = 1

// Task 5.1.2
// 1. a without var does't create
// 2. we don't enter in if
// 3. result is error

// Task 5.1.3
// 1. Created var a = undefined on 4 line
// 2. a in window is true
// 3. We entered if and a = 1



// Task 5.2.1
// We have function say and phrase = undefined in window so result of say('Вася') on 1 line will be "Вася, undefined"

// Task 5.2.2
// In LE function f exist var value = undefined.
// We enter in if and rewrite var value = true, external var value doesn't use.
// Without var value doesn't exist inside LE function f.
// We look for it by scope outsite function and rewrite external var value.

// Task 5.2.3
// We have local var 'window' in LE of function.
// 3 line will alert undefined.
// 7 line will alert 5.

// Task 5.2.4 
// I'm also didn't notice mistake ';'. And didn't understand phrase 'он пытается вызвать функцию 5'. How it is work:
// 5(function() {
//   alert(a)
// })()

// Task 5.2.5
// Will be used only local var currentCounter

// Task 5.2.6
// Result will be 1, 2, 3, 4 because both counters use the same global var currentCount.
