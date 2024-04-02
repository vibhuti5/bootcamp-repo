import React from 'react'
import { render } from '@testing-library/react'
import TypoInput from '.'

describe('TextInputField Component', () => {
  const mockProps = {
    labelValue: 'Name',
    value: 'John Doe',
    onChange: jest.fn(),
  }

  it('should render the component with the correct label and value', () => {
    const { getByText, getByDisplayValue } = render(
      <TypoInput {...mockProps} />
    )

    expect(getByText('Name')).toBeInTheDocument()
    expect(getByDisplayValue('John Doe')).toBeInTheDocument()
  })
})
