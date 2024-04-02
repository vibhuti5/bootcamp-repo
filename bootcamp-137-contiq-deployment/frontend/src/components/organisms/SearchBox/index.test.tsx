import { getByTestId, render, fireEvent, screen } from '@testing-library/react'
import SearchBox from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'

const SearchBoxConfig = {
  searches: ['Saab world', 'Star world', 'BMW world'],
  searchedText: 'world',
}
describe('testing searchbox component', () => {
  it('should render correctly with default props', () => {
    const onSearchMock = jest.fn()
    const onSearchNextMock = jest.fn()
    const onSearchPreviousMock = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <SearchBox
          fileName=""
          searchKeyword=""
          onSearch={onSearchMock}
          onSearchNext={onSearchNextMock}
          onSearchPrevious={onSearchPreviousMock}
          totalPages={0}
          searchedTextPage={0}
          {...SearchBoxConfig}
        />
      </ThemeProvider>
    )
    expect(
      getByTestId(document.documentElement, 'search-box')
    ).toBeInTheDocument()

    expect(
      getByTestId(document.documentElement, 'maximise')
    ).toBeInTheDocument()

    const maximiseIcon = screen.getByAltText(/expand-icon/i)
    fireEvent.click(maximiseIcon)
    expect(
      getByTestId(document.documentElement, 'search-content')
    ).toBeInTheDocument()

    const downIcon = screen.getByAltText(/down-icon/i)
    fireEvent.click(downIcon)
    expect(
      getByTestId(document.documentElement, 'search-content')
    ).toBeInTheDocument()

    const upIcon = screen.getByAltText(/up-icon/i)
    fireEvent.click(upIcon)
    expect(
      getByTestId(document.documentElement, 'search-content')
    ).toBeInTheDocument()
  })
})
