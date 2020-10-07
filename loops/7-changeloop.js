//Using any loop, Given a string change t=the every second letter to
//an uppercase ‘Z’.Assume there are no spaces.
//Let string = “donuts”
//Expected output => dZnZtZ
function letterChange(str) {
  let split = str.split("");
  let secondletter = 2;
  let replace = "Z";
  for (let i = secondletter - 1; i < split.length - 1; i += secondletter) {
    split[i] = replace;
  }
  return split.join("");
}
console.log(letterChange("donuts"));
console.log(letterChange("macarons"));
