import React from 'react'
import AuthTemplate from '.'
import { render, screen } from '@testing-library/react'
import { Box } from '@mui/material'

describe('testing the template file', () => {
  test('testing the left and right sides', () => {
    render(<AuthTemplate rightChildren={<Box />} />)
    const rightchild = screen.getByTestId('rightpannel')

    expect(rightchild).toBeInTheDocument
  })
})
