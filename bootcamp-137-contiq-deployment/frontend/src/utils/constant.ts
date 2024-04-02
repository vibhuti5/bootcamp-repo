import AddUser from '../../public/assets/Icons/addUser.svg'
import Calendar from '../../public/assets/Icons/calendar.svg'
import Files from '../../public/assets/Icons/files.svg'
import Home from '../../public/assets/Icons/home.svg'
import LogoutLogo from '../../public/assets/Icons/logout.svg'
import Metrices from '../../public/assets/Icons/metrices.svg'
import NotificationIcon from '../../public/assets/Icons/notification.svg'
import Office from '../../public/assets/Icons/office.svg'
import People from '../../public/assets/Icons/people.svg'
import SettingLogo from '../../public/assets/Icons/setting.svg'
import UserLogo from '../../public/assets/Icons/user.svg'
import DropBoxLogo from '../../public/assets/images/DropBox.svg'
import GdriveLogo from '../../public/assets/images/GoogleDrive.svg'
import HelpIcon from '../../public/assets/images/help.svg'
import OneDriveLogo from '../../public/assets/images/onedrive.svg'
import pitchImg from '../../public/assets/images/pitch.svg'
import TeraBoxLogo from '../../public/assets/images/terabox.svg'
import { IFile, IFolder } from './interface'

export const NOTIFICATION_ROW = {
  NO_IMAGE: 'no-image',
  UPLODAED: 'uploaded',
  YOU: 'You',
  HAS: 'has',
  HAVE: 'have',
}

export const LOGOUT_POPUP_ITEMS = [
  {
    id: 1,
    imageSrc: UserLogo,
    label: 'Profile',
  },
  {
    id: 2,
    imageSrc: SettingLogo,
    label: 'Settings',
  },
  {
    id: 1,
    imageSrc: LogoutLogo,
    label: 'Logout',
  },
]

export const LOGOUT_POPUP = {
  USERNAME: 'John Ross',
  ID: 'IDJR00292',
}

export const SIDE_BAR_ELEMENTS = [
  {
    id: 1,
    src: Home,
    label: 'Home',
    path: '/home',
  },
  {
    id: 2,
    src: Office,
    label: 'office',
  },
  {
    id: 3,
    src: People,
    label: 'People',
  },
  {
    id: 4,
    src: Calendar,
    label: 'Calendar',
  },
  {
    id: 5,
    src: Files,
    label: 'Files',
    path: '/files',
    siblingPath: `/file-viewer/1`,
  },
  {
    id: 6,
    src: Metrices,
    label: 'Metrices',
  },
]
export const NOTIFICATIONS_MOCK = [
  {
    id: 1,
    message: 'John has uploaded Company Profile.pdf',
    type: 'UPDATED',
    created_at: '2023-11-10T19:45:04.174Z',
    updated_at: '2023-11-10T19:45:04.174Z',
    userId: 1,
    fileId: 1,
  },
  {
    id: 2,
    message: 'Sarah has uploaded Company agreement.pdf',
    type: 'CREATED',
    created_at: '2023-11-10T19:45:04.174Z',
    updated_at: '2023-11-10T19:45:04.174Z',
    userId: 2,
    fileId: 2,
  },
]

//Start Create New Password Constants
export const CREATE_PASSWORD_TEXT = 'Create new password'
export const CREATE_PASSWORD_SUB_TEXT =
  'Enter new password below to change your password'
export const PASSWORD_ERROR =
  'Password should be atleast 8 characters long with 1 uppercase, 1 lowercase and 1 special character'
export const CONFIRM_PASSWORD_ERROR = 'Enter the same password as above'
export const RESET_PASSWORD_TEXT = 'Reset password'
export const RESET_PASSWORD_SUCCESS_TEXT = 'Password reset'
export const RESET_PASSWORD_SUCCESS_SUB_TEXT =
  'Your password has been successfully reset.Click below to login magically.'
export const CONTINUE_TEXT = 'Continue'
//End  Create New Password Constants
export const COPIED = 'Text copied'
export const EMAIL_ID_DOES_NOT_EXISTS = 'Email ID does not exists'

export const DAYS_OF_WEEK = new Map([
  ['Su', 'SUN'],
  ['Mo', 'MON'],
  ['Tu', 'TUE'],
  ['We', 'WED'],
  ['Th', 'THU'],
  ['Fr', 'FRI'],
  ['Sa', 'SAT'],
])

/*

Start Reset Password
*/
export const RESET_PASSWORD_TITLE_TEXT = 'Reset your password'
export const RESET_PASSWORD_SUB_TEXT =
  'The verification mail will be sent to the mailbox please check it.'
export const EMAIL_NOT_VALID_ERROR = 'Please enter a valid email address'
export const SEND_PASSWORD_TEXT = 'Send'
/*

End Reset Password
*/

export const HEADER_ICONS = [
  {
    id: 1,
    icon: HelpIcon,
    alt: 'Help',
  },
  {
    id: 2,
    icon: AddUser,
    alt: 'Add User',
  },
  {
    id: 3,
    icon: NotificationIcon,
    alt: 'Notification',
  },
]
export const SIGNIN_PASSWORD_ERROR = 'Please enter password'

export const NAME_ERROR = 'Please enter name only with characters and spaces'
export const SEARCH_DOCUMENTS = [
  {
    id: 1,
    name: 'Company Profile.pdf',
    type: 'PDF',
    content: 'File data here',
    path: '../../public/assets/files/Company Profile.pdf',
    created_at: '2023-11-10T19:45:04.174Z',
    updated_at: '2023-11-10T19:45:04.174Z',
    userId: 1,
  },
  {
    id: 2,
    name: 'Company agreement.pdf',
    type: 'PDF',
    content: 'File data here',
    path: '../../public/assets/files/Company agreement.pdf',
    created_at: '2023-11-10T19:45:04.174Z',
    updated_at: '2023-11-10T19:45:04.174Z',
    userId: 2,
  },
  {
    id: 3,
    name: 'Company transformation.pdf',
    type: 'PDF',
    content: 'File data here',
    path: '../../public/assets/files/Company transformation.pdf',
    created_at: '2023-11-10T19:45:04.174Z',
    updated_at: '2023-11-10T19:45:04.174Z',
    userId: 1,
  },
  {
    id: 4,
    name: 'Company Performance.pdf',
    type: 'PDF',
    content: 'File data here',
    path: '../../public/assets/files/Company Performance.pdf',
    created_at: '2023-11-15T19:45:04.174Z',
    updated_at: '2023-11-15T19:45:04.174Z',
    userId: 2,
  },
  {
    id: 5,
    name: 'Company Report.pdf',
    type: 'PDF',
    content: 'File data here',
    path: '../../public/assets/files/Company Report.pdf',
    created_at: '2023-11-10T19:45:04.174Z',
    updated_at: '2023-11-10T19:45:04.174Z',
    userId: 1,
  },
]
export const RESULTS = 'Search results'
export const OTHER = 'Other documents'
export const NOT_FOUND = 'No File Found...'
export const FILE_UPLOAD_MODAL_CONST = {
  titleLabel: 'Upload files',
  localLabel: 'Uploads',
  cloudLabel: 'Cloud Storage',
}

export const LOCAL_UPLOAD_MODAL = {
  dropText: 'Drop your files here',
  chooseFiles: 'Choose files',
  uploadFile: 'Upload file',
}

export const ALREADY_EXIST_MODAL = {
  title: 'Upload options',
  body: 'already exists in this location. Do you want to replace the existing file with a new version or keep both files?',
}

export const FILES = 'Files'
export const ADD_FILES = 'Add Files'
export const PUBLISH = 'Publish setting'
export const PUBLISH_OPTIONS = [
  { value: 'Published by me', label: 'Published by me' },
  { value: 'Published by sale team', label: 'Published by sale team' },
  { value: 'Published by others', label: 'Published by others' },
]
export const PUBLISH_LABEL = 'Published By'
export const FILE_TYPE = 'File type'
export const FILE_TYPE_OPTIONS = [
  { value: 'PDF', label: 'PDF' },
  { value: 'PPT', label: 'PPT' },
  { value: 'Image', label: 'Image' },
]
export const auth0Config = {
  authorizationParams: {
    connection: 'google-oauth2',
    screen_hint: 'login',
  },
}
export const CLOUD_UPLOAD_MODAL = {
  dragText: 'Drag media here to upload of connect an account',
  icons: [
    {
      id: 1,
      src: GdriveLogo,
      alt: 'g-drive logo',
    },
    {
      id: 2,
      src: DropBoxLogo,
      alt: 'drop-box logo',
    },
    {
      id: 3,
      src: OneDriveLogo,
      alt: 'one-drive logo',
    },
    {
      id: 4,
      src: TeraBoxLogo,
      alt: 'terabox logo',
    },
  ],
}

export const SYNC_MODAL = {
  tilteText: 'Sync in progress',
  bodyText: 'Closing this window will not interrupt your sync',
}

export const FolderMock: IFolder[] = [
  {
    id: '1',
    name: 'Zemoso decks',
  },
  {
    id: '2',
    name: 'Sample data',
  },
  {
    id: '3',
    name: 'Sample data',
  },
]

export const FileMock: IFile[] = [
  {
    id: '1',
    name: 'Company overview',
    createdAt: '11-11-2023',
  },
  {
    id: '2',
    name: 'Software agreement',
    createdAt: '11-07-2023',
  },
  {
    id: '3',
    name: 'Sample data',
    createdAt: '11-09-2023',
  },
  {
    id: '4',
    name: 'Sample data',
    createdAt: '11-15-2023',
  },
]
// export const API_KEY = process.env.GOOGLE_DRIVE_API_KEY
// export const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID

export const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
]

export const SCOPES =
  'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly'
export const HOMEPAGE_FILES = [
  {
    id: 1,
    icon: pitchImg,
    alt: 'Help',
  },
  {
    id: 2,
    icon: pitchImg,
    alt: 'Add User',
  },
  {
    id: 3,
    icon: pitchImg,
    alt: 'Notification',
  },
  {
    id: 4,
    icon: pitchImg,
    alt: 'Help',
  },
  {
    id: 5,
    icon: pitchImg,
    alt: 'Add User',
  },
  {
    id: 6,
    icon: pitchImg,
    alt: 'Notification',
  },
  {
    id: 7,
    icon: pitchImg,
    alt: 'Help',
  },
  {
    id: 8,
    icon: pitchImg,
    alt: 'Add User',
  },
  {
    id: 9,
    icon: pitchImg,
    alt: 'Notification',
  },
]

export const NO_FILE_INFO_TITLE = 'No files available'
export const NO_FILE_INFO_SUBTITLE =
  'Start by syncing your cloud storage to contiq'

export const IMG_TITLE = 'No files availabe'
export const IMG_SUBTITLE = 'Start by syncing your cloud storage to contiq'
export const HOMEPAGE_TITLE = 'Home'
export const HOMEPAGE_SUBTITLE = 'Recent'
export const NO_NOTIFICATION = 'No Notifications'

export const API_KEY = 'API KEY'
export const CLIENT_ID =
  '924242553453-4afc3gninbcnuot6ce8g6nld31463i1m.apps.googleusercontent.com'
