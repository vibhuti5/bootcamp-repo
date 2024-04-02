import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import LocalUploadModal from '.'
import FileContextProvider from '../../../context/FileContext'

describe('testing LocalUploadModal component', () => {
  it('should render with default props', () => {
    render(
      <FileContextProvider>
        <LocalUploadModal onUploadButtonClick={jest.fn()} />
      </FileContextProvider>
    )
    screen.getByText('Drop your files here')
    fireEvent.click(screen.getByText('Choose files'))
  })
  it('should show the selected file', async () => {
    const uploadButton = jest.fn()
    render(
      <FileContextProvider>
        <LocalUploadModal onUploadButtonClick={uploadButton} />
      </FileContextProvider>
    )
    const chooseFileButton = screen.getByText('Choose files')

    fireEvent.click(chooseFileButton)
    const mockFile = new File(['(content)'], 'bill.pdf', {
      type: 'application/pdf',
    })

    const input = screen.getByTestId('file-input')

    fireEvent.change(input, { target: { files: [mockFile] } })

    await waitFor(() => {
      expect(screen.getByText(mockFile.name)).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('Upload file'))
    expect(uploadButton).toBeCalledTimes(1)
  })
})
