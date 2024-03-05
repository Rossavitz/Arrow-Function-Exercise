// function double(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }

const double = (arr) => arr.map((num) => num * 2);

const squareAndFindEvens = (arr) =>
  arr.map((num) => num ** 2).filter((square) => square % 2 === 0);
