import { render, screen } from '@testing-library/react'
import TabsComponent from '.'

describe('Testing Tabs component', () => {
  const tabs = [
    {
      label: 'All Files',
      content: '',
    },
  ]

  it('should render correctly All Files tab', () => {
    render(<TabsComponent tabs={tabs} value={0} />)
    const filesTab = screen.getByText('All Files').closest('button')
    expect(filesTab).toHaveAttribute('aria-selected', 'true')
  })
})
