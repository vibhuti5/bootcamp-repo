import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  styled,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InfoTab from '../../molecules/InfoTab'
import { InfoTabProps } from '../../../utils/constants'
import CustomTypography from '../../atoms/Typography'
import Theme from '../../../theme'

interface CollapsableCardProps {
  label: string
  details: InfoTabProps[]
}

const StyledAccordion = styled(Accordion)({
  width: '77.306vw',
  borderRadius: '8px',
  boxShadow: `0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
})

const StyledAccordionSummary = styled(AccordionSummary)({
  padding: '0 12px 0 16px',
  minHeight: '7.2917vh',
})

const StyledAccordionDetails = styled(AccordionDetails)({
  borderTop: `1px solid ${Theme.palette.structuralColors.stroke}`,
  padding: '16px',
})

const CollapsableCard = (props: CollapsableCardProps) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <CustomTypography variant={'subtitle1'}>{props.label}</CustomTypography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Grid container spacing={6}>
          {props.details.map((value) => (
            <Grid item xs={4} key={value.id}>
              <InfoTab
                title={value.title}
                value={value.label}
                icon={value.icon}
              ></InfoTab>
            </Grid>
          ))}
        </Grid>
      </StyledAccordionDetails>
    </StyledAccordion>
  )
}

export default CollapsableCard
