import { Stack, styled } from '@mui/material'
import { useFileSelection } from '../../../hooks/useFileSelection'
import theme from '../../../theme'
import { IFile } from '../../../utils/interface'
import Button from '../../atoms/Button'
import ChooseFileRow from '../../molecules/ChooseFileRow'
import GenericModal from '../../molecules/GenericModal'

interface CloudUploadModalProps {
  isOpen: boolean
  files: IFile[]
  onBackIconClick?: () => void
  onBackClick?: () => void
  onSyncClick?: (selectedFile: IFile[]) => void
  onCrossClick?: () => void
}

const StyledButton = styled(Button)({
  border: `2px solid ${theme.palette.grays.gray200}`,
  color: theme.palette.grays.gray200,
})

const CloudUploadModal = ({
  isOpen,
  files,
  onBackIconClick,
  onBackClick,
  onCrossClick,
  onSyncClick,
}: CloudUploadModalProps) => {
  const { handleCheck, selectedFiles } = useFileSelection()
  return (
    <GenericModal
      isBackIcon={true}
      isCrossButton={true}
      titleLabel={'Zemoso decks'}
      onBackButtonClick={onBackIconClick}
      onCrossButtonClick={onCrossClick}
      open={isOpen}
      sx={{ width: '51vw', height: '77.8vh' }}
    >
      <Stack px={6}>
        <Stack gap={4} mt={8}>
          {files.map((item) => (
            <ChooseFileRow
              key={item.id}
              label={item.name}
              isChecked={selectedFiles.includes(item)}
              onCheck={() => handleCheck(item)}
            />
          ))}
        </Stack>
        <Stack direction="row" alignSelf="self-end" mt={15} gap={3}>
          <StyledButton onClick={onBackClick}>Back</StyledButton>
          <StyledButton
            onClick={() => onSyncClick?.(selectedFiles)}
            disabled={selectedFiles.length === 0}
            sx={{
              backgroundColor:
                selectedFiles.length === 0
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
              color: theme.palette.primary.light,
              border: 'none',
            }}
          >
            Sync
          </StyledButton>
        </Stack>
      </Stack>
    </GenericModal>
  )
}

export default CloudUploadModal
