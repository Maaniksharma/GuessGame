/**
 * Generates a random number between the specified minimum and maximum values, excluding a specific number.
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @param {number} exclude - The number to be excluded from the generated random number.
 * @returns {number} - The generated random number.
 */
export default function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  if (exclude != false && randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}
