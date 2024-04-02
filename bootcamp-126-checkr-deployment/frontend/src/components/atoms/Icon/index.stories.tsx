import { Meta, StoryFn } from '@storybook/react'
import Icon from '.'

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta<typeof Icon>

const template: StoryFn<typeof Icon> = (args) => <Icon {...args} />

export const Logout = template.bind({})
Logout.args = {
  src: '../assets/images/logout.svg',
  alt: 'Logout',
}
