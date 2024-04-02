import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import SearchPopup from '.'
import { SEARCH_DOCUMENTS } from '../../../utils/constant'

export default {
  title: 'Organisms/SearchPopup',
  component: SearchPopup,
  argTypes: {},
} as Meta<typeof SearchPopup>

const Template: StoryFn<typeof SearchPopup> = (args) => (
  <SearchPopup {...args} />
)

export const FilesFound = Template.bind({})
FilesFound.args = {
  isOpen: true,
  files: SEARCH_DOCUMENTS,
}

export const NoFileFound = Template.bind({})
NoFileFound.args = {
  isOpen: true,
  files: [],
}
