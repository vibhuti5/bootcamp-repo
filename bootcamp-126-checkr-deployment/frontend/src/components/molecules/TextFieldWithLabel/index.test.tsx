import React from 'react'
import { render } from '@testing-library/react'
import TextInputField from '.'

describe('TextInputField Component', () => {
  const mockProps = {
    name: 'Name',
    value: 'John Doe',
    onChange: jest.fn(),
  }

  it('should render the component with the correct label and value', () => {
    const { getByText, getByDisplayValue } = render(
      <TextInputField {...mockProps} />
    )

    expect(getByText('Name')).toBeInTheDocument()
    expect(getByDisplayValue('John Doe')).toBeInTheDocument()
  })
})
