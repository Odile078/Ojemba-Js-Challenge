/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(numbers) {
  //check if the numbers parameter is an array or empty. If so return null
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  const largestNumber = numbers[0];

  return numbers.reduce((accumulator, currentValue) => {
    // Check if the currentValue is greater than the previousValue, accumulator
    if (currentValue > accumulator) return (accumulator = currentValue);

    // If the currentValue is not larger than the accumulator
    return accumulator;
  }, largestNumber);
}
