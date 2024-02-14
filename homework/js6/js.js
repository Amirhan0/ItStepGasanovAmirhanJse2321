let a = "";
let b = "";
let op = "";
let arrNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const arrOperators = ["x", "+", "/", "-"];
const numbers = document.querySelector(".keys");
const vivod = document.querySelector(".unit");
const oper = document.querySelector(".operators");
const del = document.querySelector(".delete");
const equal = document.querySelector(".equals");


numbers.onclick = (e) => {
  if (arrNumbers.includes(e.target.textContent)) {
    if (op == "" && b == "") {
      a = a + e.target.textContent;
    } else {
      b = b + e.target.textContent;
    }
  }
  vivod.textContent = a + op + b;
};

oper.onclick = (e) => {
  if (arrOperators.includes(e.target.textContent)) {
    op = e.target.textContent;
  }
  vivod.textContent = a + op + b;
};

del.onclick = (e) => {
  if (b !== "") {
    b = b.slice(0, -1);
  } else if (op !== "") {
    op = "";
  } else {
    a = a.slice(0, -1);
  }
  vivod.textContent = a + op + b
};

equal.onclick = (e) => {
  let result;
  const numA = a;
  const numB = b;
  switch (op) {
    case "+":
      result = numA + numB;
      break;
    case "-":
      result = numA - numB;
      break;
    case "x":
      result = numA * numB;
      break;
    case "/":
      if (numB !== 0) {
        result = numA / numB;
      } else {
        result = "на нуль делить нельзя";
      }
      break;
    default:
      result = "Ошибка";
      break;
  }
  vivod.textContent = result;

  a = result.toString();
  b = "";
  op = "";
};
