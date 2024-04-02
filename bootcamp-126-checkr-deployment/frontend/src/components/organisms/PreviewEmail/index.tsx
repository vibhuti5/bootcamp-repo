import React, { useState } from 'react'
import { Box, Divider, FormControlLabel, Stack, styled } from '@mui/material'
import CustomTypography from '../../atoms/Typography'
import Checkbox from '../../atoms/Checkbox'
import Button from '../../atoms/Button'
import {
  CheckboxOption,
  EmailAction,
  EmailBody,
  EmailData,
  EmailDays,
  PreviewButton,
} from '../../../utils/constants'
import Theme from '../../../theme'

interface PreviewEmailProps {
  handleButtonClick: () => void
  candidateName: string
  candidateEmail: string
  from: string
  charges: string[]
  setCharges: React.Dispatch<React.SetStateAction<string[]>>
}

const StyledFooter = styled(Box)({
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const StyledOuterBox = styled(Box)({
  width: '77.306vw',
  borderRadius: '12px',
  border: '1px solid white',
  boxShadow: `0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
  backgroundColor: Theme.palette.structuralColors.white,
})

const StyledButton = styled(Button)({
  color: Theme.palette.structuralColors.white,
  width: 'auto',
  borderRadius: '6px',
})

const PreviewEmail = (props: PreviewEmailProps) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([])

  const handleCheckboxChange = (id: string, value: string) => {
    if (selectedCheckboxes.includes(id)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== id))
      props.setCharges(props.charges.filter((item) => item !== value))
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, id])
      props.setCharges([...props.charges, value])
    }
  }

  const handleButtonClick = () => {
    if (selectedCheckboxes.length > 0) {
      props.handleButtonClick()
    }
  }

  EmailData[0].content = props.from
  EmailData[1].content = String(props.candidateEmail)

  EmailBody.greeting = 'Dear ' + props.candidateName
  const buttonStyle =
    selectedCheckboxes.length > 0
      ? Theme.palette.primary[500]
      : Theme.palette.primary[400]

  return (
    <StyledOuterBox>
      <Stack>
        {EmailData.map((option) => (
          <Box key={option.id}>
            <Box sx={{ padding: '15px 20px' }}>
              <CustomTypography
                variant="caption2"
                color={Theme.palette.text.highEmphasis}
              >
                {option.label}
              </CustomTypography>
              <CustomTypography
                variant="caption2"
                color={Theme.palette.text.mediumEmphasis}
              >
                {option.content}
              </CustomTypography>
            </Box>
            <Divider />
          </Box>
        ))}

        <Box>
          <Box sx={{ px: '20px', paddingTop: '20px' }}>
            <Box width={'57.247vw'}>
              <CustomTypography
                variant="body2"
                color={Theme.palette.text.mediumEmphasis}
              >
                {EmailBody.greeting}
                <br />
                <br />
                {EmailBody.intro}
              </CustomTypography>
            </Box>
            <br />
            <CustomTypography
              variant="caption1"
              color={Theme.palette.text.highEmphasis}
            >
              {EmailBody.preAdverseAction}
            </CustomTypography>
            <Stack>
              {CheckboxOption.map((option) => (
                <FormControlLabel
                  key={option.id}
                  control={
                    <Checkbox
                      data-testid={'select-email-check'}
                      checked={selectedCheckboxes.includes(option.id)}
                      onChange={(e) =>
                        handleCheckboxChange(option.id, e.target.value)
                      }
                      value={option.label}
                    />
                  }
                  label={
                    <CustomTypography
                      variant="caption2"
                      color={Theme.palette.text.mediumEmphasis}
                    >
                      {option.label}
                    </CustomTypography>
                  }
                />
              ))}
            </Stack>
            <br />
            <Box width={'48.316vw'} paddingBottom={'6.23vh'}>
              <CustomTypography
                variant="caption2"
                color={Theme.palette.text.mediumEmphasis}
              >
                {EmailBody.conclusion}
                <br />
                <br />
                {EmailBody.ending}
                <br />
                {EmailBody.sign}
              </CustomTypography>
            </Box>
          </Box>
          <Divider />
        </Box>
        <StyledFooter>
          <Stack direction={'row'} alignItems={'center'}>
            <CustomTypography
              variant="body2"
              color={Theme.palette.text.mediumEmphasis}
            >
              {EmailAction}
            </CustomTypography>
            <Box
              border={'1px solid' + Theme.palette.structuralColors.stroke}
              marginX={'1vw'}
              borderRadius={Theme.spacing(2)}
              p={'1.5vh 1.5vw'}
            >
              <CustomTypography
                variant="body2"
                color={Theme.palette.text.mediumEmphasis}
              >
                7
              </CustomTypography>
            </Box>
            <CustomTypography
              variant="body2"
              sx={{
                marginLeft: '20px',
              }}
              color={Theme.palette.text.mediumEmphasis}
            >
              {EmailDays}
            </CustomTypography>
          </Stack>
          <StyledButton
            onClick={handleButtonClick}
            disabled={selectedCheckboxes.length === 0}
            sx={{
              backgroundColor: buttonStyle,
              '&:hover': {
                backgroundColor: buttonStyle,
              },
            }}
          >
            {PreviewButton}
          </StyledButton>
        </StyledFooter>
      </Stack>
    </StyledOuterBox>
  )
}

export default PreviewEmail
