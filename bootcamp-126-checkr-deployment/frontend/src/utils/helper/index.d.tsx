import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import Button from '../../components/atoms/Button'
import Theme from '../../theme'
import CustomTypography from '../../components/atoms/Typography'
import Chip from '../../components/atoms/Chip'
import { CandidateInfoRowType } from '../types'
import { ConvertDateTimeToDate, DateToMMDDYYYY } from '../globalFunctions'

export const getCandidateInfoColumns = (
  onRowClick: (row: CandidateInfoRowType) => void
): GridColDef[] => [
  {
    field: 'name',
    headerName: 'NAME',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Button onClick={() => onRowClick(params.row)}>
          <CustomTypography variant="body2" color={Theme.palette.primary[500]}>
            {params.value}
          </CustomTypography>
        </Button>
      )
    },
  },
  {
    field: 'adjudication',
    headerName: 'ADJUDICATION',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      const chipColorStyle =
        params.value === 'ENGAGE'
          ? Theme.palette.accentColors.green
          : Theme.palette.accentColors.yellowEmphasis

      const chipBackgroundColorStyle =
        params.value === 'ENGAGE'
          ? Theme.palette.accentColors.lightGreen
          : Theme.palette.accentColors.lightYellowEmphasis
      return (
        <Chip
          label={
            <CustomTypography variant="caption1">
              {params.value}
            </CustomTypography>
          }
          variant="filled"
          style={{
            textTransform: 'uppercase',
            borderRadius: '4px',
            backgroundColor:
              params.value === '-' ? 'white' : chipBackgroundColorStyle,
            color: params.value === '-' ? 'grey' : chipColorStyle,
          }}
        ></Chip>
      )
    },
  },
  {
    headerName: 'STATUS',
    flex: 1,
    field: 'status',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Chip
          label={
            <CustomTypography variant="caption1">
              {params.value}
            </CustomTypography>
          }
          variant="filled"
          style={{
            textTransform: 'uppercase',
            borderRadius: '4px',
            backgroundColor:
              params.value === 'CLEAR'
                ? Theme.palette.accentColors.lightGreen
                : Theme.palette.accentColors.lightYellowEmphasis,
            color:
              params.value === 'CLEAR'
                ? Theme.palette.accentColors.green
                : Theme.palette.accentColors.yellowEmphasis,
          }}
        ></Chip>
      )
    },
  },
  {
    headerName: 'LOCATION',
    flex: 1,
    field: 'location',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <CustomTypography
          variant="body2"
          color={Theme.palette.text.highEmphasis}
        >
          {params.value}
        </CustomTypography>
      )
    },
  },
  {
    field: 'createdAt',
    headerName: 'DATE',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      const formattedDate = ConvertDateTimeToDate(params.value)
      return (
        <CustomTypography
          variant="body2"
          color={Theme.palette.text.highEmphasis}
        >
          {formattedDate}
        </CustomTypography>
      )
    },
  },
]

export const validateEmailFormat = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export const evaluatePasswordStrength = (password: string): string => {
  const MIN_LENGTH = 8
  const SPECIAL_CHARS_REGEX = /[!@#$%^&*(),.?":{}|<>]/
  const NUMBER_REGEX = /\d/
  const LOWERCASE_REGEX = /[a-z]/
  const UPPERCASE_REGEX = /[A-Z]/

  if (password.length < MIN_LENGTH) {
    return 'Password should have at least 8 characters.'
  }

  if (!SPECIAL_CHARS_REGEX.test(password)) {
    return 'Password should contain at least one special character (!@#$%^&*(),.?":{}|<>).'
  }

  if (!NUMBER_REGEX.test(password)) {
    return 'Password should contain at least one number (0-9).'
  }

  if (!LOWERCASE_REGEX.test(password)) {
    return 'Password should contain at least one lowercase letter (a-z).'
  }

  if (!UPPERCASE_REGEX.test(password)) {
    return 'Password should contain at least one uppercase letter (A-Z).'
  }

  return ''
}

export const validateDataWithRegex = (
  regex: RegExp,
  value: string
): boolean => {
  return regex.test(value)
}

export const CourtSearchColumns: GridColDef[] = [
  {
    field: 'name',
    flex: 1,
    headerName: 'SEARCH',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <CustomTypography variant="body2" color={Theme.palette.primary[500]}>
          {params.value}
        </CustomTypography>
      )
    },
    sortComparator: (a, b) => {
      return b.localeCompare(a)
    },
  },
  {
    field: 'status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Chip
          label={
            <CustomTypography variant="caption1">
              {params.value}
            </CustomTypography>
          }
          variant="filled"
          style={{
            textTransform: 'uppercase',
            borderRadius: '4px',
            backgroundColor:
              params.value === 'CLEAR'
                ? Theme.palette.accentColors.lightGreen
                : Theme.palette.accentColors.lightYellowEmphasis,
            color:
              params.value === 'CLEAR'
                ? Theme.palette.accentColors.green
                : Theme.palette.accentColors.yellowEmphasis,
          }}
        />
      )
    },
    headerName: 'STATUS',
  },
  {
    field: 'date',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      const formattedDate = ConvertDateTimeToDate(params.value)
      return (
        <CustomTypography
          variant="body2"
          color={Theme.palette.text.highEmphasis}
        >
          {formattedDate}
        </CustomTypography>
      )
    },
    headerName: 'DATE',
  },
]

export const AdverseInfoColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'NAME',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <CustomTypography variant="body2" color={Theme.palette.primary[500]}>
          {params.value}
        </CustomTypography>
      )
    },
  },
  {
    flex: 1,
    field: 'status',
    headerName: 'STATUS',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Chip
          label={
            <CustomTypography variant="caption1">
              {params.value}
            </CustomTypography>
          }
          variant="filled"
          style={{
            textTransform: 'uppercase',
            borderRadius: '4px',
            backgroundColor: Theme.palette.accentColors.lightBlue,
            color: Theme.palette.accentColors.blue,
          }}
        />
      )
    },
  },
  {
    flex: 1,
    field: 'preNoticeDate',
    headerName: 'PRE NOTICE DATE',
    renderCell: (params: GridRenderCellParams) => {
      let formattedDate = params.value
      if (params.value.length <= 10)
        formattedDate = convertDateToString(params.value)
      else {
        formattedDate = DateToMMDDYYYY(params.value)
      }
      return (
        <CustomTypography
          color={Theme.palette.text.highEmphasis}
          variant="body2"
        >
          {formattedDate}
        </CustomTypography>
      )
    },
  },
  {
    field: 'postNoticeDate',
    headerName: 'POST NOTICE DATE',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      let formattedDate = params.value
      if (params.value.length <= 10)
        formattedDate = convertDateToString(params.value)
      else {
        formattedDate = DateToMMDDYYYY(params.value)
      }
      return (
        <CustomTypography
          color={Theme.palette.text.highEmphasis}
          variant="body2"
        >
          {formattedDate}
        </CustomTypography>
      )
    },
  },
]

export const helperOnStatusFunction = (status: string) => {
  console.error('Function not implemented.')
}

const convertDateToString = (inputDate: string) => {
  const date = new Date(inputDate)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}
