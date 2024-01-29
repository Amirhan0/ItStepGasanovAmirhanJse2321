// let x = +prompt("Введите свой возраст") ---------------------- Задание первое


// if (x <= 2) {
//     alert('Ребенок')
// }
// if (x >= 12, x <= 18) {
//     alert('Подросток')
// }
// if (x >= 18, x <= 60) {
//     alert('Взрослый')
// }
// else {
//     alert('Пенсионер')
// }

// let x = +prompt('Введите число 0-9') ------------- Задание второе

// switch (x) {
//     case 0:
//         alert('скобка')
//         break;
//     case 1:
//         alert(' !')
//         break;
//     case 2:
//         alert(' @')
//         break;
//     case 3:
//         alert(' #')
//         break;
//     case 4:
//         alert(' %')
//         break;
//     case 5:
//         alert(' ^')
//         break;
//     case 6:
//         alert(' &')
//         break;
//     case 7:
//         alert(' &')
//         break;
//     case 8:
//         alert(' (')
//         break;
//     case 9:
//         alert(' )')
//         break;

//     default: 
//     alert("Вы ввели не то число")
//         break;
// }



// let str = prompt('Введите число'); ----------- задание третье, использовал массивы
// str = Array.from(str);
// alert(str.some((v,i,a) => str.lastIndexOf(v) != i ) ? 'Есть' : 'Нет');



// let myYear = +prompt('Введите год'); ------ задание четвертое 
// let realDate = new
//     Date(myYear, 1, 29).getDate();
// if (realDate == 29)
//     alert('Да высокосный');
// else alert('Нет');



// let num = +prompt("введите пятиразрядное число") ------- задание пятое
// let a1, a2, b1, b2

// a1 = parseInt(num / 10000)
// b1 = parseInt(num / 1000 % 10)
// b2 = parseInt(num / 10 % 10)
// a2 = parseInt(num % 10)

// if (a1 === a2 && b1 === b2) {
//     alert('Это число является полиндромом')
// }
// else (
//     alert('Это число не является полиндромом')
// )


// let usd = +prompt('Введите количество USD') ----------- задание шестое
// let eur = usd * 1.09
// let azn = usd * 1.70
// let uan = usd * 7.10
// console.log(`Сумма в евро ${parseInt(eur)}`,`Сумма в манатах ${parseInt(azn)}`,`Сумма в юанях ${parseInt(uan)}`)



// function specialCharacter() { ---------- задание седьмое
//     let num = prompt('Введите сумму покупки');
//     if (num < 200)
//         alert(num);
//     else if (num >= 200 && num < 300)
//         alert(num - num / 100 * 3);
//     else if (num >= 300 && num < 500)
//         alert(num - num / 100 * 5);
//     else if (num >= 500)
//         alert(num - num / 100 * 7);
// }



// const circleLength = parseFloat(+prompt("Площадь круга:")); ------------- задание восьмое
// const squarePerimeter = parseFloat(+prompt("Периметр квадрата:"));

// const circleRadius = circleLength / 2;
// const squareSideLength = squarePerimeter / 4;
// const fitsInside = 2 * circleRadius <= squareSideLength;
// if (fitsInside) {
//     alert("Круг поместился");
// } else {
//     alert("Не поместился.");
// }




// let v1 = +prompt('Сколько мне лет?') -------- задание девятое
// let v2 = +prompt('Какого года я рождения?')
// let v3 = +prompt('В какой день я родился?')

// if (v1 === 18 && v2 === 2006 && v3 === 20) {
//     alert(`Правильно, вы заработали в сумме 6 баллов`)
// }
// else if (v1 != 18 && v2 != 2006 && v3 != 20)
//     alert('Вы заработали в сумму 4 балла')

// else {
//     alert('Не правильно, вы не заработали не одного балла')
// }


// let month = parseInt(+prompt('Введите месяц')) --------- задание десятое
// let day = parseInt(+prompt('Введите день'))
// let year = parseInt(+prompt('Введите год'))


// let visYear;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     visYear = true 

// }
// else {
//     visYear = false
// }


// let maxDays;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         maxDays = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         maxDays = 30;
//         break;
//     case 2:
//         maxDays = visYear ? 29 : 28;
//         break;
//     default:
//         alert("Некорректный месяц");
//         break;
// }


// if (day < 1 || day > maxDays) {
//     alert("Некорректный месяц");
// }
// else {
//     if (day === maxDays) {
//         if (month === 12) {
//             day = 1;
//             month = 1;
//             year++;
//         } else {
//             day = 1;
//             month++;
//         }
//     } else {
//         day++;
//     }
// }

// alert(`Следующая дата: ${day}.${month}.${year} ${visYear} `);







// ------------------------------------------------------------------ - Функции

// let x1 = prompt('Введите первое число') ---- задание третье
// let x2 = prompt('Введите второе число')
// let x3 = prompt('Введите третье число')


// function result(x1,x2,x3) {

//     let sum = x1 + x2 + x3
//     alert(Number(sum))

// }


// result(x1,x2,x3)



// let x = +prompt('Введите секунды') ---------- второе задание десятое

// let y = Math.floor(x / 60 / 60)

// let z = Math.floor(x / 60) - (y * 60)

// let h = x % 60


// let result = y + ':' + z + ':' + h;


// result = [
//     y.toString().padStart(2, '0'),
//     z.toString().padStart(2, '0'),
//     h.toString().padStart(2, '0')
// ].join(':');


// alert(result)


// let x = +prompt("Введите часы")
// let y = +prompt("Введите минуты")
// let z = +prompt("Введите секунды")


// function seconds(x,y,z) {
//     return (x * 3600) + (y * 60) + z
// }

// alert(seconds(x,y,z))


// let num1 = +prompt('Введите первое число')
//     let num2 = +prompt('Введите второе число')

//     function result(a, b) {
//         if (a < b) {
//             alert(-1)
//         }
//         else if (a > b) {
//             alert(1)
//         }
//         else if (a === b) {
//             alert(0)
//         }
//     }

//     result(num1, num2)