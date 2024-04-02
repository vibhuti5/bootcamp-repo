import { SetStateAction } from 'react'
import { FilterField } from '../../../utils/types'

export const HandleCheckboxChange = (
  fieldName: string,
  value: string,
  filterFields: FilterField[],
  setFilterFields: {
    (value: SetStateAction<FilterField[]>): void
    (arg0: FilterField[]): void
  }
) => {
  const updatedFilterFields = filterFields.map((field) => {
    if (field.name === fieldName) {
      return {
        ...field,
        values: field.values.map((item) => {
          if (item.value === value)
            return {
              ...item,
              active: !item.active,
            }
          return item
        }),
      }
    }
    return field
  })
  setFilterFields(updatedFilterFields)
}
