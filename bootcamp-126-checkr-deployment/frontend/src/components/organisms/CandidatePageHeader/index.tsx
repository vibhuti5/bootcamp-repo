import { Stack, styled } from '@mui/material'
import CustomTypography from '../../atoms/Typography'
import Theme from '../../../theme'
import {
  Candidates,
  ExportButton,
  ManualOrderButton,
} from '../../../utils/constants'
import Button from '../../atoms/Button'
import Export from '../../../../public/assets/images/Export.svg'
import ManualOrder from '../../../../public/assets/images/Add_box.png'
import Icon from '../../atoms/Icon'

interface CandidatePageHeaderProps {
  onExport: () => void
}
const StyledButton = styled(Button)({
  borderRadius: '6px',
  padding: '8px 16px 8px 16px',
  boxShadow: 'none',
  height: '4.68vh',
  '&:hover': {
    borderColor: Theme.palette.structuralColors.stroke,
  },
})

const CandidatePageHeader = (props: CandidatePageHeaderProps) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <CustomTypography
        variant="h1"
        color={Theme.palette.text.highEmphasis}
        children={Candidates}
      ></CustomTypography>
      <Stack direction="row" spacing={6}>
        <StyledButton
          variant="outlined"
          onClick={props.onExport}
          style={{
            width: '7.39vw',
            borderColor: Theme.palette.structuralColors.stroke,
          }}
          startIcon={<Icon src={Export}></Icon>}
        >
          {
            <CustomTypography
              variant="body1"
              children={ExportButton}
              color={Theme.palette.text.mediumEmphasis}
            ></CustomTypography>
          }
        </StyledButton>
        <StyledButton
          variant="contained"
          style={{
            width: '10.76vw',
          }}
          startIcon={<Icon src={ManualOrder}></Icon>}
        >
          {
            <CustomTypography
              variant="body1"
              children={ManualOrderButton}
              color={Theme.palette.structuralColors.white}
            ></CustomTypography>
          }
        </StyledButton>
      </Stack>
    </Stack>
  )
}

export default CandidatePageHeader
