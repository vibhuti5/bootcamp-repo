import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CollapsableCard from '.'

const sampleProps = {
  label: 'Test Label',
  details: [
    { id: 1, title: 'Detail 1', label: 'Value 1', icon: 'Icon 1' },
    { id: 2, title: 'Detail 2', label: 'Value 2', icon: 'Icon 2' },
  ],
}

describe('CollapsableCard Component', () => {
  it('should render correctly when expanded', () => {
    render(<CollapsableCard {...sampleProps} />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()

    const ExpandButton = screen.getByRole('button', { name: 'Test Label' })
    fireEvent.click(ExpandButton)
    expect(ExpandButton).toBeInTheDocument()

    expect(screen.getByText('Detail 1')).toBeInTheDocument()
    expect(screen.getByText('Detail 2')).toBeInTheDocument()
  })
})
