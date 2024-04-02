import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import CustomAvatar from '.'
import { ImageUrl } from '../../../utils/constants'
const image = ImageUrl + 'user.svg'
export default {
  title: 'Atoms/Avatar',
  component: CustomAvatar,
} as Meta<typeof CustomAvatar>

const Template: StoryFn<typeof CustomAvatar> = (args) => (
  <CustomAvatar {...args} />
)

export const PrimaryAvatar = Template.bind({})

PrimaryAvatar.args = {
  src: image,
  alt: 'ChekerAvatar',
  width: 56,
  height: 56,
}
