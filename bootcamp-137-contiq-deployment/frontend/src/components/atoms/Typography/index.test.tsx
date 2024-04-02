import { render, screen } from '@testing-library/react'
import Typography from '.'

describe('Testing Typography Atom', () => {
  test('should renders correctly with default props', () => {
    render(<Typography text="sign up" variant="h2" />)
    expect(screen.getByText('sign up')).toBeInTheDocument()
  })
})
