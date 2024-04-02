/* This regular expression is used to validate passwords with specific criteria.
Passwords must contain at least one lowercase letter, one uppercase letter,
one special character (!@#$%^&*), and be at least 8 characters long.*/
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const validateString = (text: string, regex: RegExp) => {
  return regex.test(text)
}

export const validateSignInPassword = (password: string) => password !== ''

export const validateEmail = (email: string) =>
  validateString(email, EMAIL_REGEX)
