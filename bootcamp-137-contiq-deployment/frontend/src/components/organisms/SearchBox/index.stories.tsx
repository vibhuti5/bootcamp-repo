import { type Meta, type StoryObj } from '@storybook/react'
import SearchBox from '.'

const meta: Meta<typeof SearchBox> = {
  title: 'Organisms/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof SearchBox>

export const SearchBoxElement: Story = {
  args: {
    searchedText:
      'Since being established in 1908 as a sewing machine repair business, the brother group has pursued the diversification and globalization of business in its history of more...',
    fileName: 'Company agreement',
    searchKeyword: 'Repair business',
    searches: ['search1', 'search2', 'search3', 'search4'],
    totalPages: 5,
    searchedTextPage: 1,
  },
}
export default meta
