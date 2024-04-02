import { Stack } from '@mui/material'
import React from 'react'
import Theme from '../../../theme'
import CustomTypography from '../../atoms/Typography'
import DateSelector from '../../molecules/DateSelector'
import dayjs from 'dayjs'
import Button from '../../atoms/Button'
import { CloseModal } from '../../../utils/globalFunctions'
import {
  StyledModal,
  StyledStack,
  StyledDivider,
  ExportButtonStyle,
} from './styles'
import { ExportButtonClick } from './utils'
import {
  DateSelectorFrom,
  DateSelectorTo,
  DownloadText,
  ExportModalTitle,
  ExportReportButton,
} from '../../../utils/constants'
import CompletedModal from '../../molecules/CompletedModal'

interface ExportModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  openSuccessModal: boolean
  setOpenSuccessModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ExportModal = (props: ExportModalProps) => {
  const [selectedFromDate, setSelectedFromDate] = React.useState<dayjs.Dayjs>(
    dayjs()
  )
  const [selectedToDate, setSelectedToDate] = React.useState<dayjs.Dayjs>(
    dayjs()
  )

  const [error, setError] = React.useState<string>('')

  const handleFromDateChange = (date: dayjs.Dayjs) => {
    setSelectedFromDate(date)
    if (date > selectedToDate) {
      setError('From date cannot be greater than to date.')
    } else {
      setError('')
    }
  }

  const handleToDateChange = (date: dayjs.Dayjs) => {
    setSelectedToDate(date)
    if (selectedFromDate > date) {
      setError('From date cannot be greater than to date.')
    } else {
      setError('')
    }
  }

  return (
    <>
      <StyledModal
        open={props.open}
        onClose={() => CloseModal(props.setOpen)}
        data-testid="modal-overlay"
      >
        <Stack>
          <StyledStack>
            <CustomTypography
              variant="subtitle1"
              color={Theme.palette.text.highEmphasis}
            >
              {ExportModalTitle}
            </CustomTypography>
          </StyledStack>
          <StyledDivider />
          <StyledStack direction={'row'} gap={'2vw'} height={'30vh'}>
            <DateSelector
              text={DateSelectorFrom}
              value={selectedFromDate}
              onChange={handleFromDateChange}
            />
            <DateSelector
              text={DateSelectorTo}
              value={selectedToDate}
              onChange={handleToDateChange}
            />
          </StyledStack>
          <StyledDivider />
          <StyledStack alignItems={'flex-end'}>
            <Button
              variant="contained"
              sx={ExportButtonStyle}
              onClick={() =>
                ExportButtonClick(props.setOpen, props.setOpenSuccessModal)
              }
              disabled={
                !selectedFromDate ||
                !selectedToDate ||
                selectedFromDate > selectedToDate
              }
            >
              {ExportReportButton}
            </Button>
          </StyledStack>
          {error && (
            <StyledStack>
              <CustomTypography variant="caption2" color={'red'}>
                {error}
              </CustomTypography>
            </StyledStack>
          )}
        </Stack>
      </StyledModal>
      <CompletedModal
        modalText={DownloadText}
        open={props.openSuccessModal}
        setOpen={props.setOpenSuccessModal}
        redirect={''}
      />
    </>
  )
}

export default ExportModal
