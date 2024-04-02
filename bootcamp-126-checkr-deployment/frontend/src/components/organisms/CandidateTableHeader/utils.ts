import { ChangeEvent, SetStateAction } from 'react'

export const SearchCandidate = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  searchValue: string,
  setSearchValue: { (value: SetStateAction<string>): void; (arg0: any): void },
  setSearchQuery: (query: string) => void
) => {
  setSearchValue(e.target.value)
  setSearchQuery(e.target.value)
}
