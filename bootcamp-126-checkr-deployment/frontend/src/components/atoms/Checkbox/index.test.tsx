import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CheckBox from '.'

describe('CheckBox component', () => {
  test('renders without errors', () => {
    const { getByTestId } = render(<CheckBox data-testid="checkbox" />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  test('defaults to unchecked', () => {
    const { getByTestId } = render(<CheckBox data-testid="checkbox" />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox).not.toBeChecked()
  })
})
