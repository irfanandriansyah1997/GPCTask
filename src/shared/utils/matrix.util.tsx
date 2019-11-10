/**
 * Matrix Multiply Calculator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.10
 */
export const MatrixMultiplyCalculatorUtil = (matrix1: number[][], matrix2: number[][]): number[][] => {
    const result: number[][] = [];

    for (let i = 0; i < matrix1.length; i += 1) {
        result[i] = [];

        for (let j = 0; j < matrix2[0].length; j += 1) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k += 1) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
};

/**
 * Matrix Add Operator Calculator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.10
 */
export const MatrixAddCalculatorUtil = (matrix1: number[][], matrix2: number[][]): number[][] => (
    matrix1.map((item1: number[], index1: number) => (
        item1.map((item2: number, index2) => item2 + matrix2[index1][index2])
    ))
);
