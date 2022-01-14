// Function that swaps two numbers without using temporary variables

const swap = (a, b) => {
  // Swap the values of a and b
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
};

console.log(swap(4, 3));
