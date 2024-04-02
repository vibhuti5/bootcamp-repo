import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import CheckboxComponent from '.'

describe('Checkbox atom renders', () => {
  test('Onchange event is working correctly', () => {
    render(
      <CheckboxComponent
        label={'Check Me'}
        controlLabelStyle={{ color: 'white' }}
        checkboxStyle={{}}
        isChecked={true}
      />
    )
    const checkbox = screen.getByRole('checkbox', { name: 'Check Me' })
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
