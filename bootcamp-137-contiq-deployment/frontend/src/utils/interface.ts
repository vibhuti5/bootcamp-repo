export interface INavBarElement {
  id: number
  src: string
  label: string
}
export interface INotification {
  id?: number
  message: string
  type?: string
  updatedAt: string | Date
  createdAt?: string | Date
  userId?: string | number
  filesId?: string | number
  organizationId?: number
}
export interface IPassword {
  password: string
  confirmPassword: string
}
export interface IFolder {
  id: string
  name: string
}

export interface ISignIn {
  email: string
  password: string
}

export interface ISignUp {
  name: string
  email: string
  password?: string
  notification_count?: number
}

export interface IFile {
  id: string
  name: string
  fileType?: string
  createdAt: string
  userId?: string
  file?: File
}

export interface FilesDataType {
  id: number | string
  fileName: string
  fileId: string
  content: string
  path: string
  createdAt: string
  userId: number | string
}

export interface NotificationType {
  id: number | string
  type: string
  message: string
  createdAt: string
  updatedAt: string
  userId: number | string
  filesId: number | string
  organizationId?: number
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  notification_count: number
}

export interface IFilesDataType {
  id: number | string
  name: string
  fileId: string
  content: string
  path: string
  createdAt: string
  userId: number | string
}
