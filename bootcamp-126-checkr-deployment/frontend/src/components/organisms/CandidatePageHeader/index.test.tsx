import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import CandidatePageHeader from '.'
import { Candidates, ExportButton } from '../../../utils/constants'

const mockOnExport = jest.fn()

describe('CandidatePageHeader', () => {
  test('renders correctly', () => {
    render(<CandidatePageHeader onExport={mockOnExport} />)
    expect(screen.getByText(Candidates)).toBeInTheDocument()
  })
  test('onclicking of onexport button', () => {
    const { getByText } = render(
      <CandidatePageHeader onExport={mockOnExport} />
    )
    const exportButton = getByText(ExportButton)
    fireEvent.click(exportButton)
    expect(mockOnExport).toHaveBeenCalled()
  })
})
