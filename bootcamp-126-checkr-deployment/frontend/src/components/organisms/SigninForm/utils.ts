export function LoginValidation(email: string, password: string): boolean {
  const testEmail = emailValidator(email)
  const testPassword = passwordValidator(password)
  return testEmail && testPassword
}
export function emailValidator(email: string): boolean {
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
  const isEmailValid = emailRegex.test(email)
  return isEmailValid
}

export function passwordValidator(password: string): boolean {
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
  const isPasswordValid = passwordRegex.test(password)
  return isPasswordValid
}
