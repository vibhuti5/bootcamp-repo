import { Backdrop, Divider, Paper, Stack, styled } from '@mui/material'
import Theme from '../../../theme'

export const StyledPaper = styled(Paper)`
  width: 18vw;
  height: auto;
  background-color: ${Theme.palette.structuralColors.white};
  box-shadow: box-shadow: 0px 4px 16px 0px #0303030A;
  position: absolute;
  top: 22%;
  right: 11.5%;
`
export const InnerStyledStack = styled(Stack)`
  padding: 1vh 1vw;
`
export const StyledDivider = styled(Divider)`
  width: auto;
  border-color: ${Theme.palette.structuralColors.stroke};
`
export const StyledBackDrop = styled(Backdrop)({
  marginLeft: '68.18vw',
  zIndex: 9999,
  marginBottom: '2vh',
})
