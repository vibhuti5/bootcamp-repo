import '@testing-library/jest-dom'
import { getByTestId, render } from '@testing-library/react'
import { action } from '@storybook/addon-actions'
import Pagination from '.'

const paginationConfig = {
  currentPage: 1,
  totalPages: 4,
  handleZoomIn: action('Zoom in click'),
  handleZoomOut: action('Zoom out click'),
  zoomPercent: 85,
}

describe('Testing Pagination molecule', () => {
  test('Pagination is rendering correctly', () => {
    render(<Pagination {...paginationConfig} />)
    getByTestId(document.documentElement, 'pagination-card')
  })
})
