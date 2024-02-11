// let arrayNumbers = [1, 5, 8, 9, 3, 2, 4, 8, 6, 0]; - задание первое
// function calculatorNumbers() {
//   let minNumbers = Math.min.apply(null,[1, 5, 8, 9, 3, 2, 4, 8, 6, 0]);
//   let maxNumbers = Math.max.apply(null,[1, 5, 8, 9, 3, 2, 4, 8, 6, 0]);
//   console.log(`Минимальное значение: ${minNumbers}\nМаксимальное значение: ${maxNumbers}`);
// }

// calculatorNumbers();

// let arrayNumbers = []; ---- задание второе

// for (i = 0; i < 5; i++) {
//   let inputNumbers = prompt("Введите числа" + (i + 1) + ":");
//   arrayNumbers.push(parseFloat(inputNumbers));
// }
// console.log("Массив:", arrayNumbers);
// let resulSumNumbers = 0;
// for (j = 0; j < arrayNumbers.length; j++) {
//   resulSumNumbers += arrayNumbers[j];
// }
// console.log("Сумма значений:", resulSumNumbers);

// let calculatorNumbers = resulSumNumbers / arrayNumbers.length;

// console.log("Среднее значение", calculatorNumbers);

// let arrayNumberOne = [3, 3, 4, 5, 6, 7, 1]; - задание третье
// let arrayNumberTwo = [4, 3, 6, 1, 9, 2, 0];

// for (i = 0; i < arrayNumberOne.length   ; i++) {
//     if (arrayNumberOne[i] === arrayNumberTwo[i]) {
//         console.log('Значение равны,', "равны", arrayNumberOne[i])
//     }
//     else {
//         console.log("Значения на позиции", i, "различаются:");
//         console.log("  В первом массиве:", arrayNumberOne[i]);
//         console.log("  Во втором массиве:", arrayNumberTwo[i]);
//     }
// }

// let arrayNumber = [2, 43, 4, 55, 6, 7, 8, 1, 32, 50]; --- задание четвертое
// let arrayNumberEven = [];

// for (i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] % 2 == 0 ) {
//         arrayNumberEven.push(arrayNumber[i])
//     }
// }
// console.log("Массив четных чисел:", arrayNumberEven);