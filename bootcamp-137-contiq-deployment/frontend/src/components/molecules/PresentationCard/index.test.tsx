import { fireEvent, render, screen } from '@testing-library/react'
import PresentationCard from '.'
import Image from '../../../../public/assets/images/pitch.svg'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'
const mockOnClick = jest.fn()
const COMPANY = 'Company agreement.ppt'
describe('PresentationCard', () => {
  it('should render the component', () => {
    render(
      <ThemeProvider theme={theme}>
        <PresentationCard src={Image} label={COMPANY} />
      </ThemeProvider>
    )
    const component = screen.getByTestId('PresentationCard')
    expect(component).toBeInTheDocument()
  })
  it('should be clickable', () => {
    render(
      <ThemeProvider theme={theme}>
        <PresentationCard src={Image} label={COMPANY} onClick={mockOnClick} />
      </ThemeProvider>
    )
    const component = screen.getByTestId('PresentationCard')
    expect(component).toBeInTheDocument()
    fireEvent.doubleClick(component)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
