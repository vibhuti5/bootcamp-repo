import { Box, Stack, styled } from '@mui/material'
import PlusIcon from '../../../../public/assets/Icons/plus.svg'
import MostRelevant from '../../../../public/assets/Icons/relevant.svg'
import ToggleIcons from '../../../../public/assets/Icons/toggleIcons.svg'
import theme from '../../../theme'
import {
  ADD_FILES,
  FILES,
  FILE_TYPE,
  FILE_TYPE_OPTIONS,
  PUBLISH_LABEL,
  PUBLISH_OPTIONS,
} from '../../../utils/constant'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import DateSelector from '../../molecules/DatePicker'
import DropDown from '../../molecules/Dropdown'
import useFilterHook from './hook'

export interface FilterValues {
  startDate: string
  endDate: string
  fileType: string
  publishedBy: string
}

interface FilterRowProps {
  onAddFileClick: () => void
  onFilterChange: (filterValues: FilterValues) => void
}

const containerStyle = {
  padding: '28px 25px',
  backgroundColor: theme.palette.structuralColor.white,
}

const ContainerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const AddButtonStyle = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.white,
  padding: '6px 8px',
  width: '108px',
  height: '36px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
})
const FilterRow = (props: FilterRowProps) => {
  const {
    selectedPublishValue,
    handlePublishValueChange,
    selectedFileValue,
    handleFileValueChange,
    error,
    handleStartDateChange,
    handleEndDateChange,
  } = useFilterHook(props)

  return (
    <Stack sx={containerStyle} spacing={'40px'} direction={'column'}>
      <ContainerBox>
        <Typography text={FILES} variant="h2"></Typography>
        <AddButtonStyle
          onClick={() => props.onAddFileClick()}
          startIcon={
            <Icon
              src={PlusIcon}
              alt={'Add Icon'}
              style={{ paddingTop: '9px' }}
            ></Icon>
          }
        >
          {ADD_FILES}
        </AddButtonStyle>
      </ContainerBox>
      <ContainerBox>
        <Stack>
          <Stack direction={'row'} spacing={'12px'}>
            <DropDown
              label={FILE_TYPE}
              value={selectedFileValue}
              menuItems={FILE_TYPE_OPTIONS}
              onChange={handleFileValueChange}
            ></DropDown>
            <Box>
              <DateSelector
                onChange={handleStartDateChange}
                text={'Start Date'}
              />
            </Box>
            <Box>
              <DateSelector onChange={handleEndDateChange} text={'End Date'} />
            </Box>
            <DropDown
              label={PUBLISH_LABEL}
              value={selectedPublishValue}
              menuItems={PUBLISH_OPTIONS}
              onChange={handlePublishValueChange}
            ></DropDown>
          </Stack>
          {error && (
            <Typography text={error} variant="caption1" color={'red'} />
          )}
        </Stack>
        <Stack direction={'row'} spacing={'12px'}>
          <Icon src={MostRelevant} alt={'Most Relevant'}></Icon>
          <Icon src={ToggleIcons} alt={'Toggle Icons'}></Icon>
        </Stack>
      </ContainerBox>
    </Stack>
  )
}

export default FilterRow
