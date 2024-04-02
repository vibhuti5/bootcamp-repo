import { Stack, styled, Box } from '@mui/material'
import Icon from '../../atoms/Icon'
import PlusIcon from '../../../../public/assets/Icons/plus.svg'
import MinusIcon from '../../../../public/assets/Icons/minus.svg'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'

interface PaginationProps {
  totalPages: number
  currentPage: number
  handleZoomIn: React.MouseEventHandler<HTMLInputElement>
  handleZoomOut: React.MouseEventHandler<HTMLInputElement>
  zoomPercent: number
}

const PageCountStack = styled(
  Stack
)(`background-color: ${theme.palette.grays.gray400};
border-radius: 8px;
width: 23.06vw;
padding: 8px 30px;
margin-left: 10px;
align-items: center;`)

const PercentageStack = styled(Stack)(
  `display: flex;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
padding: 6px 12px;
background: ${theme.palette.grays.gray300};`
)

const Pagination = ({
  handleZoomIn,
  handleZoomOut,
  ...props
}: PaginationProps) => {
  const pageCount = 'Page ' + props.currentPage + ' of ' + props.totalPages
  const percentage = props.zoomPercent + '%'
  return (
    <PageCountStack
      direction="row"
      data-testid="pagination-card"
      justifyContent="space-between"
    >
      <Typography
        text={pageCount}
        variant="body1"
        color={theme.palette.text.highEmphasis}
      />

      <PercentageStack direction="row">
        <Box data-testid="zoom-in" onClick={handleZoomIn}>
          <Icon
            src={MinusIcon}
            alt="minus-icon"
            style={{
              cursor: 'pointer',
            }}
          ></Icon>
        </Box>
        <Typography
          text={percentage}
          variant="body1"
          color={theme.palette.text.white}
        />
        <Box data-testid="zoom-out" onClick={handleZoomOut}>
          <Icon
            src={PlusIcon}
            alt="plus-icon"
            style={{
              cursor: 'pointer',
            }}
          ></Icon>
        </Box>
      </PercentageStack>
    </PageCountStack>
  )
}

export default Pagination
