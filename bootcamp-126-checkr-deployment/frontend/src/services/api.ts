import axios from 'axios'
import { BackendUrl } from '../utils/constants'
import {
  PatchAdverseActionRequest,
  PostAdverseActionRequest,
} from '../utils/types'

export const API = axios.create({
  baseURL: BackendUrl,
})

API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (shouldIncludeToken(config.url)) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

function shouldIncludeToken(url: any) {
  const protectedEndpoints = [
    'candidates',
    'candidates/reports',
    'candidatedetails',
    'candidates/adverse-actions',
    'candidates/candidate-court-searches',
    'candidates/info',
  ]
  return protectedEndpoints.some((endpoint) => url.includes(endpoint))
}

export const getCandidateDetails = async (id: string | null) => {
  try {
    const response = await API.get(`candidates?id=${parseInt(String(id))}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getCandidateReport = async (id: string | null) => {
  try {
    const response = await API.get(
      `candidates/reports?id=${parseInt(String(id))}`
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getCandidateCourtSearches = async (id: string | null) => {
  try {
    const response = await API.get(
      `candidates/candidate-court-searches/${parseInt(String(id))}`
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getCandidateInfo = async (id: string) => {
  try {
    const response = await API.get(
      `candidates/reports?id=${parseInt(String(id))}`
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getCandidatesInformation = async () => {
  try {
    const response = await API.get(`candidates/info`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const patchAdverseaction = async (
  id: string,
  requestBody: PatchAdverseActionRequest
) => {
  try {
    const response = await API.patch(
      `candidates/info/${parseInt(id)}`,
      requestBody
    )
    return response.status
  } catch (err) {
    console.error(err)
  }
}
export const getAdverseInfo = async () => {
  try {
    const response = await API.get(`candidates/adverse-actions`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const postAdverseAction = async (
  id: string,
  requestBody: PostAdverseActionRequest
) => {
  try {
    await API.put(`candidates/adverse-actions/${parseInt(id)}`, requestBody)
  } catch (err) {
    console.error(err)
  }
}
