import { type Meta, type StoryObj } from '@storybook/react'
import Pagination from '.'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Pagination>

export const PaginationBar: Story = {
  args: {
    currentPage: 1,
    totalPages: 4,
    handleZoomIn: action('Zoom in click'),
    handleZoomOut: action('Zoom out click'),
    zoomPercent: 85,
  },
}
export default meta
