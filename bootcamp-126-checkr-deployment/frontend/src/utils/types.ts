export interface FilterField {
  name: string
  values: FilterFieldStatus[]
}

export interface FilterFieldStatus {
  value: string
  active: boolean
}

export interface EmailDataType {
  id: number
  label: string
  content: string
}

export interface EmailPasswordError {
  email: boolean
  password: boolean
}

export interface CheckboxType {
  id: string
  label: string
}

export interface AxiosErrorType {
  message: string
  response?: string
}

export interface CandidateInfoRowType {
  id: number
  name: string
  adjudication: string
  status: string
  location: string
  date: Date
}

export interface NavBarItemsType {
  id: number
  title: string
  src: string
  path?: string
  siblingPath?: string
}

export interface SearchTypes {
  id: number
  search: string
  status: 'CLEAR' | 'CONSIDER'
  date: string
}
export interface CourtSearchesResponse {
  id: number
  candidateId: number
  searchTypes: SearchTypes[]
}

export interface CandidateDetailsResponse {
  id: number
  name: string
  email: string
  dob: string
  age: string
  phone: string
  zipcode: string
  socialSecurity: string
  driverLicense: string
  createdAt: string
}

export interface CandidateReportResponse {
  id: number
  candidateId: number
  status: 'consider' | 'clear'
  adjudication: string
  packages: string
  createdAt: string
  completedDate: string
  turnAroundTime: string
}

export enum Adjudication {
  adverseAction = 'ADVERSE_ACTION',
  engaged = 'ENGAGE',
}

export enum CandidateStatus {
  clear = 'CLEAR',
  consider = 'CONSIDER',
}

export interface PatchAdverseActionRequest {
  adjudication: Adjudication
  status: CandidateStatus
}
export interface CandidateInformationType {
  id: number
  candidateId: number
  name: string
  adjudication: string
  status: string
  location: string
  date: string
}
export interface AdverseInfoRowType {
  id: number
  name: string
  status: string
  preNoticeDate: Date
  postNoticeDate: Date
}

export type DashboardContextType = {
  dashboardRefresh: boolean
  setDashboardRefresh: (value: boolean) => void
}

export interface PostAdverseActionRequest {
  status: 'SCHEDULED'
  preNoticeDate: string
  postNoticeDate: string
}

export type BearerTokenContextType = {
  bearerToken: string
  setBearerToken: (value: string) => void
}
