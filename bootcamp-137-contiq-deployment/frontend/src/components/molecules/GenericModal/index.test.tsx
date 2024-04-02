import { fireEvent, render, screen } from '@testing-library/react'
import GenericModal from '.'

describe('testing generic modal', () => {
  it('should render correctly with default props', () => {
    const crossButton = jest.fn()
    const backButton = jest.fn()
    render(
      <GenericModal
        open={true}
        isBackIcon={true}
        isCrossButton={true}
        titleLabel="Upload files"
        onBackButtonClick={backButton}
        onCrossButtonClick={crossButton}
      >
        hello
      </GenericModal>
    )
    screen.getByText('Upload files')
    const icons = screen.getAllByRole('img')
    fireEvent.click(icons[0])
    expect(backButton).toBeCalledTimes(1)

    fireEvent.click(icons[1])
    expect(crossButton).toBeCalledTimes(1)
  })

  it('should render correclty if titleLable is not given', () => {
    render(
      <GenericModal open={true} isBackIcon={true} isCrossButton={true}>
        hello
      </GenericModal>
    )
  })
})
