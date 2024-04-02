/* This regular expression is used to validate passwords with specific criteria.
Passwords must contain at least one lowercase letter, one uppercase letter,
one special character (!@#$%^&*), and be at least 8 characters long.*/
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/
// This regular expression is used to validate email addresses.
export const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

export const NAME_REGEX = /^[a-z ,.'-]+$/i
export const validateString = (text: string, regex: RegExp) => {
  return regex.test(text)
}

export const validateSignInPassword = (password: string) => password !== ''

export const validatePassword = (password: string) =>
  validateString(password, PASSWORD_REGEX)
export const validateEmail = (email: string) =>
  validateString(email, EMAIL_REGEX)

export const validateName = (name: string) => validateString(name, NAME_REGEX)
