import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { action } from '@storybook/addon-actions'
import RadioButton from '.'

const formControlLabelConfigs = {
  value: 'Option_1',
  label: 'Option 1',
}

describe('Radio button atom renders', () => {
  test('Onchange event is working correctly', () => {
    render(
      <RadioButton
        onChange={action('Radio Button selected')}
        formControl={formControlLabelConfigs}
      />
    )
    const radio = screen.getByRole('radio', { name: 'Option 1' })
    fireEvent.click(radio)
    expect(radio).toBeChecked()
  })
})
