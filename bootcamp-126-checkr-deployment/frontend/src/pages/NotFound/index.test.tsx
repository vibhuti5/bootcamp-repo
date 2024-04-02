// Example of testing setup with MemoryRouter
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NotFound from '.'

it('renders', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  )
})
