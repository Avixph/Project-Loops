//Create a function that takes numbers 1 - 10 and console logs them.
//Use a for loop.
function counter(num1, num2) {
  let nums = [];

  for (let i = num1; i <= num2; i++) {
    nums.push(i);
  }
  return nums;
}
console.log(counter(1, 10));
