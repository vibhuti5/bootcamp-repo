import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CandidateTableHeader from '.'
const handleFilter = jest.fn()

describe('CandidateTableHeader', () => {
  it('renders without crashing', () => {
    render(
      <CandidateTableHeader
        handleFilter={handleFilter}
        searchQuery=""
        setSearchQuery={() => {}}
      />
    )
  })

  it('renders with filter button and handles filter click', () => {
    const { getByText } = render(
      <CandidateTableHeader
        handleFilter={handleFilter}
        searchQuery=""
        setSearchQuery={() => {}}
      />
    )

    const filterButton = getByText('Filter')
    fireEvent.click(filterButton)
    expect(handleFilter).toHaveBeenCalledTimes(1)
  })

  it('updates search value when typing', () => {
    const { getByPlaceholderText } = render(
      <CandidateTableHeader
        handleFilter={handleFilter}
        searchQuery=""
        setSearchQuery={() => {}}
      />
    )
    const searchInput = getByPlaceholderText('Search any candidate')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    expect(searchInput).toHaveValue('John')
  })
})
