// function compareNumbers() { -- задание первое
//     let num1 = parseFloat(prompt("Введите первое число:"));
//     let num2 = parseFloat(prompt("Введите второе число:"));

//     if (isNaN(num1) || isNaN(num2)) {
//         return "Ошибка: Пожалуйста, введите числа.";
//     }

//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let comparisonResult = compareNumbers();
// console.log("Результат сравнения:", comparisonResult);

// let num = +prompt('число') - задание второе
// function factorial(x) {
//     if (x === 0) {
//       return 1;
//    }
//     return x * factorial(x-1);

//   }
//  console.log(factorial(num)); 


// let num1 = prompt('1') --- задание третье

// let num2 = prompt('2')

// let num3 = prompt('3')

// function chislo(x1) {
//    return x1
// }

// console.log(chislo((num1 + num2 + num3)))


// let longUser = +prompt('Введите длину') --- задание  четвертое
// let widthUser = +prompt('Введите ширину')

// function calc() {
//     if (longUser && widthUser) {
//         return longUser * widthUser
//     }
//     else if (widthUser) {
//         return widthUser * widthUser
//     }
//     else if (longUser) {
//         return longUser * longUser
//     }


// }

// console.log(calc())




// function isPerfectNumber() { -------- задание пятое
//     let number = parseInt(prompt("Введите число:"));

//     if (isNaN(number) || number <= 0) {
//         return "Ошибка: Пожалуйста, введите положительное число.";
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// // Пример использования функции:
// let inputNumber = isPerfectNumber();

// if (inputNumber) {
//     console.log("Введенное число является совершенным.");
// } else {
//     console.log("Введенное число не является совершенным.");
// }


// function isPerfectNumber(number) { --- chatgpt pomog zadanie 6
//     if (number <= 0) { 
//         return false;
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// function perfectNumbersInRange(min, max) {
//     let perfectNumbers = [];

//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i);
//         }
//     }

//     return perfectNumbers;
// }

// // Пример использования функции:
// const minRange = parseInt(prompt("Введите минимальное значение диапазона:"));
// const maxRange = parseInt(prompt("Введите максимальное значение диапазона:"));

// if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
//     console.log("Ошибка: некорректные значения диапазона.");
// } else {
//     const perfectNumbers = perfectNumbersInRange(minRange, maxRange);
//     if (perfectNumbers.length === 0) {
//         console.log("В указанном диапазоне нет совершенных чисел.");
//     } else {
//         console.log("Совершенные числа в диапазоне [" + minRange + ", " + maxRange + "]:", perfectNumbers);
//     }
// }



// let hours = prompt('Введите часы') -- задание 7
// let minuts = prompt('Введите минуты')
// let seconds = prompt('Введите секунды')

// function time(x) {
//     return x
// }
// console.log(time(`Наше время ${hours}:${minuts}:${seconds}`))





// hours = +prompt('часы'); - задание 8
// minuts = +prompt('минуты');
// seconds = +prompt('секунды');
// function seconds (a,b,c) {
// return (h * 3600) + (m * 60) + s
// }
// alert(seconds(h,m,s))



// let x = +prompt('Введите секунды') - задание 9

// function calcTime() {
//     let y = Math.floor(x / 60 / 60)

//     let z = Math.floor(x / 60) - (y * 60)

//     let h = x % 60

//     let result = y + ':' + z + ':' + h;
// }

// result = [
//     y.toString().padStart(2, '0'),
//     z.toString().padStart(2, '0'),
//     h.toString().padStart(2, '0')
// ].join(':');

// 10 ne sdelal, ne osilil 


