import { Stack, styled } from '@mui/material'
import ForwardIcon from '../../../../public/assets/Icons/Forward.svg'
import FolderIcon from '../../../../public/assets/Icons/folder.svg'
import theme from '../../../theme'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface FileCardRowProps {
  label: string
  onClick: () => void
}

const FileCardRowStack = styled(Stack)({
  padding: '12px 16px',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '4px',
  border: '1px solid #343536',
  cursor: 'pointer',
  height: '74px',
})

const FolderIconStack = styled(Stack)({
  width: '50px',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '7px',
  border: '1px solid var(--structural-border, #BFC4C8)',
  background: 'var(--grey-300, #343536)',
})

const FileCardRow = ({ onClick, ...props }: FileCardRowProps) => {
  return (
    <FileCardRowStack
      direction="row"
      spacing={1}
      data-testid="file-card"
      onClick={onClick}
    >
      <Stack direction="row" alignItems="center" gap={4}>
        <FolderIconStack>
          <Icon
            src={FolderIcon}
            alt="folder-icon"
            style={{ width: '17.12px', height: '16.90px' }}
          />
        </FolderIconStack>
        <Typography
          text={props.label}
          variant="body1"
          color={theme.palette.text.white}
        />
      </Stack>
      <Icon src={ForwardIcon} alt="forward-icon" />
    </FileCardRowStack>
  )
}

export default FileCardRow
