import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateSelector from '.'

describe('CalendarInput', () => {
  test('calls the onChange function when the date is changed', () => {
    const onChangeMock = jest.fn()
    render(<DateSelector onChange={onChangeMock} text={'Date'} />)
    const openButton = screen.getByRole('button', { name: 'calendar' })
    fireEvent.click(openButton)

    const date = screen.getAllByRole('gridcell')
    date.forEach((val) => {
      fireEvent.click(val)
    })

    const cross = screen.getByRole('button')
    fireEvent.click(cross)
  })

  test('calls the onChange function when the date is changed', () => {
    const onChangeMock = jest.fn()
    render(<DateSelector onChange={onChangeMock} text={'Date'} />)
    const openButton = screen.getByRole('button', { name: 'calendar' })
    fireEvent.click(openButton)

    fireEvent.click(document.body)
  })
})
