import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ChooseFileRow from '.'

describe('Testing Choose File Row', () => {
  test('Choose file row is rendering correctly', () => {
    const onCheck = jest.fn()
    render(<ChooseFileRow isChecked={false} onCheck={onCheck} label="file1" />)
    screen.getByText('file1')
  })
})
