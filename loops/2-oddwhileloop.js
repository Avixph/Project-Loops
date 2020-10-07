//Using a while loop, return an array that contains all
//odd numbers between 3 and 103.

function odds(num1, num2) {
  let oddArr = [];
  while (oddArr < 103) {
    for (let i = num1; i <= num2; i += 2) {
      oddArr.push(i);
    }
    return oddArr;
  }
}
console.log(odds(3, 103));
