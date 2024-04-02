import { Stack } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../../../theme'
import Icon from '../../atoms/Icon'
import Back from '../../../../public/assets/images/back.svg'
import CustomTypography from '../../atoms/Typography'
import OtpInput from 'react-otp-input'
import Button from '../../atoms/Button'
import {
  ContinueButton,
  GoBackButton,
  OtpFialedText,
  OtpFormCaption,
  OtpFormTitle,
  ResendOtpText,
} from '../../../utils/constants'
import { ContinueButtonStyle, OtpInputStyle, StyledStack } from './styles'

const spacing = <Stack width={'1vw'}></Stack>

interface OtpFormProps {
  goBack?: () => void
  continueButtonClick?: () => void
}

const OtpForm = (props: OtpFormProps) => {
  const [otp, setOtp] = useState('')

  return (
    <StyledStack direction={'column'} gap={'2vh'}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={'1vw'}
        onClick={props.goBack}
      >
        <Icon src={Back} alt="back" />
        <CustomTypography variant="caption2" color={Theme.palette.primary[500]}>
          {GoBackButton}
        </CustomTypography>
      </Stack>
      <CustomTypography variant="h1" color={Theme.palette.text.highEmphasis}>
        {OtpFormTitle}
      </CustomTypography>
      <CustomTypography
        variant="body2"
        color={Theme.palette.text.mediumEmphasis}
      >
        {OtpFormCaption}
      </CustomTypography>
      <Stack direction={'column'} paddingTop={'1vh'} gap={'3vh'} width={'28vw'}>
        <OtpInput
          data-testid={'otp-input'}
          value={otp}
          inputType="tel"
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          renderSeparator={spacing}
          inputStyle={OtpInputStyle}
        />
        <Button
          variant="contained"
          disabled={otp.length < 4}
          sx={ContinueButtonStyle}
          onClick={props.continueButtonClick}
        >
          {ContinueButton}
        </Button>
      </Stack>
      <Stack direction={'row'} justifyContent={'center'}>
        <CustomTypography
          variant="body2"
          color={Theme.palette.text.mediumEmphasis}
        >
          {OtpFialedText}&nbsp;
        </CustomTypography>
        <CustomTypography variant="body1" color={Theme.palette.primary[500]}>
          {ResendOtpText}
        </CustomTypography>
      </Stack>
    </StyledStack>
  )
}

export default OtpForm
