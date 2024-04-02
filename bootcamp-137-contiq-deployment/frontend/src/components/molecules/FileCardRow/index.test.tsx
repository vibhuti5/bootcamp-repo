import '@testing-library/jest-dom'
import { getByTestId, render } from '@testing-library/react'
import { action } from '@storybook/addon-actions'
import FileCardRow from '.'

const fileCardRowConfig = {
  label: 'File 1',
  onClick: action('Forward click'),
}

describe('Testing File Card Row', () => {
  test('File card row is rendering correctly', () => {
    render(<FileCardRow {...fileCardRowConfig} />)
    getByTestId(document.documentElement, 'file-card')
  })
})
