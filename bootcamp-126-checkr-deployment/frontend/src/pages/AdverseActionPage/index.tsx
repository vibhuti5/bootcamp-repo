import { Box, CircularProgress, Stack } from '@mui/material'
import CustomTypography from '../../components/atoms/Typography'
import CandidateTableHeader from '../../components/organisms/CandidateTableHeader'
import DataTable from '../../components/organisms/DataTable'
import LandingTemplate from '../../components/templates/LandingTemplate'
import { AdverseActionFilterPopupMenu } from '../../utils/constants'
import {
  AdverseInfoColumns,
  helperOnStatusFunction,
} from '../../utils/helper/index.d'
import Theme from '../../theme'
import FilterPopup from '../../components/organisms/FilterPopup'
import { useContext, useEffect, useState } from 'react'
import { AdverseInfoRowType } from '../../utils/types'
import { getAdverseInfo } from '../../services/api'
import { DashboardContext } from '../../App'
import { GridSortModel } from '@mui/x-data-grid'

const AdverseActionPage = () => {
  const { dashboardRefresh, setDashboardRefresh } = useContext(DashboardContext)
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [adverseInfoData, setAdverseInfoData] = useState<AdverseInfoRowType[]>(
    []
  )
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'preNoticeDate',
      sort: 'desc',
    },
  ])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const adverseResponseData = await getAdverseInfo()
        setAdverseInfoData(adverseResponseData)
        setDashboardRefresh(false)
      } catch (error) {
        console.error('Failed to fetch data from the server:', error)
      }
    }

    fetchData()
  }, [dashboardRefresh])

  const openFilter = () => {
    setShowFilter(true)
  }

  const closeFilter = () => {
    setShowFilter(false)
  }

  return (
    <LandingTemplate
      header={<CustomTypography variant="h1">Adverse Actions</CustomTypography>}
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
                  handleFilter={openFilter}
                  searchQuery={''}
                  setSearchQuery={helperOnStatusFunction}
                ></CandidateTableHeader>
                <Box sx={{ zIndex: 1 }}>
                  <FilterPopup
                    filterFields={AdverseActionFilterPopupMenu}
                    open={showFilter}
                    setOpen={closeFilter}
                    onStatusChange={helperOnStatusFunction}
                  ></FilterPopup>
                </Box>
                {adverseInfoData ? (
                  <DataTable
                    columns={AdverseInfoColumns}
                    rowsData={adverseInfoData}
                    showPagination={true}
                    sortModel={sortModel}
                    onSortModelChange={(newModel) => setSortModel(newModel)}
                  ></DataTable>
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
  )
}

export default AdverseActionPage
