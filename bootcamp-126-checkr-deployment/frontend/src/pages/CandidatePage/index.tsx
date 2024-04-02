import { useContext, useEffect, useState } from 'react'
import DataTable from '../../components/organisms/DataTable'
import LandingTemplate from '../../components/templates/LandingTemplate'
import { filterFields } from '../../utils/constants'
import { getCandidateInfoColumns } from '../../utils/helper/index.d'
import ExportModal from '../../components/organisms/ExportModal'
import CandidatePageHeader from '../../components/organisms/CandidatePageHeader'
import CandidateTableHeader from '../../components/organisms/CandidateTableHeader'
import { CandidateInformationType } from '../../utils/types'
import { getCandidatesInformation } from '../../services/api'
import Theme from '../../theme'
import { Box, CircularProgress, Stack } from '@mui/material'
import FilterPopup from '../../components/organisms/FilterPopup'
import { useNavigate } from 'react-router'
import { DashboardContext } from '../../App'
import { useAuth0 } from '@auth0/auth0-react'

const CandidatesPage = () => {
  const { dashboardRefresh, setDashboardRefresh } = useContext(DashboardContext)
  const [open, setOpen] = useState<boolean>(false)
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false)
  const [searchCandidate, setSearchCandidate] = useState<string>('')
  const [showFilterPopup, setShowFilterPopup] = useState(false)
  const [tableData, setTableData] = useState<CandidateInformationType[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const navigate = useNavigate()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [filterData, setFilterData] = useState<CandidateInformationType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCandidatesInformation()
        setTableData(result)
        setFilterData(result)
        setDashboardRefresh(false)
      } catch (error) {
        console.error('Failed to fetch data from the server:', error)
      }
    }
    const getInfo = async () => {
      await getAccessTokenSilently()
        .then(async (response) => {
          localStorage.setItem('token', response)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    getInfo()
    if (isAuthenticated) {
      setTimeout(() => {
        fetchData()
      }, 3000)
    }
  }, [isAuthenticated, dashboardRefresh])

  useEffect(() => {
    const trimmedSearchCandidate = searchCandidate.trim()
    if (trimmedSearchCandidate === '') {
      setFilterData(tableData)
    }

    const updateData = tableData.filter((row) => {
      const isNameMatch = row.name
        ?.toLowerCase()
        .includes(trimmedSearchCandidate.toLowerCase())

      if (selectedStatus.length > 0) {
        if (selectedStatus.includes('All Status')) {
          return isNameMatch || trimmedSearchCandidate === ''
        }

        const lowercaseSelectedStatus = selectedStatus.map((status) =>
          status.toLowerCase()
        )
        const lowercaseRowStatus = row.status.toLowerCase()

        return (
          (isNameMatch || trimmedSearchCandidate === '') &&
          lowercaseSelectedStatus.includes(lowercaseRowStatus)
        )
      }

      return isNameMatch || trimmedSearchCandidate === ''
    })
    setFilterData(updateData)
  }, [searchCandidate, selectedStatus])

  return (
    <>
      <LandingTemplate
        header={<CandidatePageHeader onExport={() => setOpen(true)} />}
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
              <div data-testid="Container">
                <Stack
                  sx={{
                    borderRadius: '6px',
                    boxShadow: `0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
                  }}
                >
                  <CandidateTableHeader
                    searchQuery={searchCandidate}
                    setSearchQuery={setSearchCandidate}
                    handleFilter={() => setShowFilterPopup(true)}
                    showOption
                  />
                  <Box sx={{ zIndex: 1 }}>
                    <FilterPopup
                      filterFields={filterFields}
                      open={showFilterPopup}
                      setOpen={() => setShowFilterPopup(false)}
                      onStatusChange={(status: string, active: boolean) => {
                        if (!active) {
                          setSelectedStatus([...selectedStatus, status])
                        } else if (active) {
                          setSelectedStatus(
                            selectedStatus.filter((item) => item !== status)
                          )
                        }
                      }}
                    ></FilterPopup>
                  </Box>
                  {filterData ? (
                    <DataTable
                      columns={getCandidateInfoColumns((row) => {
                        setDashboardRefresh(true)
                        navigate(`/candidatedetails?id=${row.id}`)
                      })}
                      rowsData={filterData}
                      showPagination={true}
                    />
                  ) : (
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
                  )}
                </Stack>
              </div>
            )}
          </>
        }
      />
      <ExportModal
        open={open}
        setOpen={setOpen}
        openSuccessModal={openSuccessModal}
        setOpenSuccessModal={setOpenSuccessModal}
      />
    </>
  )
}

export default CandidatesPage
