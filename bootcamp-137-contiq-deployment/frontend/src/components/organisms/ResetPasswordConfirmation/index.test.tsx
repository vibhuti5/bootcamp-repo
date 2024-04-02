import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResetPasswordConfirmation from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'

describe('ResetPasswordConfirmation', () => {
  it('renders the component and triggers onClick event', () => {
    const onClickMock = jest.fn()
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <ResetPasswordConfirmation onClick={onClickMock} />
      </ThemeProvider>
    )

    expect(getByTestId('reset-success')).toBeInTheDocument()

    const continueButton = getByRole('button')
    fireEvent.click(continueButton)

    expect(onClickMock).toHaveBeenCalled()
  })
})
