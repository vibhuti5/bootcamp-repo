import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SideBar from '.'

describe('testing side bar component', () => {
  it('should render correctly with default props', () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    )
    const HomeNav = screen.getByText('Home')
    fireEvent.click(HomeNav)
  })

  it('should not be clicked when clicked other than home and files', () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    )
    const officeNav = screen.getByText('office')
    fireEvent.click(officeNav)
  })
})
