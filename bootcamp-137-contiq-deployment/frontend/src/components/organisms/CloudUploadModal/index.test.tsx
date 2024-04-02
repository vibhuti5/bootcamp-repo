import { fireEvent, render, screen } from '@testing-library/react'
import CloudUploadModal from '.'
import { FileMock } from '../../../utils/constant'

describe('testing cloud upload modal component', () => {
  it('should renders correctly with default props', () => {
    render(<CloudUploadModal files={FileMock} isOpen={true} />)
    screen.getByText('Zemoso decks')
  })

  it('sync button should disabled when no checkbox is selected', () => {
    const SyncButtonClick = jest.fn()
    render(
      <CloudUploadModal
        files={FileMock}
        onSyncClick={SyncButtonClick}
        isOpen={true}
      />
    )
    const syncButton = screen.getByText('Sync')
    fireEvent.click(syncButton)
    expect(syncButton).toBeDisabled()
  })

  it('sync button should enabled when any checkbox is selected', () => {
    const SyncButtonClick = jest.fn()
    render(
      <CloudUploadModal
        files={FileMock}
        onSyncClick={SyncButtonClick}
        isOpen={true}
      />
    )
    const checkBoxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkBoxes[0])
    const syncButton = screen.getByText('Sync')
    fireEvent.click(syncButton)
    expect(syncButton).toBeEnabled()
    fireEvent.click(checkBoxes[0])
    expect(syncButton).toBeDisabled()
  })
})
