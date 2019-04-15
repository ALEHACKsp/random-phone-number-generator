/**
 * Generates random phone numbers
 * @param {number} number
 *
 * @returns {Array}
 */
export const generateNumber = (number) => {
  const generatedNumbers = [];

  for (let i = 0; i < number; i++) {
    generatedNumbers.push(`0${Math.floor(100000000 + Math.random() * 900000000)}`);
  }

  return generatedNumbers;
};

/**
 * Gets the max number generated
 * @param {Array} generatedNumber
 *
 * @returns {number}
 */
export const maxGeneratedNumber = (generatedNumber) => {
  return Math.max(...generatedNumber);
};

/**
 * Gets the min generated number
 * @param {Array} generatedNumber
 *
 * @returns {number}
 */
export const minGeneratedNumber = (generatedNumber) => {
  return Math.min(...generatedNumber);
};

/**
 * Sorts numbers in an ascending order
 * @param {Array} numbers
 *
 * @returns {Array}
 */
export const sortByAscending = (numbers) => {
  return generateNumber.sort((a,b) => (a-b));
}
