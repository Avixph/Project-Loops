//Write a function using a for loop that returns the sum of all
//numbers from 1 to n.
function sumOf(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOf(25));
