import axios from 'axios'
import { INotification, ISignIn, ISignUp } from '../utils/interface'

export const apiClient = axios.create({
  baseURL: 'https://bc137-be.dev-apps.io',
})

apiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('userToken')
    if (shouldIncludeToken(config.url)) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const shouldIncludeToken = (url: any) => {
  const protectedEndpoints = ['/files', '/notifications', '/files/search']
  return protectedEndpoints.some((endpoint) => url.includes(endpoint))
}

export const getAllFiles = async () => {
  try {
    const response = await apiClient.get(`/files`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}
export const getUserByEmail = async (email: any) => {
  try {
    const response = await apiClient.get(`/users/email/${email}`)
    return response.data
  } catch (err) {
    return false
  }
}
export const updatePassword = async (email: string, password: string) => {
  try {
    const response = await apiClient.post(`/users/reset-password`, {
      email,
      newPassword: password,
    })
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getAllNotifications = async () => {
  try {
    const response = await apiClient.get(`/notifications`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getUserById = async (id: string) => {
  try {
    const response = await apiClient.get(`/users/${id}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const updateUserById = async (
  id: string,
  requestBody: { unreadNotificationCount: number }
) => {
  try {
    const response = await apiClient.patch(
      `/users/${id}/notification`,
      requestBody
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const uploadFile = async (
  file: File,
  userId: string,
  onUploadProgress?: (progress: number) => void
) => {
  const formData = new FormData()
  formData.append('files', file)
  formData.append('path', '../../file-path')
  formData.append('userId', userId)
  try {
    const response = await apiClient.post('/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onUploadProgress && progressEvent.total !== undefined) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100
          onUploadProgress(progress)
        }
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const isFileAlreadyExists = async (fileName: string) => {
  try {
    const response = await apiClient.get(`/files?name=${fileName}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const uploadAlreadyExistedFile = async (
  fileId: string,
  userId: string,
  file: File,
  onUploadProgress: (progress: number) => void
) => {
  const formData = new FormData()
  formData.append('files', file)
  formData.append('userId', userId)
  try {
    const response = await apiClient.patch(`/files/${fileId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total !== undefined) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100
          onUploadProgress(progress)
        }
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createUser = async (requestBody: ISignUp) => {
  try {
    const response = await apiClient.post(`/users/signup`, requestBody)
    return response.data
  } catch (err) {
    console.error(err)
    return false
  }
}

export const createNotification = async (requestBody: INotification) => {
  try {
    const response = await apiClient.post(`/notifications`, requestBody)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const userLogin = async (loginData: ISignIn) => {
  try {
    const response = await apiClient.post(`/users/login`, loginData)
    return response.data
  } catch (error) {
    return false
  }
}

export const elasticSearch = async (searchTerm: string) => {
  try {
    const response = await apiClient.get(
      `/files/search?searchTerm=${searchTerm}`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createAuthUser = async (requestBody: any) => {
  try {
    const response = await apiClient.post(`/users/google-login`, requestBody)
    return response.data
  } catch (err) {
    console.error(err)
    return false
  }
}
