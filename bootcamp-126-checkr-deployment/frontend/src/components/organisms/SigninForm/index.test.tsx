import { render, fireEvent, screen } from '@testing-library/react'
import Signin from '.'
import {
  SigninEmailPlaceholder,
  SigninPasswordPlaceholder,
  SigninSubtext,
} from '../../../utils/constants'

describe('Signin Component', () => {
  const signin = jest.fn()
  const singleSignOn = jest.fn()
  const forgotPassword = jest.fn()
  const signUp = jest.fn()
  test('renders the component without errors', () => {
    render(
      <Signin
        signIn={signin}
        forgotPassword={forgotPassword}
        singleSignOn={singleSignOn}
        signUp={signUp}
      />
    )
    expect(screen.getByText(SigninSubtext)).toBeInTheDocument()
  })
  test('checking the buttons are clickable', () => {
    const onClick = jest.fn()
    render(
      <Signin
        signIn={signin}
        forgotPassword={forgotPassword}
        singleSignOn={singleSignOn}
        signUp={signUp}
      />
    )
    const buttons = screen.getAllByRole('button')
    buttons.forEach((button) => {
      button.onclick = onClick
      fireEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    })
  })
  test('renders the Input', () => {
    render(
      <Signin
        signIn={signin}
        forgotPassword={forgotPassword}
        singleSignOn={singleSignOn}
        signUp={signUp}
      />
    )
    const inputs = screen.getAllByRole('textbox')
    inputs.map((input) => {
      fireEvent.change(input, { target: { value: 'Any Text' } })
    })
  })
  test('should enable the button when email and password are valid', () => {
    render(
      <Signin
        signIn={signin}
        forgotPassword={forgotPassword}
        singleSignOn={singleSignOn}
        signUp={signUp}
      />
    )
    const emailTextElement = screen.getByPlaceholderText(
      SigninEmailPlaceholder
    ) as HTMLInputElement
    const passwordTextElement = screen.getByPlaceholderText(
      SigninPasswordPlaceholder
    ) as HTMLInputElement
    const signInButton = screen.getByTestId('signin button') as HTMLInputElement

    fireEvent.change(emailTextElement, {
      target: { value: 'john.doe123@gmail.com' },
    })
    fireEvent.change(passwordTextElement, { target: { value: 'password!' } })
    expect(emailTextElement.value).toBe('john.doe123@gmail.com')
    expect(passwordTextElement.value).toBe('password!')
    expect(signInButton).toBeEnabled()
    fireEvent.click(signInButton)
  })
  test('update password value on input change', () => {
    render(
      <Signin
        signIn={signin}
        forgotPassword={forgotPassword}
        singleSignOn={singleSignOn}
        signUp={signUp}
      />
    )
    const passwordInput = screen.getByPlaceholderText(
      SigninPasswordPlaceholder
    ) as HTMLInputElement

    fireEvent.change(passwordInput, {
      target: { value: 'password123' },
    })
    expect(passwordInput.value).toBe('password123')
  })
  test('show/hide password value', () => {
    render(
      <Signin
        signIn={signin}
        forgotPassword={forgotPassword}
        singleSignOn={singleSignOn}
        signUp={signUp}
      />
    )
    const passwordInput = screen.getByPlaceholderText(
      SigninPasswordPlaceholder
    ) as HTMLInputElement

    fireEvent.change(passwordInput, {
      target: { value: 'password123' },
    })
    expect(passwordInput.value).toBe('password123')
    const hide = screen.getByTestId('show-icon')
    fireEvent.click(hide)
    expect(hide).toBeInTheDocument()
  })
})
