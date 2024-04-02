import { Stack } from '@mui/system'
import Theme from '../../../theme'
import Icon from '../../atoms/Icon'
import CustomTypography from '../../atoms/Typography'
import Goback from '../../../../public/assets/images/back.svg'
import {
  ForgotPasswordEmailConstant,
  ForgotPasswordSubText,
  ForgotPasswordTitle,
  GoBackButton,
  ResetPasswordButton,
} from '../../../utils/constants'
import React from 'react'
import { StyledResetButton, StyledStack, StyledTextField } from './styles'
import { validateEmail } from './utils'

interface ForgotPasswordProps {
  onClick: () => void
  goBack?: () => void
}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const [email, setEmail] = React.useState('')
  const [disableButton, setDisableButton] = React.useState<boolean>(true)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    const login = validateEmail(event.target.value)
    setDisableButton(!login)
  }

  return (
    <StyledStack direction={'column'} gap={'2vh'}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={'1vw'}
        onClick={props.goBack}
      >
        <Icon src={Goback} alt="back" />
        <CustomTypography variant="caption2" color={Theme.palette.primary[500]}>
          {GoBackButton}
        </CustomTypography>
      </Stack>
      <CustomTypography variant="h1" color={Theme.palette.text.highEmphasis}>
        {ForgotPasswordTitle}
      </CustomTypography>
      <CustomTypography
        variant="body2"
        color={Theme.palette.text.mediumEmphasis}
      >
        {ForgotPasswordSubText}
      </CustomTypography>
      <Stack direction={'column'} paddingTop={'1vh'} gap={'3vh'} width={'28vw'}>
        <StyledTextField
          name="Email"
          placeholder={ForgotPasswordEmailConstant}
          value={email}
          onChange={onChange}
        ></StyledTextField>
        <StyledResetButton
          variant="contained"
          onClick={props.onClick}
          disabled={disableButton}
        >
          <CustomTypography
            children={ResetPasswordButton}
            variant="body1"
            color={Theme.palette.structuralColors.white}
          ></CustomTypography>
        </StyledResetButton>
      </Stack>
    </StyledStack>
  )
}

export default ForgotPassword
