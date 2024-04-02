import { type Meta, type StoryObj } from '@storybook/react'
import TabsComponent from '.'

export default {
  title: 'Molecules/TabsComponent',
  component: TabsComponent,
  tags: ['autodocs'],
  argTypes: {
    handleChange: { action: 'Tab changed' },
  },
} as Meta<typeof TabsComponent>

type Tabs = StoryObj<typeof TabsComponent>

export const Tabs: Tabs = {
  args: {
    tabs: [
      { label: 'All Files', content: '' },
      { label: 'Slides', content: '' },
    ],
    value: 0,
  },
}
