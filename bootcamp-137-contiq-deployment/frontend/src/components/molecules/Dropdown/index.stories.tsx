import React, { useState } from 'react'
import { type Meta, StoryObj } from '@storybook/react'
import Dropdown, { IDropDownProps } from './index'

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

export const FileDropdown: Story = (args: IDropDownProps) => {
  const [selectedValue, setSelectedValue] = useState(args.value || 'File type')

  const handleChange = (value: string) => {
    setSelectedValue(value)
    console.log(`Selected File Type: ${value}`)
  }

  return <Dropdown {...args} value={selectedValue} onChange={handleChange} />
}
FileDropdown.args = {
  label: 'File type',
  menuItems: [
    { value: 'pdf', label: 'PDF' },
    { value: 'PPT', label: 'PPT' },
    { value: 'Image', label: 'Image' },
  ],
}

export const PublishedByDropdown: Story = (args: IDropDownProps) => {
  const [selectedValue, setSelectedValue] = useState(
    args.value || 'Published By'
  )

  const handleChange = (value: string) => {
    setSelectedValue(value)
    console.log(`Selected Published By: ${value}`)
  }

  return <Dropdown {...args} value={selectedValue} onChange={handleChange} />
}

PublishedByDropdown.args = {
  label: 'Published By',
  menuItems: [
    { value: 'Published by me', label: 'Published by me' },
    { value: 'Published by sale team', label: 'Published by sale team' },
    { value: 'Published by others', label: 'Published by others' },
  ],
}

export default meta
