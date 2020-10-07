//Write a function computing the factorial of n.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(`The factorial of ${2} is ${factorial(2)}.`);
console.log(`The factorial of ${4} is ${factorial(4)}.`);
console.log(`The factorial of ${6} is ${factorial(6)}.`);
console.log(`The factorial of ${8} is ${factorial(8)}.`);
console.log(`The factorial of ${10} is ${factorial(10)}.`);
