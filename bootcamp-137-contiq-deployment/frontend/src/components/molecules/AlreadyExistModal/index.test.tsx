import { fireEvent, render, screen } from '@testing-library/react'
import AlreadyExistModal from '.'

describe('testing AlreadyExistModal component', () => {
  const cancelButton = jest.fn()
  const uploadButton = jest.fn()
  it('should render correctly with default props', () => {
    render(
      <AlreadyExistModal
        fileName="bill.pdf"
        onCancelClick={cancelButton}
        onUploadClick={uploadButton}
      />
    )
    screen.getByText('Upload options')

    fireEvent.click(screen.getByText('Cancel'))
    expect(cancelButton).toBeCalledTimes(1)
  })
})
