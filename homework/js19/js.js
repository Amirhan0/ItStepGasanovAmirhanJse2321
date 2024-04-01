// class Calculator { - CALC
//   constructor() {
//     this.display = document.querySelector(".display");
//   }

//   appendToDisplay(value) {
//     this.display.value += value;
//   }

//   clearDisplay() {
//     this.display.value = "";
//   }
//   calculatorResult() {
//     try {
//       this.display.value = eval(this.display.value);
//     } catch (error) {
//       this.display.value = 'ошибка'
//     }
//   }
// }

// const calc = new Calculator(  )

// class Board { - XO
//   constructor() {
//     this.cells = Array(9).fill(null);
//     this.render();
//   }

//   render() {
//     const boardElement = document.getElementById("board");
//     const cells = boardElement.querySelectorAll(".cell");
//     cells.forEach((cell, index) => {
//       cell.textContent = this.cells[index] || "";
//       cell.addEventListener("click", () => this.handleMove(index));
//     });
//   }

//   handleMove(index) {
//     if (this.cells[index] === null && !game.isGameOver()) {
//       this.cells[index] = game.currentPlayer.symbol;
//       game.switchPlayer();
//       this.render();
//       if (game.isGameOver()) {
//         const winner = game.getWinner();
//         if (winner) {
//           alert(`Player ${winner.symbol} wins!`);
//         } else {
//           alert("It's a draw!");
//         }
//       }
//     }
//   }
// }

// class Player {
//   constructor(symbol) {
//     this.symbol = symbol;
//   }
// }

// class Game {
//   constructor() {
//     this.board = new Board();
//     this.players = [new Player("X"), new Player("O")];
//     this.currentPlayer = this.players[0];
//   }

//   switchPlayer() {
//     this.currentPlayer =
//       this.currentPlayer === this.players[0]
//         ? this.players[1]
//         : this.players[0];
//   }

//   isGameOver() {
//     return (
//       this.board.cells.every((cell) => cell !== null) ||
//       this.getWinner() !== null
//     );
//   }

//   getWinner() {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8], // rows
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8], // columns
//       [0, 4, 8],
//       [2, 4, 6], // diagonals
//     ];

//     for (const combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (
//         this.board.cells[a] !== null &&
//         this.board.cells[a] === this.board.cells[b] &&
//         this.board.cells[a] === this.board.cells[c]
//       ) {
//         return this.currentPlayer;
//       }
//     }

//     return null; // no winner
//   }
// }

// const game = new Game();

// class FormValidator { ---- validation
//   constructor(form) {
//     this.form = form;
//     this.inputs = Array.from(form.querySelectorAll("input"));
//     this.errors = [];
//     this.setupListeners();
//   }

//   setupListeners() {
//     this.inputs.forEach((input) => {
//       input.addEventListener("blur", () => {
//         this.validateInput(input);
//       });
//     });

//     this.form.addEventListener("submit", (event) => {
//       if (!this.validateForm()) {
//         event.preventDefault();
//         this.showErrors();
//       }
//     });
//   }

//   validateInput(input) {
//     if (input.value.trim() === "") {
//       this.setError(input, "Это поле обязательно для заполнения.");
//     } else {
//       this.clearError(input);
//     }
//   }

//   validateForm() {
//     this.errors = [];
//     this.inputs.forEach((input) => {
//       this.validateInput(input);
//     });
//     return this.errors.length === 0;
//   }

//   setError(input, message) {
//     this.errors.push({ input, message });
//     input.classList.add("error");
//   }

//   clearError(input) {
//     this.errors = this.errors.filter((error) => error.input !== input);
//     input.classList.remove("error");
//   }

//   showErrors() {
//     this.errors.forEach((error) => {
//       const errorElement = document.createElement("div");
//       errorElement.textContent = error.message;
//       errorElement.classList.add("error-message");
//       error.input.parentNode.appendChild(errorElement);
//     });
//   }
// }
// const form = document.getElementById("myForm");
// const validator = new FormValidator(form);
