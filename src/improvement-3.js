/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(numbers) {
  //check if the numbers parameter is an array or empty. If so return null
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  // largest number in the array
  return Math.max(...numbers);
}
