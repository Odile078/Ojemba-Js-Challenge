export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // Check if password is exactly 10 characters or digits
  if (password.length !== 10) return false;

  // Check if password contains only digits and letters
  if (!/^[0-9a-zA-Z]{10}$/.test(password)) return false;

  // Check if password contains special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

  // Check if password contains a mix of uppercase and lowercase characters
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) return false;

  // Check if password contains a sequence of directly ascending or descending digits
  if (
    !/^(?:(?!012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)[0-9a-zA-Z])+$/.test(
      password
    )
  )
    return false;

  // Check if password is one of the forbidden passwords
  if (forbiddenPasswords.includes(password)) return false;

  // Check if password consists of at least 4 different characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  // If all checks pass, the password is valid
  return true;
}
