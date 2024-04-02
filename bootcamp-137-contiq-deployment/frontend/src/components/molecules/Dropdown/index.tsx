import React, { useState } from 'react'
import chevronDown from '../../../../public/assets/Icons/chevronDown.svg'
import chevronUp from '../../../../public/assets/Icons/chevronUp.svg'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Icon from '../../atoms/Icon'
import close from '../../../../public/assets/Icons/cross.svg'
import theme from '../../../theme'
import Typography from '../../atoms/Typography'
import Divider from '../../atoms/Divider'

export interface IMenuItem {
  value: string
  label: string
}

export interface IDropDownProps {
  label: string
  value: string
  menuItems: IMenuItem[]
  startIcon?: React.ReactNode
  onChange?: (event: string) => void
  style?: object
}
const DropDown: React.FC<IDropDownProps> = ({
  label,
  value,
  menuItems,
  startIcon,
  onChange,
  style,
}: IDropDownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleClear = () => {
    if (onChange) {
      onChange(label)
    }
  }

  return (
    <FormControl
      data-testid="select"
      sx={{
        borderRadius: theme.spacing(1),
        backgroundColor:
          value !== label
            ? theme.palette.primary.light
            : theme.palette.text.white,
      }}
    >
      <Select
        data-testid="dropdown"
        placeholder="Dropdown"
        value={value}
        onChange={(event: SelectChangeEvent) => {
          if (onChange) {
            onChange(event.target.value)
          }
        }}
        onClose={toggleDropdown}
        onOpen={toggleDropdown}
        open={dropdownOpen}
        IconComponent={() => null}
        displayEmpty
        inputProps={{
          MenuProps: {
            sx: {
              width: theme.spacing(100),
              marginTop: theme.spacing(1),
              ...style,
            },
            MenuListProps: {
              sx: {
                backgroundColor: theme.palette.grays.gray400,
                width: '100%',
              },
            },
          },
        }}
        sx={{
          color: theme.palette.grays.gray400,
          height: theme.spacing(9),
          '.MuiMenuList-root': {
            marginTop: `${theme.spacing(2.5)}`,
            padding: theme.spacing(2),
          },
        }}
        startAdornment={startIcon}
        endAdornment={
          dropdownOpen ? (
            <Icon
              src={chevronUp}
              alt={'up'}
              style={{
                width: theme.spacing(6),
                height: theme.spacing(6),
                marginTop: theme.spacing(1),
              }}
            />
          ) : (
            <Icon
              onClick={() =>
                value !== label ? handleClear() : toggleDropdown()
              }
              src={value !== label ? close : chevronDown}
              alt={value !== label ? `${'CLOSE'}` : `${'DOWN'}`}
              style={{
                width: theme.spacing(6),
                height: theme.spacing(6),
                marginTop: theme.spacing(2),
                cursor: 'pointer',
              }}
            />
          )
        }
      >
        <MenuItem
          value={label}
          sx={{
            color: theme.palette.text.white,
            pointerEvents: 'none',
          }}
        >
          <Typography variant="body1" text={label} />
        </MenuItem>
        <Divider variant="middle" color={theme.palette.text.lowEmphasis} />
        {menuItems.map((item, index) => (
          <MenuItem
            data-testid={`item-${index}`}
            key={item.value}
            value={item.value}
            sx={{
              color: theme.palette.text.highEmphasis,
            }}
          >
            <Typography text={item.label} variant="caption1" />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default DropDown
