import { type Meta, type StoryObj } from '@storybook/react'
import pitchImg from '../../../../public/assets/images/pitch.svg'
import PresentationCard from './index'

const meta: Meta<typeof PresentationCard> = {
  title: 'Molecules/PresentationCard',
  component: PresentationCard,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof PresentationCard>

export const FilePresentationCard: Story = {
  args: {
    src: pitchImg,
    label: 'Company agreement.ppt',
  },
}

export default meta
