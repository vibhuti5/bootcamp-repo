import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TypographyComponent, { CustomTypographyProps } from '.'
import Theme from '../../../theme'

export default {
  title: 'Atoms/Typography',
  component: TypographyComponent,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'subtitle1',
        'body1',
        'body2',
        'caption1',
        'caption2',
      ],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as Meta

const Template: StoryFn<CustomTypographyProps> = (args) => (
  <TypographyComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'caption1',
  children: 'Cheker',
  color: Theme.palette.text.mediumEmphasis,
}
