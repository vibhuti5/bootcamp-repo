import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import FilterRow from '.'

describe('FilterRow component', () => {
  const mockOnAddFileClick = jest.fn()
  const mockOnFilterChange = jest.fn()

  const renderComponent = () => {
    return render(
      <FilterRow
        onAddFileClick={mockOnAddFileClick}
        onFilterChange={mockOnFilterChange}
      />
    )
  }

  test('renders FilterRow component correctly', () => {
    renderComponent()
    expect(screen.getByText('Files')).toBeInTheDocument()
    expect(screen.getByText('Add Files')).toBeInTheDocument()
  })

  test('calls onAddFileClick when the "Add Files" button is clicked', () => {
    renderComponent()

    fireEvent.click(screen.getByText('Add Files'))
    expect(mockOnAddFileClick).toHaveBeenCalled()
  })

  test('should change the file and publish value of filters when selected', async () => {
    renderComponent()
    const dropDown = screen.getAllByAltText('DOWN')

    fireEvent.click(dropDown[0])
    await waitFor(() => {
      const FileOptions = screen.getByText('PDF')
      expect(FileOptions).toBeInTheDocument()
      fireEvent.click(FileOptions)
    })

    fireEvent.click(dropDown[1])
    await waitFor(() => {
      const PublishOptions = screen.getByText('Published by me')
      expect(PublishOptions).toBeInTheDocument()
      fireEvent.click(PublishOptions)
    })
  })

  test('should change the calender value of filters when selected', async () => {
    renderComponent()

    const calenders = screen.getAllByRole('button', { name: 'calendar' })

    fireEvent.click(calenders[0])
    const startDate = screen.getByRole('gridcell', { name: '10' })
    fireEvent.click(startDate)

    await waitFor(() => {
      fireEvent.click(calenders[1])
      const startDate = screen.getByRole('gridcell', { name: '15' })
      fireEvent.click(startDate)
    })
  }, 20000)
})
