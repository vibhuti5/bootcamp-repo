import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Theme from '../../../theme'
import CustomTypography, { CustomTypographyProps } from '.'

describe('TypographyComponent', () => {
  const defaultProps: CustomTypographyProps = {
    variant: 'h1',
    children: 'Cheker',
    color: Theme.palette.primary[500],
  }

  it('renders with the correct variant and children', () => {
    render(<CustomTypography {...defaultProps} />)
    const typographyElement = screen.getByText('Cheker')
    expect(typographyElement).toBeInTheDocument()
    expect(typographyElement).toHaveClass('MuiTypography-h1')
  })
})
