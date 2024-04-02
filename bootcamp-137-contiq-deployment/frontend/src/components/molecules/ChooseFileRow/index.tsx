import { Stack, styled } from '@mui/material'
import FileIcon from '../../../../public/assets/Icons/File.svg'
import theme from '../../../theme'
import CheckboxComponent from '../../atoms/Checkbox'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface ChooseFileRowProps {
  label: string
  isChecked: boolean
  onCheck: () => void
}

const FileCardRowStack = styled(Stack)({
  height: '74px',
  borderRadius: '4px',
  border: '1px solid #343536',
  padding: '12px 24px 12px 40px',
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

const checkbox = {
  color: 'white',
  // '&.Mui-checked': {
  //   color: 'white',
  // },
}

const ChooseFileRow = ({ ...props }: ChooseFileRowProps) => {
  return (
    <FileCardRowStack
      direction="row"
      alignItems="center"
      data-testid="choose-file"
    >
      <CheckboxComponent
        checkboxStyle={checkbox}
        controlLabelStyle={{ color: 'white' }}
        label={''}
        isChecked={props.isChecked}
        onCheck={props.onCheck}
      />

      <FolderIconStack>
        <Icon src={FileIcon} alt="folder-icon" />
      </FolderIconStack>
      <Typography
        text={props.label}
        variant="body1"
        color={theme.palette.text.white}
        ml={4}
      />
    </FileCardRowStack>
  )
}

export default ChooseFileRow
