import { render, screen } from '@testing-library/react'
import SyncModal from '.'

describe('testing sync modal component', () => {
  it('should renders correctly with default props', () => {
    render(<SyncModal open={true} />)
    screen.getByText('Sync in progress')
  })
})
