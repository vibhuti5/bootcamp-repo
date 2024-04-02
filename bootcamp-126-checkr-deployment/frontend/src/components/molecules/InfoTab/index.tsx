import styled from '@emotion/styled'
import { Box, Stack } from '@mui/material'
import React from 'react'
import Theme from '../../../theme'
import Icon from '../../atoms/Icon'
import CustomTypography from '../../atoms/Typography'

const StyledStack = styled(Stack)`
  width: 22.5vw;
  min-height: 6vh;
  background-color: ${Theme.palette.primary[50]};
  border: 1px solid ${Theme.palette.structuralColors.stroke};
  padding: 1.56vh 0.87vw;
  border-radius: ${Theme.spacing(5)};
`
const IconBox = styled(Box)`
  border-radius: ${Theme.spacing(5)};
  background-color: ${Theme.palette.structuralColors.white};
  border: 1px solid ${Theme.palette.structuralColors.stroke};
  padding: 1.56vh 0.87vw;
`

interface InfoTabProps {
  title: string
  value: string
  icon: string
}

const InfoTab = (props: InfoTabProps) => {
  return (
    <StyledStack direction={'row'} gap={'1vw'} alignItems={'center'}>
      <IconBox>
        <Icon src={props.icon} alt="name" />
      </IconBox>
      <Box display={'block'}>
        <CustomTypography
          variant="body2"
          color={Theme.palette.text.mediumEmphasis}
        >
          {props.title}
        </CustomTypography>
        <CustomTypography
          variant="body1"
          color={Theme.palette.text.highEmphasis}
        >
          {props.value}
        </CustomTypography>
      </Box>
    </StyledStack>
  )
}

export default InfoTab
