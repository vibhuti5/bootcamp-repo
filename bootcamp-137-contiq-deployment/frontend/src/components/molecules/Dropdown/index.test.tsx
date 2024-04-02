import { render, screen, fireEvent } from '@testing-library/react'
import DropDown from '.'
import ChevronUpIcon from '../../../../public/assets/Icons/chevronUp.svg'

const mockMenuItems = [
  { value: 'Published by me', label: 'Published by me' },
  { value: 'Published by sale team', label: 'Published by sale team' },
  { value: 'Publlished by others', label: 'Publlished by others' },
]

describe('DropDown', () => {
  it('renders the dropdown correctly', () => {
    const element = render(
      <DropDown
        value="Published by"
        label="Published by"
        menuItems={mockMenuItems}
        startIcon={ChevronUpIcon}
        onChange={jest.fn()}
      />
    )
    expect(element).toBeDefined

    const form = screen.getByRole('combobox')
    expect(form).toBeDefined
    fireEvent.mouseDown(form)

    const options = screen.getByTestId('item-0')
    expect(options).toBeDefined
    fireEvent.click(options)
    const crossIcon = screen.getByRole('img')
    expect(crossIcon).toBeDefined

    fireEvent.click(crossIcon)
  })
})
