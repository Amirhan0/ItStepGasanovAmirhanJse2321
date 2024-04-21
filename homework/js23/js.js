// 1 Задание //

// function flattenArray(arr) {
//   return arr.flat(2);
// }

// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray));

// 2 Задание //

// const flattenObject = (obj, parentKey = "") => {
//   let result = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       let newKey = parentKey ? `${parentKey}.${key}` : key;
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         Object.assign(result, flattenObject(obj[key], newKey));
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }
//   return result;
// };

// const obj = {
//   a: {
//     b: {
//       c: 1,
//       d: 2,
//     },
//     e: 3,
//   },
//   f: 4,
// };

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);

// 3 Задание //

// function anagramma(arr) {
//     let obj = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       if (obj[sorted]) {
//         obj[sorted].push(arr[i]);
//       } else {
//         obj[sorted] = [arr[i]];
//       }
//     }
  
//     return Object.values(obj);
//   }
  
//   let arr = ["nap", "teachers"];
  
//   console.log(anagramma(arr));
  