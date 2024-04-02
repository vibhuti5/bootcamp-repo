import { RadioGroup, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import { IFolder } from '../../../utils/interface'
import Button from '../../atoms/Button'
import RadioButton from '../../atoms/RadioButton'
import Typography from '../../atoms/Typography'
import FileCardRow from '../FileCardRow'
import GenericModal from '../GenericModal'

interface FolderDeckProps {
  folders: IFolder[]
  onFolderClick: () => void
  onCrossClick?: () => void
  onBackIconClick?: () => void
  onBackClick?: () => void
  onSyncClick?: () => void
}

const StyledButton = styled(Button)({
  border: `2px solid ${theme.palette.grays.gray200}`,
  color: theme.palette.grays.gray200,
  width: '75px',
  height: '34px',
})

const FolderDeck = ({
  folders,
  onBackIconClick,
  onCrossClick,
  onBackClick,
  onSyncClick,
  onFolderClick,
}: FolderDeckProps) => {
  const firstRadioConfig = {
    value: 'Option_1',
    label: (
      <Typography
        text="Sync entire drive"
        variant="body2"
        color={theme.palette.text.highEmphasis}
      />
    ),
  }
  const secondRadioConfig = {
    value: 'Option_2',
    label: 'Sync folders',
  }

  return (
    <GenericModal
      isBackIcon={true}
      isCrossButton={true}
      titleLabel="Add Files"
      open={true}
      onBackButtonClick={onBackIconClick}
      onCrossButtonClick={onCrossClick}
      sx={{
        width: '51vw',
        height: '77.8vh',
      }}
    >
      <Stack px={6} py={4}>
        <Typography
          text="Choose the folders to sync with contiq"
          variant="body2"
          color={theme.palette.text.white}
        />
        <RadioGroup defaultValue="Option_2" row>
          <RadioButton formControl={firstRadioConfig} />
          <RadioButton formControl={secondRadioConfig} />
        </RadioGroup>
        <Stack gap={4} mt={8}>
          {folders.map((item) => (
            <FileCardRow
              key={item.id}
              label={item.name}
              onClick={item.name === 'Zemoso decks' ? onFolderClick : () => ''}
            />
          ))}
        </Stack>
        <Stack direction="row" alignSelf="self-end" mt={15} gap={3}>
          <StyledButton onClick={onBackClick}>Back</StyledButton>
          <StyledButton
            onClick={onSyncClick}
            sx={{
              bgcolor: theme.palette.primary.light,
              color: 'white',
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

export default FolderDeck
