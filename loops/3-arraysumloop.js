//arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,
//for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5, 6]));

num = [1, 2, 3, 4, 5, 6];
const numSum = num.reduce(function (accumulator, value) {
  return accumulator + value;
});
console.log(numSum);
