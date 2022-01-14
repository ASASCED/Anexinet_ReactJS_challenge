// Function to to find transpose of a matrix
const transpose = (matrix) => {
  // Get the length of the first row
  const rowLength = matrix[0].length;

  // Create a new array to store the transposed matrix
  const transposedMatrix = [];

  // Loop through the matrix and push the values to the new array
  for (let i = 0; i < rowLength; i++) {
    transposedMatrix.push([]);

    // Loop through the matrix and push the values to the new array
    for (const arr of matrix) {
      transposedMatrix[i].push(arr[i]);
    }
  }

  return transposedMatrix;
};

console.log(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);
