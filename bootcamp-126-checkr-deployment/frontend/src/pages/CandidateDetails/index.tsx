import React, { useContext, useEffect, useState } from 'react'
import LandingTemplate from '../../components/templates/LandingTemplate'
import { GIFText } from '../../utils/constants'
import {
  CandidateDetailsHeader,
  CandidateDetailsMain,
  PreviewEmailMain,
} from './helperComponents'
import { useLocation } from 'react-router'
import {
  CandidateDetailsResponse,
  CandidateReportResponse,
  SearchTypes,
} from '../../utils/types'
import CompletedModal from '../../components/molecules/CompletedModal'
import {
  getCandidateCourtSearches,
  getCandidateDetails,
  getCandidateReport,
} from '../../services/api'
import { Box, CircularProgress } from '@mui/material'
import { DashboardContext } from '../../App'
import { useAuth0 } from '@auth0/auth0-react'

const CandidateDetails = () => {
  const { dashboardRefresh, setDashboardRefresh } = useContext(DashboardContext)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  const [candidateDetails, setCandidateDetails] =
    useState<CandidateDetailsResponse | null>(null)
  const [candidateReports, setCandidateReports] =
    useState<CandidateReportResponse | null>(null)
  const [courtSearches, setCourtSearches] = useState<SearchTypes[]>([])

  const [title, setTitle] = useState<string>('')
  const [headerButtons, setHeaderButtons] = useState<boolean>(true)
  const [openCompletedModal, setOpenCompletedModal] =
    React.useState<boolean>(false)
  const { user } = useAuth0()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidateDetailsResponse = await getCandidateDetails(id)
        setCandidateDetails(candidateDetailsResponse)
        setTitle(candidateDetailsResponse.name)
        const reportsResponse = await getCandidateReport(id)
        setCandidateReports(reportsResponse)
        const courtSearchesResponse: SearchTypes[] =
          await getCandidateCourtSearches(id)
        setCourtSearches(courtSearchesResponse)
        setDashboardRefresh(false)
      } catch (e) {
        alert(e)
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      <LandingTemplate
        header={
          <CandidateDetailsHeader
            title={title}
            buttons={headerButtons}
            preAdverseAction={() => {
              setTitle('Pre-Adverse Action Notice')
              setHeaderButtons(false)
            }}
            id={String(candidateDetails?.id)}
            setTitle={setTitle}
            setHeaderButtons={setHeaderButtons}
            candidateName={candidateDetails?.name}
          />
        }
        main={
          <>
            {dashboardRefresh ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                {headerButtons ? (
                  <>
                    <CandidateDetailsMain
                      candidateDetails={candidateDetails}
                      candidateReport={candidateReports}
                      courtSearches={courtSearches}
                    />
                    {openCompletedModal && (
                      <CompletedModal
                        open={openCompletedModal}
                        modalText={GIFText}
                        setOpen={setOpenCompletedModal}
                        redirect={'dashboard'}
                      ></CompletedModal>
                    )}
                  </>
                ) : (
                  <PreviewEmailMain
                    from={String(user?.email)}
                    to={String(candidateDetails?.email)}
                    name={String(candidateDetails?.name)}
                    setCandidateDetailsMain={setHeaderButtons}
                    setCompletedModal={setOpenCompletedModal}
                    id={String(candidateDetails?.id)}
                  />
                )}
              </>
            )}
          </>
        }
      />
    </>
  )
}

export default CandidateDetails
