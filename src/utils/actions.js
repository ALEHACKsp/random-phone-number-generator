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

export const maxGeneratedNumber = (generatedNumber) => {
  console.log({generatedNumber})
   const maxNumber = Math.max(...generatedNumber);
   return maxNumber;
};

