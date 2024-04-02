import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import React, { useContext, useState } from 'react'
import { FetchContext } from '../../../context/FetchContext'
import { useFileContext } from '../../../context/FileContext'
import { useData } from '../../../context/UserContext'
import { useGoogleService } from '../../../hooks/useGoogleService'
import {
  createNotification,
  getUserByEmail,
  isFileAlreadyExists,
  updateUserById,
  uploadAlreadyExistedFile,
  uploadFile,
} from '../../../services'
import theme from '../../../theme'
import { FILE_UPLOAD_MODAL_CONST, FolderMock } from '../../../utils/constant'
import { IFile, INotification } from '../../../utils/interface'
import AlreadyExistModal from '../../molecules/AlreadyExistModal'
import CloudDriveOptions from '../../molecules/CloudDriveOptions'
import FileLoadingModal from '../../molecules/FileLoadingModal'
import FolderDeck from '../../molecules/FolderDeck'
import GenericModal from '../../molecules/GenericModal'
import SyncModal from '../../molecules/SyncModal'
import TabsComponent from '../../molecules/Tabs'
import CloudUploadModal from '../CloudUploadModal'
import LocalUploadModal from '../LocalUploadModal'

interface FileUploadModalProps {
  isOpen: boolean
  onBackButtonClicked?: () => void
  onCrossButtonClicked?: () => void
}

const BodyContainer = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `repeating-linear-gradient(0deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px), repeating-linear-gradient(90deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px), repeating-linear-gradient(180deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px), repeating-linear-gradient(270deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px)`,
  backgroundSize: '1px 100%, 100% 1px, 1px 100% , 100% 1px',
  backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: theme.spacing(1),
  margin: theme.spacing(6),
  height: '60vh',
})

const FileUploadModal = ({
  isOpen,
  onBackButtonClicked,
  onCrossButtonClicked,
}: FileUploadModalProps) => {
  const { file, pdfName } = useFileContext()
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [showAlreadyExistModal, setShowAlreadyExistModal] =
    useState<boolean>(false)
  const [showFileLoadingModal, setShowFileLoadingModal] =
    useState<boolean>(false)
  const [showFileUploadModal, setShowFileUploadModal] = useState<boolean>(true)
  const [showSyncModal, setShowSyncModal] = useState<boolean>(false)
  const [showFolderDeck, setShowFolderDeck] = useState<boolean>(false)
  const [showFileDeck, setShowFileDeck] = useState<boolean>(false)
  const [progressValue, setProgressValue] = useState<number>(0)
  const [selectedFileId, setSelectedFileId] = useState<string>('')
  const { post, setPost } = useContext(FetchContext)
  const handleChage = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue)
  }
  const { files } = useGoogleService()
  const { data, updateData } = useData()

  const handleNotification = async (
    userId: string,
    fileId: string,
    type: string,
    fileName: string
  ) => {
    try {
      let message
      if (type === 'CREATED') {
        message = `${data.name.split(' ')[0]} has uploaded ${fileName}.`
      } else {
        message = `${data.name.split(' ')[0]} has updated ${fileName}.`
      }
      const requestBody: INotification = {
        message: message,
        type: type,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId,
        filesId: fileId,
        organizationId: 1,
      }
      await createNotification(requestBody)
    } catch (error) {
      console.error(error)
    }
  }
  const handleUploadFileClick = async () => {
    setShowFileUploadModal(false)

    try {
      const res = await isFileAlreadyExists(pdfName)

      const userData = await getUserByEmail(data.email)
      const userId = data.loggedInUserId

      if (res.length > 0) {
        setShowAlreadyExistModal(true)
        setSelectedFileId(res[0].id)
      } else {
        setShowFileLoadingModal(true)

        try {
          await uploadFile(file, userId, (progress) =>
            setProgressValue(progress)
          ).then(() => {
            setPost(post + 1)
            isFileAlreadyExists(pdfName).then((response) =>
              handleNotification(
                response[0].userId,
                response[0].id,
                'CREATED',
                pdfName
              )
            )

            updateUserById(userId, {
              unreadNotificationCount: userData.unreadNotificationCount + 1,
            })
          })
        } finally {
          setTimeout(() => {
            setShowFileLoadingModal(false)
            updateData()
          }, 1000)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const hanldeCancelClick = () => {
    setShowAlreadyExistModal(false)
    setShowFileUploadModal(true)
  }

  const handleAlreadyExistedFileUpload = async () => {
    setShowAlreadyExistModal(false)
    setShowFileLoadingModal(true)
    try {
      const userData = await getUserByEmail(data.email)
      const userId = userData.id

      await uploadAlreadyExistedFile(selectedFileId, userId, file, (progress) =>
        setProgressValue(progress)
      ).then(() => setPost(post + 1))
      handleNotification(userId, selectedFileId, 'UPDATED', pdfName)
      await updateUserById(userId, {
        unreadNotificationCount: userData.unreadNotificationCount + 1,
      })
    } finally {
      setTimeout(() => {
        setShowFileLoadingModal(false)
        updateData()
      }, 1000)
    }
  }

  const handleDriveClick = () => {
    setShowFileUploadModal(false)
    setShowSyncModal(true)

    setTimeout(() => {
      setShowSyncModal(false)
      setShowFolderDeck(true)
    }, 3000)
  }

  const handleFolderClick = () => {
    setShowFolderDeck(false)
    setShowFileDeck(true)
  }

  const handelSyncClick = async (files: IFile[]) => {
    const userData = await getUserByEmail(data.email)
    const userId = userData.id
    await Promise.all(
      files.map(async (file: any) => {
        await isFileAlreadyExists(file.name).then(async (data) => {
          if (data.length == 0) {
            const response = await uploadFile(file.file, userId)
            handleNotification(userId, response.id, 'CREATED', file.name)
          } else {
            await uploadAlreadyExistedFile(
              data[0].id,
              userId,
              file.file,
              () => ''
            )
            handleNotification(userId, data[0].id, 'UPDATED', file.name)
          }
        })
      })
    )
    await updateUserById(userId, {
      unreadNotificationCount: userData.unreadNotificationCount + files.length,
    })
    updateData()
    setShowFileDeck(false)
    setPost(post + 1)
  }

  return (
    <>
      {showFileUploadModal && (
        <GenericModal
          open={isOpen}
          isBackIcon={true}
          isCrossButton={true}
          titleLabel={FILE_UPLOAD_MODAL_CONST.titleLabel}
          onBackButtonClick={onBackButtonClicked}
          onCrossButtonClick={onCrossButtonClicked}
          sx={{ width: '51vw', height: '77.86vh' }}
        >
          <TabsComponent
            tabs={[
              {
                label: FILE_UPLOAD_MODAL_CONST.localLabel,
                content: (
                  <BodyContainer>
                    {
                      <LocalUploadModal
                        onUploadButtonClick={handleUploadFileClick}
                      />
                    }
                  </BodyContainer>
                ),
              },
              {
                label: FILE_UPLOAD_MODAL_CONST.cloudLabel,
                content: (
                  <BodyContainer>
                    {<CloudDriveOptions onDriveClick={handleDriveClick} />}
                  </BodyContainer>
                ),
              },
            ]}
            value={selectedTab}
            onChange={handleChage}
            variant="fullWidth"
          />
        </GenericModal>
      )}
      {showAlreadyExistModal && (
        <AlreadyExistModal
          fileName={pdfName}
          onCancelClick={hanldeCancelClick}
          onUploadClick={handleAlreadyExistedFileUpload}
        />
      )}
      {showFileLoadingModal && (
        <FileLoadingModal
          fileName={pdfName}
          value={progressValue}
          onCrossButtonClick={() => setShowFileLoadingModal(false)}
          sx={{ width: '51vw', height: '66.14vh' }}
        />
      )}
      {showSyncModal && <SyncModal open={showSyncModal} />}
      {showFolderDeck && (
        <FolderDeck
          folders={FolderMock}
          onFolderClick={handleFolderClick}
          onBackIconClick={() => {
            setShowFolderDeck(false)
            setShowFileUploadModal(true)
          }}
          onCrossClick={() => {
            setShowFolderDeck(false)
            setShowFileUploadModal(false)
          }}
        />
      )}

      <CloudUploadModal
        isOpen={showFileDeck}
        files={files ?? [{ id: '', name: '', createdAt: '' }]}
        onBackIconClick={() => {
          setShowFileDeck(false)
          setShowFolderDeck(true)
        }}
        onCrossClick={() => setShowFileDeck(false)}
        onSyncClick={handelSyncClick}
      />
    </>
  )
}

export default FileUploadModal
