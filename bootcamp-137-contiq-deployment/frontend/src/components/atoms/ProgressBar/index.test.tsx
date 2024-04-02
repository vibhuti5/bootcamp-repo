import React from 'react'
import { render } from '@testing-library/react'
import ProgressBar from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'

describe('ProgressBar Component', () => {
  it('renders with the given value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProgressBar value={50} />
      </ThemeProvider>
    )
    const progressBar = getByTestId('linear-progress')
    expect(progressBar).toBeInTheDocument()
  })
})
