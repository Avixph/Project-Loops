//Use a loop to display the numbers 9 to 0 in descending order.
function descending(num) {
  numDescend = [];
  for (let i = num; i >= 0; i--) {
    numDescend.push(i);
  }
  return numDescend;
}
console.log(descending(9));
