import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import CandidateDetails from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { when } from 'jest-when'
import { ApiBase, PreAdverseButton } from '../../utils/constants'
import { CandidateDetailsMain } from './helperComponents'
import {
  Adjudication,
  CandidateStatus,
  DashboardContextType,
} from '../../utils/types'
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

jest.mock('axios')
const axiosSpy = jest.spyOn(axios, 'get')
const axiosPatchSpy = jest.spyOn(axios, 'patch')

describe('renders the CandidateDetails component', () => {
  const candidateDetailsResponse = {
    id: 1,
    name: 'shaikshakeel',
    email: 'shaikshakeel@gmail.com',
    dob: '22-12-2022',
    age: '33',
    phone: '983279642',
    zipcode: '9847439',
    socialSecurity: '8424',
    driverLicenseNo: '238979',
    createdAt: 'Aug 22',
  }

  const reportsResponse = [
    {
      id: 1,
      candidateId: 1,
      status: 'consider',
      adjudication: '-',
      package: 'Employe pro',
      createdAt: '2-12-2022',
      completedDate: '2-12-2022',
      turnAroundTime: '2 hrs',
    },
  ]

  const courtSearchesResponse = [
    {
      id: 1,
      candidateId: 1,
      searchTypes: [
        {
          id: 1,
          search: 'SSN Verification',
          status: 'CLEAR',
          date: '2/22/2022',
        },
        {
          id: 2,
          search: 'Sex Offender',
          status: 'CLEAR',
          date: '3/13/2022',
        },
        {
          id: 3,
          search: 'Global Watchlist',
          status: 'CONSIDER',
          date: '2/7/2022',
        },
        {
          id: 4,
          search: 'Federal Criminal',
          status: 'CLEAR',
          date: '2/20/2022',
        },
        {
          id: 5,
          search: 'County Criminal',
          status: 'CLEAR',
          date: '5/19/2022',
        },
      ],
    },
  ]

  const candidateInfoResponse = [
    {
      id: 2,
      candidateId: 2,
      name: 'Jane Doe',
      adjudication: 'ADVERSE ACTION',
      status: 'CONSIDER',
      location: 'Kingstown',
      date: '3/15/2022',
      adjudification: 'ADVERSE ACTION',
    },
  ]
  test('renders the api calls', async () => {
    when(axiosSpy)
      .calledWith(ApiBase + 'candidates', {
        params: {
          id: 1,
        },
      })
      .mockResolvedValue({ data: candidateDetailsResponse })

    when(axiosSpy)
      .calledWith(ApiBase + 'reports', {
        params: {
          candidateId: 1,
        },
      })
      .mockResolvedValue({ data: reportsResponse })

    when(axiosSpy)
      .calledWith(ApiBase + 'courtSearches', {
        params: {
          candidateId: 2,
        },
      })
      .mockResolvedValue({ data: courtSearchesResponse })

    when(axiosSpy)
      .calledWith(ApiBase + 'candidatesInformation', {
        params: {
          candidateId: 2,
        },
      })
      .mockResolvedValueOnce({ data: candidateInfoResponse })

    when(axiosPatchSpy)
      .calledWith(ApiBase + 'candidatesInformation/2', {
        adjudication: Adjudication.adverseAction,
        status: CandidateStatus.consider,
      })
      .mockResolvedValue({ data: candidateInfoResponse })

    const contextValue = {
      dashboardRefresh: false,
      setDashboardRefresh: jest.fn(),
    }

    await act(() =>
      renderWithDashboardContext(<CandidateDetails />, contextValue)
    )

    const adverseButton = screen.getByRole('button', {
      name: PreAdverseButton,
    })

    expect(adverseButton).toBeInTheDocument()
    fireEvent.click(adverseButton)
    expect(screen.getByText('Pre-Adverse Action Notice')).toBeInTheDocument()

    const selectBox = screen.getAllByTestId('select-email-check')
    fireEvent.click(selectBox[0])
    expect(selectBox[0]).toBeTruthy()

    const previewNotice = screen.getByRole('button', { name: 'Preview Notice' })
    expect(previewNotice).toBeInTheDocument()
    fireEvent.click(previewNotice)

    const modalBackdrop = document.querySelector(
      '.MuiBackdrop-root'
    ) as HTMLElement
    fireEvent.click(modalBackdrop)
  })

  test('renders candidate details main', () => {
    render(
      <CandidateDetailsMain
        candidateDetails={candidateDetailsResponse}
        candidateReport={{
          id: 1,
          candidateId: 1,
          status: 'consider',
          adjudication: '-',
          package: 'Employe pro',
          createdAt: '2-12-2022',
          completedDate: '2-12-2022',
          turnAroundTime: '2 hrs',
        }}
        courtSearches={[
          {
            id: 1,
            search: 'SSN Verification',
            status: 'CLEAR',
            date: '2/22/2022',
          },
        ]}
      />
    )
  })
})
