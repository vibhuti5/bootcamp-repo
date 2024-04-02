import { fireEvent, render, screen } from '@testing-library/react'
import CloudDriveOptions from '.'

describe('testing cloud drive options component', () => {
  it('should renders correctly with default props', () => {
    const driveButtonClick = jest.fn()
    render(<CloudDriveOptions onDriveClick={driveButtonClick} />)
    const driveOptions = screen.getAllByRole('img')
    fireEvent.click(driveOptions[0])
    expect(driveButtonClick).toBeCalledTimes(1)
  })
})
