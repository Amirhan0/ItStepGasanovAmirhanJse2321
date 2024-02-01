// let a = +prompt('начало')  - задание первое
// let b = +prompt('конец')
// let sum = 0

// while(a <= b){       
//        sum+=a;  
//        a++;
//     }

// alert(sum)


// let a = +prompt('Первое число') - Задание второе
// let b = +prompt('Второе число')

// while (a != 0 & b != 0) {
//     if (a > b) {
//         a = a % b
//     }
//     else {
//         b = b % a
//     }
// }

// console.log(a + b)



// let x1 = +prompt('число') - заадание третье
// let result = x1

// while (0 < result) {
//     if (x1 % result === 0) {
//         console.log(result)
//     }
//     result--
// }   


// let x = prompt('число'); - задание четвертое

// console.log(x.length);



// let numBer = +prompt('Введите десять чисел') - сделал но не до конца пятое

// let even = 0
// let odd = 0


// while (numBer > 0) {

//     if (numBer % 2 == 0) {
//         even += 1
//     }
//     else {
//         odd -= 1
//         numBer = numBer % 10
//     }
// }



// do { --------- задание шестое
//     let numBer1 = +prompt('Введите первое число');
//     let numBer2 = +prompt('Введите второе число');
//     let result = prompt('Выберите знак - \n + \n / \n *');

//     switch (result) {
//         case '+':
//             alert(numBer1 + numBer2);
//             break;
//         case '-':
//             alert(numBer1 - numBer2);
//             break;
//         case '/':
//             alert(numBer1 / numBer2);
//             break;
//         case '*':
//             alert(numBer1 * numBer2);
//         default:
//             break;
//     }

// } while (confirm('Хотите ли вы решить еще один пример?'));


// let count = prompt('Введите число','') -- задание седьмое
// let step = +prompt('На сколько сдвинуть', '0')
// arr = count.split('');

// for(let i = 0; i < step; i++) {
//   arr.push(arr.shift())
// }
// alert(arr.join``);



// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] - задание восьмое
// let day = 0


// while (confirm(`${days[day]}. Хотите увидеть следующий день`)) {
//     day = (day + 1) % days.length
// }



// for (i=2; i <= 10; i++) { 
//     for (j=2; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log('\n');
//     }