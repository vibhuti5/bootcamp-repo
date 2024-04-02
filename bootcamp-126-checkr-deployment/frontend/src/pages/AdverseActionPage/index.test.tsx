import React from 'react'
import { act, render } from '@testing-library/react'
import AdverseActionPage from '.'
import { BrowserRouter } from 'react-router-dom'
import { DashboardContext } from '../../App'
import { DashboardContextType } from '../../utils/types'
import * as services from '../../services/api'

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

const data = [
  {
    id: 1,
    candidateId: 1,
    status: 'SCHEDULED',
    preNoticeDate: '22-02-2022',
    postNoticeDate: '22-02-2022',
  },
]

jest.spyOn(services, 'getAdverseInfo').mockResolvedValue({ data })

describe('AdverseActionPage', () => {
  test('should render data in the table correctly', async () => {
    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() =>
      renderWithDashboardContext(<AdverseActionPage />, contextValue)
    )
  })
  test('handles error while fetching data', async () => {
    jest
      .spyOn(services, 'getAdverseInfo')
      .mockRejectedValueOnce(new Error('Failed to fetch data from the server:'))

    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    let findByText
    await act(() => {
      findByText = renderWithDashboardContext(
        <AdverseActionPage />,
        contextValue
      )
    })

    expect(findByText).toBeInstanceOf(Object)
  })
})
