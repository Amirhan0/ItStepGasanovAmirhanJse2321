// const input = document.querySelector("#search");
// const list = document.querySelectorAll("#search-results li");

// input.addEventListener("input", function() {
//     const value = input.value.trim().toLowerCase();

//     list.forEach((elem) => {
//         const text = elem.textContent.toLowerCase();
//         const index = text.indexOf(value);

//         if (index !== -1) {
//             const highlightedText = elem.textContent.substring(0, index) +
//                                     '<span class="highlight">' +
//                                     elem.textContent.substring(index, index + value.length) +
//                                     '</span>' +
//                                     elem.textContent.substring(index + value.length);
//             elem.innerHTML = highlightedText;
//         } else {
//             elem.innerHTML = elem.textContent;
//         }
//     });
// });
// let nameUser = Sergei ;
// let str = nameUser + "hello";
// nameUser[0] = "E"; // нельзя
// let s = nameUser[0]; // можно
// console.log(str);

// let str = 'Hi';

// str = 'h' + str[1]; // заменяем строку

// alert( str ); // hi

// let str = "Каждый охотник желает знать"; - задание первое
// let arrNew = [];
// function stringToarray(str) {
//   arrNew = str.split(" ");
//   return arrNew;
// }

// let arr = stringToarray(str);

// console.log(arr);

// let str = 'Каждый охотник желает знать' ----- задание второе
// let strArr = [];
// function delete_characters(str, length) {
//     strArr = str.slice(8,9)

//     return strArr;
// }

// console.log(delete_characters(str,7))

// let str = "HTML JavaScript PHP"; --- задание третье
// let str2 = "";
// function insert_dash(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       str2 += '-';
//     }
//     else {
//         str2 += str[i];
//     }
//   }
//   return str2;
// }

// console.log(insert_dash(str)); //

// let str = "string not starting with capital"; - задание четвертое
// let strNew = "";
// function cursive_letter(str) {
//     strNew = str.chartAt(0).toUpperCase() + str.slice()

//     return strNew;
// }
// console.log(str);

// let str = "каждый охотник желает знать";  - задание пятое
// function capitalize(str) {

//     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})

//    }
// console.log(capitalize(str));

// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"; - задание шестое

// function change_register(str) {
// let strNew = ''
// let str2 = str.length
// for(i = 0; i < str2; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         strNew += str[i].toUpperCase()
//     }
//     else {
//         strNew += str[i].toLowerCase()
//     }
// }
// return strNew
// }

// console.log(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"

// function zeros(num, len) { - 7777777777777777
//   let numStr = num.toString();
//   let sign = "";
//   if (numStr[0] === "+" || numStr[0] === "-") {
//     sign = numStr[0];
//     numStr = numStr.substring(1);
//   }
//   while (numStr.length < len) {
//     numStr = "0" + numStr;
//   }
//   return sign + numStr;
// }
// console.log(zeros(145, 5, "-")); // -00145
// console.log(zeros(33, 4, "+")); // +0033
// console.log(zeros(33, 4));

// function comparison(str1, str2) {  --- задание 8
//    let result = str1.toUpperCase() === str2.toUpperCase()
//    return result
// };

// console.log(comparison('string', 'StRiNg')); // true
// console.log(comparison('ABCDe', 'AbcdW'));   // false

// function initCap(str) { - 9
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
//   }
//   return words.join("");
// }

// console.log(initCap(str));

// function initSnake(str) { - 10
//   let snakeCase = "";
//   for (i = 0; i < snakeCase.length; i++) {
//     let current = str[i];
//     if (current >= "A" && current <= "Z" && i > 0) {
//       snakeCase = "+";
//       snakeCase += current.toLowerCase();
//     } else {
//       snakeCase += current.toLowerCase();
//     }
//   }
//   return snakeCase;
// }

// console.log(initSnake("HelloWorld"));
