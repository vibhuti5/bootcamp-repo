import { render, screen } from '@testing-library/react'
import FileLoadingModal from '.'

describe('testing file loading modal component', () => {
  it('should render correctly with default props', () => {
    render(
      <FileLoadingModal
        fileName="bill.pdf"
        onCrossButtonClick={jest.fn()}
        value={60}
      />
    )
    screen.getByText('Uploading 1/1')
  })
})
