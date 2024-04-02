import { jwtDecode } from 'jwt-decode'
import ProfilePic1 from '../../public/assets/Icons/Profile.svg'
import ProfilePic2 from '../../public/assets/Icons/avatar1.svg'
import ProfilePic3 from '../../public/assets/Icons/avatar2.svg'
import ProfilePic4 from '../../public/assets/Icons/avatar3.svg'
import pitchImg2 from '../../public/assets/images/companyProfile.svg'
import pitchImg3 from '../../public/assets/images/companyTransformation.svg'
import pitchImg4 from '../../public/assets/images/digitalTransformation.svg'
import pitchImg1 from '../../public/assets/images/pitch.svg'

const companyImages = [pitchImg1, pitchImg2, pitchImg3, pitchImg4]

export const getRandomPdfSrc = () => {
  const randomIndex = Math.floor(Math.random() * companyImages.length)
  return companyImages[randomIndex]
}

const avatarImages = [ProfilePic1, ProfilePic2, ProfilePic3, ProfilePic4]

export const getRandomAvatarSrc = () => {
  const randomIndex = Math.floor(Math.random() * avatarImages.length)
  return avatarImages[randomIndex]
}

export function formatDate(dateString: string) {
  const originalDate = new Date(dateString)
  const newDate = new Date(originalDate.getTime() + (5 * 60 + 30) * 60 * 1000)
  const day = newDate.getDate()
  const month = newDate.toLocaleDateString('en-IN', { month: 'short' })
  const time = newDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  const formattedDate = `${day} ${month} ${time}`

  return formattedDate
}

export const jwtDecoder = (token: string) => {
  const decodedToken: any = jwtDecode(token)
  return {
    email: decodedToken.sub,
    name: decodedToken.name,
    loggedInUserId: decodedToken.userId,
  }
}

export const base64toBlob = (data: string) => {
  // Cut the prefix `data:application/pdf;base64` from the raw base 64
  const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length)

  const bytes = atob(base64WithoutPrefix)
  let length = bytes.length
  const out = new Uint8Array(length)

  while (length--) {
    out[length] = bytes.charCodeAt(length)
  }

  return new Blob([out], { type: 'application/pdf' })
}
