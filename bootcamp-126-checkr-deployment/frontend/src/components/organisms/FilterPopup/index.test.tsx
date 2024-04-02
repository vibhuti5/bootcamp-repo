import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import FilterPopup from '.'
import { filterFields } from '../../../utils/constants'
import '@testing-library/jest-dom'

const onStatusChangeMock = jest.fn()
describe('FilterPopup Component', () => {
  it('renders without errors', () => {
    render(
      <FilterPopup
        filterFields={filterFields}
        open
        onStatusChange={onStatusChangeMock}
        setOpen={() => {
          console.log('Set Open')
        }}
      />
    )
  })

  it('displays filter names', () => {
    const { getByText } = render(
      <FilterPopup
        filterFields={filterFields}
        open
        onStatusChange={onStatusChangeMock}
        setOpen={() => {
          console.log('Set Open')
        }}
      />
    )

    filterFields.forEach((field) => {
      const nameElement = getByText(field.name)
      expect(nameElement).toBeInTheDocument()
    })
  })

  it('handles checkbox changes', () => {
    render(
      <FilterPopup
        filterFields={filterFields}
        open
        onStatusChange={onStatusChangeMock}
        setOpen={() => {
          console.log('Set Open')
        }}
      />
    )

    const checkbox = screen.getByTestId('All Status')
    fireEvent.click(checkbox)
    expect(checkbox).toBeTruthy()
  })

  it('backdrop click', () => {
    render(
      <FilterPopup
        filterFields={filterFields}
        open
        onStatusChange={onStatusChangeMock}
        setOpen={() => {
          console.log('Set Open')
        }}
      />
    )
    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)
    expect(backdrop).toBeInTheDocument()
  })
})
