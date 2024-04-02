import { render, screen } from '@testing-library/react'
import NoFileInfo from '.'
import Image from '../../../../public/assets/images/pitch.svg'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'
const NO_FILES_AVAILABLE = 'No files availabe'
const NO_FILES_AVAILABLE_SUBTITLE =
  'Start by syncing your cloud storage to contiq'
describe('NoFileInfo', () => {
  it('should render the component', () => {
    render(
      <ThemeProvider theme={theme}>
        <NoFileInfo
          src={Image}
          title={NO_FILES_AVAILABLE}
          subTitle={NO_FILES_AVAILABLE_SUBTITLE}
        />
      </ThemeProvider>
    )
    const component = screen.getByTestId('NoFileInfo')
    expect(component).toBeInTheDocument()
  })
})
