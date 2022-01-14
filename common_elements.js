const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const b = [3, 2, 9, 3, 7, 11, 15, 13, 23, 27, 32, 35, 36, 37];
const c = [1, 3, 5, 7, 11, 13, 15, 17, 19, 21, 23, 27, 35, 37];
const d = [9, 17, 32, 7, 2, 3, 1, 45, 46, 47, 55, 60, 6, 17];

// Define a function to find the intersection of two or more arrays
const intersection = (...arrays) => {
  // Get all common elements
  return arrays.reduce((firstValue, secondValue) =>
    // Compare each element in the first array to the second array
    firstValue.filter((compare) => secondValue.includes(compare))
  );
};

console.log(intersection(a, b, c, d));
