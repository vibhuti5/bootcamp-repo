import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Icon from '.'

const url = '../assets/images/logout.svg'
const altText = 'Logout'

describe('Icon component', () => {
  test('Icon rendering correctly', () => {
    render(<Icon src={url} alt={altText} />)
    const iconElement = screen.getByRole('img')
    expect(iconElement).toBeInTheDocument()
  })

  test('Alt text rendering correctly', () => {
    render(<Icon src={url} alt={altText} />)
    const iconAltText = screen.getByAltText(altText)
    expect(iconAltText).toBeInTheDocument()
  })
})
