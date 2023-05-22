/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (!password) return 0;
  if (typeof password !== "string") password = String(password);

  //
  let points = 0;
  //regular expression to test for Sequences of 2 characters/numbers
  const regexTestForTwoCharacters = /(\w)\1{1}/g;

  //regular expression to test for Sequences of 3 or more characters/numbers
  const regexTestForThreeAndMoreCharacters = /(\w)\1{2,}/g;

  //check the sequence of 3 and more characters
  if (regexTestForThreeAndMoreCharacters.test(password)) return (points = 2);

  //check the sequence of 2 characters
  if (regexTestForTwoCharacters.test(password)) {
    //check if the occurrence of two characters is present more than once
    const matches = password.match(regexTestForTwoCharacters);
    if (matches && matches.length > 1) return (points = 2);

    //else give penalty points of 1
    return (points = 1);
  }

  return points;
}
