import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material'
import Theme from '../../../theme'
import CustomTypography from '../../atoms/Typography'
import {
  Email,
  ForgotPasswordLink,
  NoAccount,
  OR,
  Password,
  Rememberme,
  SignIn,
  SigninEmailPlaceholder,
  SigninPasswordPlaceholder,
  SigninSubtext,
  SigninWithGit,
  SigninWithGoogle,
  Signup,
} from '../../../utils/constants'
import Icon from '../../atoms/Icon'
import Google from '../../../../public/assets/images/Google.svg'
import Github from '../../../../public/assets/images/Github.svg'
import React, { useEffect, useState } from 'react'
import VISIBILITY_OFF from '../../../../public/assets/images/VisibilityOff.svg'
import VISIBILITY_ON from '../../../../public/assets/images/VisibilityOn.svg'
import {
  StyledCard,
  StyledSigninButton,
  StyledSocialMediaButtton,
  StyledTextField,
} from './styles'
import { LoginValidation, emailValidator, passwordValidator } from './utils'
import CheckBox from '../../atoms/Checkbox'
import { EmailPasswordError } from '../../../utils/types'

interface SigninProps {
  signIn: (email: string, password: string) => void
  forgotPassword: () => void
  singleSignOn: () => void
  signUp: () => void
}

const Signin = (props: SigninProps) => {
  const [email, setEmail] = React.useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [error, setError] = useState<EmailPasswordError>({
    email: false,
    password: false,
  })

  const [password, setPassword] = React.useState('')
  const [disableButton, setDisableButton] = React.useState<boolean>(true)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    const login = emailValidator(event.target.value)
    setError({
      ...error,
      email: !login,
    })
  }

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value)
    const login = passwordValidator(event.target.value)
    setError({
      ...error,
      password: !login,
    })
  }

  useEffect(() => {
    const disable = LoginValidation(email, password)
    setDisableButton(!disable)
  }, [email, password])
  return (
    <StyledCard>
      <Stack
        sx={{ width: '28.18vw', height: '74.21vh', padding: '3vw' }}
        justifyContent={'space-evenly'}
      >
        <Stack spacing={'0.5vh'}>
          <CustomTypography
            variant="h1"
            children={SignIn}
            color={Theme.palette.text.highEmphasis}
          />
          <CustomTypography
            variant="body2"
            children={SigninSubtext}
            color={Theme.palette.text.mediumEmphasis}
          />
        </Stack>
        <Stack spacing={'3vh'}>
          <Stack spacing={'1vh'}>
            <StyledTextField
              name={Email}
              placeholder={SigninEmailPlaceholder}
              value={email}
              onChange={handleEmailChange}
              required
            ></StyledTextField>
            {error.email && (
              <CustomTypography variant="caption2" color={'red'}>
                {'Enter valid email. Example: abc@gmail.com'}
              </CustomTypography>
            )}
          </Stack>
          <Stack spacing={'1vh'}>
            <StyledTextField
              name={Password}
              placeholder={SigninPasswordPlaceholder}
              value={password}
              type={showPassword ? 'password' : 'text'}
              required
              data-testid="password-inputfield"
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    data-testid="show-icon"
                  >
                    {showPassword ? (
                      <Icon src={VISIBILITY_OFF} alt="visibility-on-icon" />
                    ) : (
                      <Icon src={VISIBILITY_ON} alt="visibility-off-icon" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            ></StyledTextField>
            {error.password && (
              <CustomTypography variant="caption2" color={'red'}>
                {'Enter valid password'}
              </CustomTypography>
            )}
          </Stack>
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <FormControlLabel
            control={<CheckBox />}
            label={
              <CustomTypography
                variant="body2"
                children={Rememberme}
                color={Theme.palette.text.mediumEmphasis}
              />
            }
          />
          <Box
            data-testId="forgotPwd"
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              props.forgotPassword()
            }}
          >
            <CustomTypography
              variant="body1"
              children={ForgotPasswordLink}
              color={Theme.palette.primary[500]}
            />
          </Box>
        </Stack>
        <StyledSigninButton
          variant="contained"
          disabled={disableButton}
          data-testid="signin button"
          onClick={() => {
            props.signIn(email, password)
          }}
        >
          <CustomTypography
            variant="body1"
            color={Theme.palette.structuralColors.white}
            children={SignIn}
          />
        </StyledSigninButton>
        <Divider variant="fullWidth" textAlign="center">
          <CustomTypography
            variant="body2"
            children={OR}
            color={Theme.palette.text.mediumEmphasis}
          />
        </Divider>
        <Stack spacing={'2vh'}>
          <StyledSocialMediaButtton
            startIcon={<Icon src={Google}></Icon>}
            onClick={() => {
              props.singleSignOn()
            }}
          >
            <CustomTypography
              variant="body2"
              color={Theme.palette.text.highEmphasis}
              children={SigninWithGoogle}
            />
          </StyledSocialMediaButtton>
          <StyledSocialMediaButtton startIcon={<Icon src={Github}></Icon>}>
            <CustomTypography
              variant="body2"
              color={Theme.palette.text.highEmphasis}
              children={SigninWithGit}
            />
          </StyledSocialMediaButtton>
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} spacing={2}>
          <CustomTypography
            children={NoAccount}
            variant="body2"
            color={Theme.palette.text.mediumEmphasis}
          />
          <Box onClick={props.signUp}>
            <CustomTypography
              children={Signup}
              variant="body1"
              color={Theme.palette.primary[500]}
            />
          </Box>
        </Stack>
      </Stack>
    </StyledCard>
  )
}

export default Signin
