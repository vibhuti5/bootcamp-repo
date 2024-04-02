import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react'
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_DOCS,
  SCOPES,
} from '../../utils/constant'
import { IFile } from '../../utils/interface'

export const useGoogleService = () => {
  useEffect(() => {
    gapi.load('client:auth2', initClient)
  }, [])
  const [files, setFiles] = useState<IFile[]>()

  const initClient = () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(() => {
        const authInstance = gapi.auth2.getAuthInstance()
        const isUserSignedIn = authInstance.isSignedIn.get()
        if (isUserSignedIn) {
          gapi.client.drive.files
            .list({
              fields: 'files(name, id)',
              q: "mimeType='application/pdf' and trashed=false",
            })
            .then((response: any) => {
              const files = response.result.files
              if (files && files.length > 0) {
                const promises = files.map((file: any) => {
                  return gapi.client.drive.files.get({
                    fileId: file.id,
                    alt: 'media',
                    fields: 'name',
                  })
                })

                Promise.all(promises)
                  .then((fileContents) => {
                    const filesData: IFile[] = fileContents.map(
                      (fileCont, index) => {
                        const fileName = files[index].name
                        const id = files[index].id
                        const binary = fileCont.body
                        const l = binary.length
                        const array = new Uint8Array(l)
                        for (let i = 0; i < binary.length; i++) {
                          array[i] = binary.charCodeAt(i)
                        }

                        const blob = new Blob([array], {
                          type: 'application/octet-stream',
                        })
                        const file = new File([blob], fileName, {
                          type: 'application/pdf',
                        })
                        return {
                          file,
                          id,
                          name: fileName,
                          createdAt: new Date().toISOString(),
                        }
                      }
                    )
                    setFiles(filesData)
                  })
                  .catch((error) => {
                    console.error('Error fetching file content:', error)
                  })

                setFiles(files)
              } else {
                console.log('no files')
              }
            })
        } else {
          authInstance.signIn()
        }
      })
  }

  return { files }
}
