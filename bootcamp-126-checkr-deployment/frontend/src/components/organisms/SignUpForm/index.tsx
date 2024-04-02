import {
  Box,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  styled,
} from '@mui/material'
import TextInputField from '../../molecules/TextFieldWithLabel'
import CheckBox from '../../atoms/Checkbox'
import CustomTypography from '../../atoms/Typography'
import Theme from '../../../theme'
import Button from '../../atoms/Button'
import React, { useState } from 'react'
import {
  Agree,
  AlreadyMember,
  ConfirmPassword,
  DoNotMatch,
  Email,
  Password,
  Policy,
  SignIn,
  SignUp,
  SignUpSubtext,
  SigninEmailPlaceholder,
  SigninPasswordPlaceholder,
} from '../../../utils/constants'
import VISIBILITY_OFF from '../../../../public/assets/images/VisibilityOff.svg'
import VISIBILITY_ON from '../../../../public/assets/images/VisibilityOn.svg'
import Icon from '../../atoms/Icon'
import { useFormValidations } from './utils'

const StyledBox = styled(Box)({
  width: '35.139vw',
  height: '87.5vh',
  backgroundColor: Theme.palette.structuralColors.white,
  boxShadow: ` 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
  borderRadius: '6px',
})

const StyledStack = styled(Stack)({
  width: '28.18vw',
  height: '73vh',
  padding: '5vh 3.5vw',
  justifyContent: 'space-evenly',
})

const StyledSignUpButton = styled(Button)({
  width: '28.11vw',
  height: '5.72vh',
  backgroundColor: `${Theme.palette.primary[500]}`,
  ':disabled': {
    backgroundColor: Theme.palette.primary[400],
    color: Theme.palette.structuralColors.white,
    opacity: 0.95,
  },
  '&:hover': {
    bgcolor: Theme.palette.primary[500],
  },
  borderRadius: Theme.spacing(3),
})

const StyledTextInputField = styled(TextInputField)({
  borderColor: Theme.palette.structuralColors.stroke,
  height: '4vh',
  borderRadius: '4px',
})

interface SignUpFormProps {
  handleSignUp: (email: string, password: string) => void
  handleSignIn: () => void
}

const SignUpForm = (props: SignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const {
    userDetails,
    errors,
    isChecked,
    confirmPassword,
    handleEmailChange,
    handlePasswordChange,
    handleCheckboxChange,
    handleConfirmPasswordChange,
    isValidDetails,
  } = useFormValidations()

  return (
    <StyledBox>
      <StyledStack spacing={'2vh'}>
        <Stack spacing={'0.5vh'}>
          <CustomTypography
            variant="h1"
            color={Theme.palette.text.highEmphasis}
          >
            {SignUp}
          </CustomTypography>
          <CustomTypography
            variant="body2"
            color={Theme.palette.text.mediumEmphasis}
          >
            {SignUpSubtext}
          </CustomTypography>
        </Stack>
        <Stack spacing={'3.1vh'}>
          <Stack spacing={Theme.spacing(4)}>
            <StyledTextInputField
              name={Email}
              placeholder={SigninEmailPlaceholder}
              value={userDetails.email}
              onChange={handleEmailChange}
              required
            />
            {errors.email && (
              <CustomTypography variant="caption2" color={'red'}>
                {errors.email}
              </CustomTypography>
            )}
          </Stack>
          <Stack spacing={Theme.spacing(4)}>
            <StyledTextInputField
              name={Password}
              placeholder={SigninPasswordPlaceholder}
              type={showPassword ? 'text' : 'password'}
              value={userDetails.password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword((prevShowPassword) => !prevShowPassword)
                    }
                    edge="end"
                    data-testid="show-icon"
                  >
                    {showPassword ? (
                      <Icon src={VISIBILITY_ON} alt="visibility-on-icon" />
                    ) : (
                      <Icon src={VISIBILITY_OFF} alt="visibility-off-icon" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {userDetails.password.trim().length > 0 && errors.password && (
              <CustomTypography variant="caption2" color={'red'}>
                {errors.password}
              </CustomTypography>
            )}
          </Stack>
          <Stack spacing={Theme.spacing(4)}>
            <StyledTextInputField
              name={ConfirmPassword}
              placeholder={SigninPasswordPlaceholder}
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowConfirmPassword(
                        (prevShowConfirmPassword) => !prevShowConfirmPassword
                      )
                    }
                    edge="end"
                    data-testid="show-icon"
                  >
                    {showConfirmPassword ? (
                      <Icon src={VISIBILITY_ON} alt="visibility-on-icon" />
                    ) : (
                      <Icon src={VISIBILITY_OFF} alt="visibility-off-icon" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {confirmPassword.trim().length > 0 &&
              userDetails.password !== confirmPassword && (
                <CustomTypography variant="caption2" color={'red'}>
                  {DoNotMatch}
                </CustomTypography>
              )}
          </Stack>
        </Stack>
        <FormControlLabel
          control={
            <CheckBox
              checked={isChecked}
              onChange={handleCheckboxChange}
              sx={{ paddingLeft: '0' }}
            />
          }
          label={
            <CustomTypography
              variant="body2"
              color={Theme.palette.text.mediumEmphasis}
            >
              {Agree}
              <span style={{ color: Theme.palette.primary[500] }}>
                {Policy}
              </span>
            </CustomTypography>
          }
        />

        <StyledSignUpButton
          disabled={!isValidDetails || !isChecked}
          onClick={() =>
            props.handleSignUp(userDetails.email, userDetails.password)
          }
          variant="contained"
        >
          <CustomTypography
            variant="body1"
            color={Theme.palette.structuralColors.white}
          >
            {SignUp}
          </CustomTypography>
        </StyledSignUpButton>

        <Stack direction={'row'} justifyContent={'center'}>
          <CustomTypography
            variant="body2"
            color={Theme.palette.text.mediumEmphasis}
          >
            {AlreadyMember}
            <Button onClick={() => props.handleSignIn()}>
              <CustomTypography
                variant="body2"
                color={Theme.palette.primary[500]}
              >
                {SignIn}
              </CustomTypography>
            </Button>
          </CustomTypography>
        </Stack>
      </StyledStack>
    </StyledBox>
  )
}

export default SignUpForm
