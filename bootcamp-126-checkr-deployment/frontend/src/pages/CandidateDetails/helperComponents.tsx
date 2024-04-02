import { Box, CircularProgress, Stack } from '@mui/material'
import CollapsableCard from '../../components/organisms/CollapsableCard'
import {
  EngageButton,
  InfoTabProps,
  PreAdverseButton,
} from '../../utils/constants'
import Button from '../../components/atoms/Button'
import Theme from '../../theme'
import Icon from '../../components/atoms/Icon'
import CustomTypography from '../../components/atoms/Typography'
import Back from '../../../public/assets/images/backGray.svg'
import { useContext, useEffect, useState } from 'react'
import NAME from '../../../public/assets/images/profile.svg'
import EMAIL from '../../../public/assets/images/email.svg'
import IDCARD from '../../../public/assets/images/dob.svg'
import PHONE from '../../../public/assets/images/phone.svg'
import LOCATION from '../../../public/assets/images/location.svg'
import CALENDAR_ONE from '../../../public/assets/images/calendar1.svg'
import SECURITY from '../../../public/assets/images/security.svg'
import CLOCK from '../../../public/assets/images/clock.svg'
import HAMMER from '../../../public/assets/images/hammer.svg'
import PACKAGE from '../../../public/assets/images/package.svg'
import CLEAR from '../../../public/assets/images/clear.svg'
import CALENDAR_TWO from '../../../public/assets/images/calendar2.svg'
import DataTable from '../../components/organisms/DataTable'
import { CourtSearchColumns } from '../../utils/helper/index.d'
import {
  Adjudication,
  CandidateDetailsResponse,
  CandidateReportResponse,
  CandidateStatus,
  SearchTypes,
} from '../../utils/types'
import PreviewEmail from '../../components/organisms/PreviewEmail'
import ConfirmModal from '../../components/organisms/ConfirmModal'
import {
  getCandidateInfo,
  patchAdverseaction,
  postAdverseAction,
} from '../../services/api'
import { useNavigate } from 'react-router'
import { DashboardContext } from '../../App'
import {
  CalculateTurnAroundTime,
  ConvertDateTimeToLocalDate,
} from '../../utils/globalFunctions'

interface CandidateDetailsHeaderProps {
  title: string
  buttons: boolean
  preAdverseAction?: () => void
  id: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setHeaderButtons: React.Dispatch<React.SetStateAction<boolean>>
  candidateName: any
}

export const CandidateDetailsHeader = (props: CandidateDetailsHeaderProps) => {
  const navigate = useNavigate()
  const { setDashboardRefresh } = useContext(DashboardContext)
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Stack direction={'row'} gap={'1vw'} alignItems={'center'}>
        <Box
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (props.buttons) {
              navigate(-1)
            } else {
              props.setTitle(props.candidateName)
              props.setHeaderButtons(true)
            }
          }}
        >
          <Icon src={Back} alt="back" />
        </Box>
        <CustomTypography variant="h1" color={Theme.palette.text.highEmphasis}>
          {props.title}
        </CustomTypography>
      </Stack>
      {props.buttons && (
        <Stack gap={'1vw'} direction={'row'}>
          <Button
            variant="contained"
            sx={{
              color: Theme.palette.text.mediumEmphasis,
              bgcolor: Theme.palette.structuralColors.white,
              border: '1px solid' + Theme.palette.structuralColors.stroke,
              borderRadius: Theme.spacing(3),
              boxShadow: 'none',
              '&:hover': {
                bgcolor: Theme.palette.structuralColors.white,
              },
            }}
            onClick={props.preAdverseAction}
          >
            {PreAdverseButton}
          </Button>
          <Button
            variant="contained"
            sx={{
              color: Theme.palette.structuralColors.white,
              bgcolor: Theme.palette.primary[500],
              borderRadius: Theme.spacing(3),
              boxShadow: 'none',
            }}
            onClick={async () => {
              const candidateInfo = await getCandidateInfo(props.id)
              patchAdverseaction(candidateInfo.id, {
                adjudication: Adjudication.engaged,
                status: CandidateStatus.clear,
              })
              setDashboardRefresh(true)
              navigate('/dashboard')
            }}
          >
            {EngageButton}
          </Button>
        </Stack>
      )}
    </Stack>
  )
}

interface CandidateDetailsMainProps {
  candidateDetails: CandidateDetailsResponse | null
  candidateReport: CandidateReportResponse | null
  courtSearches: SearchTypes[]
}

export const CandidateDetailsMain = (props: CandidateDetailsMainProps) => {
  const [candidateDetails, setCandidateDetails] = useState<
    InfoTabProps[] | null
  >(null)

  const [candidateReport, setCandidateReport] = useState<InfoTabProps[] | null>(
    null
  )

  useEffect(() => {
    if (props.candidateDetails) {
      const CandidateInfoValues: InfoTabProps[] = [
        {
          id: 1,
          title: 'Name',
          label: props.candidateDetails.name,
          icon: NAME,
        },
        {
          id: 2,
          title: 'Email',
          label: props.candidateDetails.email,
          icon: EMAIL,
        },
        {
          id: 3,
          title: 'DOB',
          label:
            props.candidateDetails.dob.substring(0, 10) +
            ` (${props.candidateDetails.age})`,
          icon: IDCARD,
        },
        {
          id: 4,
          title: 'Phone',
          label: String(props.candidateDetails.phone),
          icon: PHONE,
        },
        {
          id: 5,
          title: 'Zipcode',
          label: String(props.candidateDetails.zipcode),
          icon: LOCATION,
        },
        {
          id: 6,
          title: 'Social Security ',
          label: props.candidateDetails.socialSecurity,
          icon: SECURITY,
        },
        {
          id: 7,
          title: 'Drivers License',
          label: props.candidateDetails.driverLicense,
          icon: IDCARD,
        },
        {
          id: 8,
          title: 'Created At ',
          label: ConvertDateTimeToLocalDate(props.candidateDetails.createdAt),
          icon: CALENDAR_ONE,
        },
      ]

      setCandidateDetails(CandidateInfoValues)
    }
    if (props.candidateReport) {
      const ReportInfoValues = [
        {
          id: 1,
          title: 'Status',
          label: props.candidateReport.status,
          icon: CLEAR,
        },
        {
          id: 2,
          title: 'Adjudication ',
          label: props.candidateReport.adjudication,
          icon: HAMMER,
        },
        {
          id: 3,
          title: 'Package',
          label: props.candidateReport.packages,
          icon: PACKAGE,
        },
        {
          id: 4,
          title: 'Created At ',
          label: ConvertDateTimeToLocalDate(props.candidateReport.createdAt),
          icon: CALENDAR_ONE,
        },
        {
          id: 5,
          title: 'Completed Date',
          label: ConvertDateTimeToLocalDate(
            props.candidateReport.completedDate
          ),
          icon: CALENDAR_TWO,
        },
        {
          id: 6,
          title: 'Turn Around Time',
          label: CalculateTurnAroundTime(
            props.candidateReport.createdAt,
            props.candidateReport.completedDate
          ),
          icon: CLOCK,
        },
      ]
      setCandidateReport(ReportInfoValues)
    }
  }, [props.candidateDetails, props.candidateReport])

  return (
    <Stack direction={'column'} gap={'2vh'}>
      <Box>
        {candidateDetails && (
          <CollapsableCard
            label={'Candidate Information'}
            details={candidateDetails}
          />
        )}
      </Box>
      <Box>
        {candidateReport && (
          <CollapsableCard
            label={'Report Information'}
            details={candidateReport}
          />
        )}
      </Box>
      <Box width={'77.306vw'}>
        <Stack
          bgcolor={Theme.palette.structuralColors.white}
          p={'2vh 1vw'}
          borderRadius={Theme.spacing(2)}
        >
          <CustomTypography
            variant="subtitle1"
            color={Theme.palette.text.highEmphasis}
          >
            Court Searches
          </CustomTypography>
        </Stack>
        {props.courtSearches ? (
          <DataTable
            columns={CourtSearchColumns}
            rowsData={props.courtSearches}
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
      </Box>
    </Stack>
  )
}

interface PreviewEmailMainProps {
  id: string
  from: string
  to: string
  name: string
  setCandidateDetailsMain: React.Dispatch<React.SetStateAction<boolean>>
  setCompletedModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const PreviewEmailMain = (props: PreviewEmailMainProps) => {
  const [openPreviewModal, setOpenPreviewModal] = useState<boolean>(false)
  const [openPreviewEmail, setOpenPreviewEmail] = useState<boolean>(true)
  const [charges, setCharges] = useState<string[]>([])
  return (
    <>
      {openPreviewEmail && (
        <PreviewEmail
          handleButtonClick={() => {
            setOpenPreviewEmail(false)
            setOpenPreviewModal(true)
          }}
          candidateName={props.name}
          candidateEmail={props.to}
          from={props.from}
          charges={charges}
          setCharges={setCharges}
        />
      )}
      <ConfirmModal
        submitNotice={async () => {
          const candidateInfo: any = await getCandidateInfo(props.id)
          if (candidateInfo) {
            const response = await patchAdverseaction(candidateInfo.id, {
              adjudication: Adjudication.adverseAction,
              status: CandidateStatus.consider,
            })
            postAdverseAction(candidateInfo.id, {
              status: 'SCHEDULED',
              preNoticeDate: Date(),
              postNoticeDate: Date(),
            })
            if (response === 200) {
              setOpenPreviewModal(false)
              props.setCompletedModal(true)
              props.setCandidateDetailsMain(true)
            }
          }
        }}
        from={props.from}
        to={props.to}
        name={props.name}
        open={openPreviewModal}
        onClose={() => {
          setOpenPreviewModal(false)
          props.setCandidateDetailsMain(true)
        }}
        charges={charges}
      />
    </>
  )
}
