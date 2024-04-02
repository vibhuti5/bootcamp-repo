import { render, screen, fireEvent } from '@testing-library/react'
import SearchPopup from '.'
import { RESULTS } from '../../../utils/constant'

export const mockFileData = [
  {
    id: '1',
    fileName: 'Company Profile.pdf',
    fileId: '1',
    content: 'File data here',
    path: '../../public/assets/files/Company Profile.pdf',
    createdAt: '2023-11-10T19:45:04.174Z',
    userId: '1',
  },
  {
    id: '2',
    fileName: 'Company agreement.pdf',
    fileId: '2',
    content: 'File data here',
    path: '../../public/assets/files/Company agreement.pdf',
    createdAt: '2023-11-10T19:45:04.174Z',
    userId: '2',
  },
]

describe('SearchPopup Component', () => {
  const onFileButtonClick = jest.fn()
  it('should render without crashing', () => {
    render(
      <SearchPopup isOpen={true} files={[]} onFileClick={onFileButtonClick} />
    )
    expect(screen.getByText(RESULTS)).toBeInTheDocument()
  })

  it('should display file items when FileData is provided', () => {
    render(
      <SearchPopup
        isOpen={true}
        files={mockFileData}
        onFileClick={onFileButtonClick}
      />
    )
    mockFileData.forEach((item) => {
      expect(screen.getByText(item.fileName)).toBeInTheDocument()
    })
  })

  it('should call onFileClick when a file item is clicked', () => {
    const mockOnFileClick = jest.fn()
    render(
      <SearchPopup
        isOpen={true}
        files={mockFileData}
        onFileClick={mockOnFileClick}
      />
    )

    fireEvent.click(screen.getByText(mockFileData[0].fileName))
    expect(mockOnFileClick).toBeTruthy()
  })
})
