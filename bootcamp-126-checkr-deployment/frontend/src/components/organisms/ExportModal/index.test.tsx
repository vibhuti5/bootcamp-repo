import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ExportModal from '.'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
const setOpen = jest.fn()
const setOpenSuccessModal = jest.fn()
describe('ExportModal', () => {
  it('renders ExportModal with initial values', () => {
    render(
      <BrowserRouter>
        <ExportModal
          open
          openSuccessModal={false}
          setOpen={setOpen}
          setOpenSuccessModal={setOpenSuccessModal}
        />
      </BrowserRouter>
    )

    expect(screen.getByText('Export Candidate Reports CSV')).toBeInTheDocument()
    expect(screen.getByText('Reports From')).toBeInTheDocument()
    expect(screen.getByText('Reports To')).toBeInTheDocument()
    const datePickers = screen.getAllByRole('textbox')

    datePickers.forEach((item) => {
      userEvent.type(item, '2021-11-09')

      const chosenDate = screen.getAllByRole('button')
      chosenDate.forEach((item) => {
        fireEvent.click(item)
        expect(item).toBeInTheDocument()
      })
    })
    const exportReportButton = screen.getByText('Export Report')
    expect(exportReportButton).toBeInTheDocument()
    fireEvent.click(exportReportButton)
  })
})
