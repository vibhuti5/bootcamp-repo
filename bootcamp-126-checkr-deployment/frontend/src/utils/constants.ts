import NAME from '../../public/assets/images/profile.svg'
import EMAIL from '../../public/assets/images/email.svg'
import IDCARD from '../../public/assets/images/dob.svg'
import PHONE from '../../public/assets/images/phone.svg'
import LOCATION from '../../public/assets/images/location.svg'
import CALENDAR_ONE from '../../public/assets/images/calendar1.svg'
import SECURITY from '../../public/assets/images/security.svg'
import CLOCK from '../../public/assets/images/clock.svg'
import HAMMER from '../../public/assets/images/hammer.svg'
import PACKAGE from '../../public/assets/images/package.svg'
import CLEAR from '../../public/assets/images/clear.svg'
import CALENDAR_TWO from '../../public/assets/images/calendar2.svg'
import HOME from '../../public/assets/images/Dashboard.svg'
import CANDIDATES from '../../public/assets/images/Contacts.svg'
import ADVERSEACTIONS from '../../public/assets/images/hammenavr.svg'
import LOGS from '../../public/assets/images/logs.svg'
import ANALYTICS from '../../public/assets/images/Analytics.svg'
import ACCOUNT from '../../public/assets/images/Account.svg'
import SCREENING from '../../public/assets/images/Screening.svg'
import {
  NavBarItemsType,
  CheckboxType,
  EmailDataType,
  FilterField,
} from './types'

export const ImageUrl = '../assets/images/'
export const ConfirmLogout = 'Confirm Logout'
export const LogoutText = 'Are you sure you want to logout?'
export const CancelButton = 'Cancel'
export const LogoutButton = 'Logout'
export const GifText = 'OTP has been sent to your email!'
export const SearchCandidatePlaceholder = 'Search any candidate'
export const FilterName = 'Filter'
export const CandidatePageTableHeaderTitle = 'Candidate'

export interface InfoTabProps {
  id: number
  title: string
  label: string
  icon: string
}
export const CandidateInfoValues: InfoTabProps[] = [
  {
    id: 1,
    title: 'Name',
    label: 'John Smith',
    icon: NAME,
  },
  {
    id: 2,
    title: 'Email',
    label: 'John.smith@checkr.com',
    icon: EMAIL,
  },
  {
    id: 3,
    title: 'DOB',
    label: '1990-09-10 (26)',
    icon: IDCARD,
  },
  {
    id: 4,
    title: 'Phone',
    label: '(555) 555-5555',
    icon: PHONE,
  },
  {
    id: 5,
    title: 'Zipcode',
    label: '94158',
    icon: LOCATION,
  },
  {
    id: 6,
    title: 'Social Security ',
    label: 'XXX-XX-6789',
    icon: SECURITY,
  },
  {
    id: 7,
    title: 'Drivers License',
    label: 'FTEST1111 (CA)',
    icon: IDCARD,
  },
  {
    id: 8,
    title: 'Created At ',
    label: 'Nov 29,2016 11:05:57 AM',
    icon: CALENDAR_ONE,
  },
]
export const ReportInfoValues: InfoTabProps[] = [
  {
    id: 1,
    title: 'Status',
    label: 'Clear',
    icon: CLEAR,
  },
  {
    id: 2,
    title: 'Adjudication ',
    label: '-',
    icon: HAMMER,
  },
  {
    id: 3,
    title: 'Package',
    label: 'Employee pro',
    icon: PACKAGE,
  },
  {
    id: 4,
    title: 'Created At ',
    label: 'Dec 1, 2016 12:00:00 PM',
    icon: CALENDAR_ONE,
  },
  {
    id: 5,
    title: 'Completed Date',
    label: 'Dec 4, 2016 12:00:00 PM',
    icon: CALENDAR_TWO,
  },
  {
    id: 6,
    title: 'Turn Around Time',
    label: '1 Day , 14 hours',
    icon: CLOCK,
  },
]

export const OtpFormTitle = 'Please enter OTP'
export const OtpFormCaption = 'OTP has been sent to your email'
export const GoBackButton = 'Go Back'
export const ContinueButton = 'Continue'
export const OtpFialedText = "Didn't receive the OTP?"
export const ResendOtpText = 'Resend OTP'
export const SignIn = 'Sign in'
export const SigninSubtext = 'Please enter your login credentials'
export const Signup = 'Sign up'
export const NoAccount = "Don't have an account?"
export const Email = 'Email'
export const Password = 'Password'
export const ForgotPasswordLink = 'Forgot password?'
export const Rememberme = 'Remember me'
export const SigninEmailPlaceholder = 'abc@gmail.com'
export const SigninPasswordPlaceholder = '********'
export const OR = 'or'
export const SigninWithGoogle = 'Sign in with Google'
export const SigninWithGit = 'Sign in with GitHub'
export const ForgotPasswordTitle = 'Forgot Password?'
export const ForgotPasswordSubText =
  "No worries, we'll send you reset instructions"
export const ResetPasswordButton = 'Reset Password'
export const ForgotPasswordEmailConstant = 'Example@gmail.com'
export const OtpSentSuccessfully = 'OTP has been sent to your email!'
export const Candidates = 'Candidates'
export const ExportButton = 'Export'
export const ManualOrderButton = 'Manual Order'
export const filterFields: FilterField[] = [
  {
    name: 'Status',
    values: [
      { value: 'All Status', active: false },
      { value: 'Clear', active: false },
      { value: 'Consider', active: false },
    ],
  },
  {
    name: 'Adjudification',
    values: [
      { value: 'All', active: false },
      { value: 'Engaged', active: false },
      { value: 'Pre adverse action', active: false },
    ],
  },
]

export const AdverseActionFilterPopupMenu: FilterField[] = [
  {
    name: 'Status',
    values: [
      { value: 'All Status', active: false },
      { value: 'Pending', active: false },
      { value: 'Scheduled', active: false },
      { value: 'Consider', active: false },
      { value: 'Dispute', active: false },
      { value: 'Canceled', active: false },
      { value: 'Undeliverable', active: false },
    ],
  },
]
export const ExportReportButton = 'Export Report'
export const ExportModalTitle = 'Export Candidate Reports CSV'
export const DateSelectorTo = 'Reports To'
export const DateSelectorFrom = 'Reports From'
export const NavBarItems: NavBarItemsType[] = [
  { id: 1, title: 'Home', src: HOME },
  {
    id: 2,
    title: 'Candidates',
    src: CANDIDATES,
    path: '/dashboard',
    siblingPath: '/candidatedetails',
  },
  {
    id: 3,
    title: 'Adverse Actions',
    src: ADVERSEACTIONS,
    path: '/adverseactions',
  },
  { id: 4, title: 'Logs', src: LOGS },
  { id: 5, title: 'Analytics', src: ANALYTICS },
  { id: 6, title: 'Account', src: ACCOUNT },
  { id: 7, title: 'Screenings', src: SCREENING },
]
export const AvatarName = 'James Rodriguez'
export const AvatarSubtext = 'James.co'
export interface PreAdverseActionProps {
  id: number
  text: string
}
export const ADVERSEOPTIONS: PreAdverseActionProps[] = [
  {
    id: 1,
    text: 'Driving while license suspended',
  },
  { id: 2, text: 'Assault Domestic Violence' },
  { id: 3, text: 'Unable to verify employment history at Dunder Mifflin' },
]
export const ATTACHMENTS: PreAdverseActionProps[] = [
  { id: 1, text: 'Summary of right under the FCRA' },
  { id: 2, text: 'Copy of background report' },
]
export const WARNINGS: PreAdverseActionProps[] = [
  {
    id: 1,
    text: 'Please carefully review the list of charges (in bold) and your contact information.',
  },
  {
    id: 2,
    text: 'Please note that we will send the corresponding post adverse action email automatically after 7 days.',
  },
]

export const Salutation = 'Dear'
export const Closing = 'Sincerely,'
export const Signature = 'Checkr-bop'
export const Attachments = 'Attachments'
export const SubmitButton = 'Submit Notice'
export const GIFText = 'Pre-Advance Action notice successfully sent'
export const FromAddress = 'Kyle@Checkr.Com'
export const ToAddress = 'John.Smith@Checkr.Com'
export const UserName = 'John Smith'
export const EmailSubject = 'Pre-Adverse Action Notice - Checkr-Bpo'
export const SelectChanges = 'Select The Charges For The Pre Adverse Action'
export const Content =
  'You recently authorized checkr-bpo ("the company") to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.'
export const Conclusion =
  'If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.'
export const Title = 'Pre-Adverse Action Notice'

export const EmailData: EmailDataType[] = [
  {
    id: 1,
    label: 'From: ',
    content: 'kyle@checkr.com',
  },
  {
    id: 2,
    label: 'To: ',
    content: 'john.smith@checkr.com',
  },
  {
    id: 3,
    label: 'Subject: ',
    content: 'Pre-adverse action notice - checkr-bpo',
  },
]
export const CheckboxOption: CheckboxType[] = [
  {
    id: '1',
    label: 'Driving while license suspended',
  },
  {
    id: '2',
    label: 'Assault Domestic Violence',
  },
  {
    id: '3',
    label: 'Unable to verify employment history at Dunder Mifflin',
  },
]
export const EmailBody = {
  greeting: `Dear John Smith,`,
  intro:
    'You recently authorized checkr-bpo ("the company") to obtain consumer reports and/or invistigate consumer \n reports about you from a consumer reporting agency. The Company is considering taking action in whole or in past on \n information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.',
  preAdverseAction: `Select the charges for the pre-adverse action`,
  conclusion:
    'If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., \n the source of the informationcontained in the report), you should contact the agency identifield above directly.',
  ending: 'Sincerely,',
  sign: 'Checkr-bpo',
}
export const EmailAction = 'Auto send post adverse action '
export const EmailDays = ' Days'
export const PreviewButton = 'Preview Notice'
export const CAPITALIZATION_FIELDS = ['name']

export const TABLE_DATA = [
  {
    id: 1,
    name: 'John Smith',
    adjudication: 'ENGAGE',
    status: 'CLEAR',
    location: 'Barrouallie',
    date: '2/22/2022',
  },
  {
    id: 2,
    name: 'Soerene',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Vänersborg',
    date: '3/13/2022',
  },
  {
    id: 3,
    name: 'Woalsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 4,
    name: 'Maurizoia',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Sukamanah',
    date: '2/20/2022',
  },
  {
    id: 5,
    name: 'Koendre',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Beutong Ateuh',
    date: '5/19/2022',
  },
  {
    id: 6,
    name: 'Eroastus',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Höviyn Am',
    date: '12/1/2021',
  },
  {
    id: 7,
    name: 'Jeroeme',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sharïngol',
    date: '7/26/2022',
  },
  {
    id: 8,
    name: 'John Smith',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Lianyun',
    date: '5/28/2022',
  },
  {
    id: 9,
    name: 'Caroi',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Taboão da Serra',
    date: '5/23/2022',
  },
  {
    id: 10,
    name: 'Kimbole',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Veselí nad Moravou',
    date: '8/24/2022',
  },
]
export const PAGINATION = {
  perPageItems: [
    { id: 1, page: '5 per page', value: 5 },
    { id: 2, page: '10 per page', value: 10 },
    { id: 3, page: '20 per page', value: 20 },
    { id: 4, page: '30 per page', value: 30 },
  ],
  pageBreakingLable: '',
  pagesOutOf: 'out of',
  result: 'results',
  iconMsg: 'Close-icon',
  arrowLeftAltText: 'left-arrow',
  arrowRightAltText: 'right-arrow',
  numberOfResults: 'results found',
}
export const SignUp = 'Sign up'
export const SignUpSubtext = 'Please sign up to start exploring the platform'
export const AlreadyMember = 'Already a member?'
export const Policy = 'Privacy Policy'
export const Agree = 'I agree to the '
export const ConfirmPassword = 'Confirm Password'
export const DoNotMatch = 'Passwords do not match'
export const DownloadText = 'Download link was sucessfully sent to your email'
export const CandidateInformationPageRoute = '/candidatedetails'
export const ApiBase = 'https://ms-bc126.bootcamp64.tk/'
export const PreAdverseButton = 'Pre-Adverse Action'
export const EngageButton = 'Engage'
export const LoginFailedAlert = 'Invalid Email or Password'
export const SignupFailedAlert = 'User already exist with this Email'
export const BackendUrl = 'https://be-bc126.bootcamp64.tk/'
