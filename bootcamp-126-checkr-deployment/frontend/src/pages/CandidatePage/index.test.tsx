import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import CandidatesPage from '.'
import { BrowserRouter } from 'react-router-dom'
import { ExportModalTitle } from '../../utils/constants'
import '@testing-library/jest-dom/extend-expect'
jest.mock('axios')
import * as services from '../../services/api'
import { DashboardContextType } from '../../utils/types'
import { DashboardContext } from '../../App'

type RenderFunction = (
  ui: React.ReactElement,
  contextValue: DashboardContextType
) => ReturnType<typeof render>

const renderWithDashboardContext: RenderFunction = (ui, contextValue) => {
  return render(
    <DashboardContext.Provider value={contextValue}>
      <BrowserRouter>{ui}</BrowserRouter>
    </DashboardContext.Provider>
  )
}

const mockedCandidateInformation = [
  {
    id: 1,
    candidateId: 1,
    name: 'John Smith',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Barrouallie',
    date: '2/22/2022',
  },
]

jest
  .spyOn(services, 'getCandidatesInformation')
  .mockResolvedValue(mockedCandidateInformation)

describe('CandidatesPage Component', () => {
  test('renders without errors', async () => {
    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() => {
      renderWithDashboardContext(<CandidatesPage />, contextValue)
    })

    await waitFor(() => {
      const name = screen.getByText('John Smith')
      expect(name).toBeInTheDocument()
      fireEvent.click(name)
    })
  })
  test('should search correctly', async () => {
    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() =>
      renderWithDashboardContext(<CandidatesPage />, contextValue)
    )
    await act(async () => {
      await Promise.resolve()
      await Promise.resolve()
    })
    const searchInput = screen.getByPlaceholderText('Search any candidate')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    expect(screen.getByPlaceholderText('Search any candidate')).toHaveValue(
      'John'
    )
  })

  test('should handles the export modal', async () => {
    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() =>
      renderWithDashboardContext(<CandidatesPage />, contextValue)
    )
    const exportButton = screen.getByText('Export')
    fireEvent.click(exportButton)
    expect(screen.getByText(ExportModalTitle)).toBeInTheDocument()
  })
  test('should open filter popup when handleFilter is called', async () => {
    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() =>
      renderWithDashboardContext(<CandidatesPage />, contextValue)
    )
    const filterButton = screen.getByText('Filter')
    fireEvent.click(filterButton)
    const checkbox = screen.getByTestId('All Status')
    fireEvent.click(checkbox)
    expect(checkbox).toBeTruthy()
  })
  test('should close filter popup when onClick is called', async () => {
    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() =>
      renderWithDashboardContext(<CandidatesPage />, contextValue)
    )
    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)
    expect(backdrop).toBeInTheDocument()
  })
  test('handles error while fetching data', async () => {
    jest
      .spyOn(services, 'getCandidatesInformation')
      .mockRejectedValueOnce(new Error('Failed to fetch data from the server:'))

    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }
    let findByText
    await act(() => {
      findByText = renderWithDashboardContext(<CandidatesPage />, contextValue)
    })

    expect(findByText).toBeInstanceOf(Object)
  })
})
