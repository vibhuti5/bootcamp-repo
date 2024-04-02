import { fireEvent, render, screen } from '@testing-library/react'
import FolderDeck from '.'
import { FolderMock } from '../../../utils/constant'

describe('testing folderDeck component', () => {
  it('should renders correctly with default props', () => {
    const folderClick = jest.fn()
    render(<FolderDeck folders={FolderMock} onFolderClick={folderClick} />)
    screen.getByText('Choose the folders to sync with contiq')
    const ZemosoDeckFolder = screen.getByText('Zemoso decks')
    fireEvent.click(ZemosoDeckFolder)
    expect(folderClick).toBeCalledTimes(1)

    fireEvent.click(screen.getAllByText('Sample data')[0])
  })
})
