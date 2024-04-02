import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { COPIED } from '../../../utils/constant'
import CopySnackbar from '.'

describe('CopySnackbar', () => {
  test('should render CopySnackbar with open prop', () => {
    const handleClose = jest.fn()

    render(
      <CopySnackbar
        open={true}
        onClose={handleClose}
        vertical={'top'}
        horizontal={'center'}
      />
    )

    expect(screen.getByText(COPIED)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /close/i }))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('should render CopySnackbar and close it', () => {
    const handleClose = jest.fn()

    render(
      <CopySnackbar
        open={true}
        onClose={handleClose}
        vertical={'top'}
        horizontal={'center'}
      />
    )

    fireEvent.click(document)

    expect(handleClose).not.toHaveBeenCalled()
  })
})
