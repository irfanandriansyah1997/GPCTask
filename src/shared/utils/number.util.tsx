/**
 * Round number
 * @param {number} x
 * @param {number} n
 */
export const RoundNumberUtil = (x: number, n: number): number => parseFloat(parseFloat(
    `${Math.floor(x * Math.pow(10, n)) / Math.pow(10, n)}`
).toFixed(n));
