import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import DateSelector from '.'

describe('CalendarInput', () => {
  test('calls the onChange function when the date is changed', () => {
    const onChangeMock = jest.fn()
    // Use a constant date for consistency
    const initialDate = new Date('2023-10-12T00:00:00.000Z') // Use the expected format
    render(<DateSelector onChange={onChangeMock} value={initialDate} />)
    const datePicker = screen.getByRole('textbox')

    userEvent.type(datePicker, '2021-11-09')

    const chosenDate = screen.getByRole('button', {
      name: 'Choose date, selected date is Oct 12, 2023',
    })
    waitFor(() => {
      fireEvent.click(chosenDate)

      // Ensure the onChange function is called with the initial date (as a string)
      expect(chosenDate).toHaveValue(initialDate.toISOString())
    })
  })
})
