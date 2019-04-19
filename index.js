/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const size = matrix.length;
    const rotatedMatrix = [];

    for (let i = 0; i < size; i++) {
        const line = [];
        for (let j = size - 1; j >= 0; j--) {
            line.push(matrix[j][i]);
        }
        rotatedMatrix.push(line);
    }

    for (let i = 0; i < size; i++) {
        matrix[i] = [...rotatedMatrix[i]];
    }
};

var input1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var input2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
var input3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotate(input3);

for (let k = 0; k < input3.length; k++) {
    console.log(input3[k]);
}
