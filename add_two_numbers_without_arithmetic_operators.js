// Function to add two numbers without using arithmetic operators
function Add(x, y) {
  if (y === 0) return x;
  // If y is odd, add x to the result of the function call with y - 1
  else return Add(x ^ y, (x & y) << 1);
}

console.log(Add(1, 200));
