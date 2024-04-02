import React from 'react'
import { render } from '@testing-library/react'
import Divider from '.'

describe('Divider Component', () => {
  it('renders simple Divider when text prop is not provided', () => {
    const { getByTestId } = render(<Divider data-testid="divider" />)
    const dividerElement = getByTestId('divider')
    expect(dividerElement.textContent).toBe('')
  })

  it('renders Divider with text when text prop is provided', () => {
    const text = 'Example Text'
    const { getByTestId } = render(
      <Divider text={text} data-testid="divider" />
    )
    const dividerElement = getByTestId('divider')
    expect(dividerElement.textContent).toBe(text)
  })
})
