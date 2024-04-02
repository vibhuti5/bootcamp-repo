import { Divider, IconButton, Modal, Stack } from '@mui/material'
import { StyledBox, StyledButton, StyledCard } from './styles'
import CustomTypography from '../../atoms/Typography'
import Theme from '../../../theme'
import Icon from '../../atoms/Icon'
import Attachment from '../../../../public/assets/images/Attachment.svg'
import React from 'react'
import CloseButton from '../../../../public/assets/images/CloseButton.png'
import {
  EmailSubject,
  WARNINGS,
  Salutation,
  Content,
  Conclusion,
  Closing,
  Signature,
  Attachments,
  ATTACHMENTS,
  SubmitButton,
  Title,
} from '../../../utils/constants'
export interface ConfirmModalProps {
  from: string
  to: string
  name: string
  open: boolean
  onClose: () => void
  submitNotice: () => void
  charges: string[]
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const emailInfo = [
    { id: '1', title: 'From:', detail: props.from },
    { id: '2', title: 'To:', detail: props.to },
    { id: '3', title: 'Subject:', detail: EmailSubject },
  ]
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <StyledCard>
        <Stack
          direction={'row'}
          spacing={'34vw'}
          paddingTop={'2.08vh'}
          paddingLeft={'1.3vw'}
        >
          <CustomTypography
            variant="subtitle1"
            children={Title}
            color={Theme.palette.text.highEmphasis}
          />
          <IconButton onClick={props.onClose}>
            {<img src={CloseButton} alt="Close" />}
          </IconButton>
        </Stack>
        <Divider
          style={{
            color: Theme.palette.structuralColors.stroke,
            marginTop: '1.8vh',
          }}
        ></Divider>
        <Stack
          width="48.53vw"
          spacing={'4vh'}
          height={'70.70vh'}
          marginLeft={'1.3vw'}
          marginTop={'2vh'}
        >
          <Stack spacing={'1.5vh'}>
            {emailInfo.map((info) => (
              <Stack direction={'row'} spacing={2} key={info.id}>
                <CustomTypography
                  variant="caption1"
                  color={Theme.palette.structuralColors.black}
                  children={info.title}
                />
                <CustomTypography
                  variant="caption1"
                  color={Theme.palette.text.mediumEmphasis}
                  children={info.detail}
                />
                <br />
              </Stack>
            ))}
            <StyledBox>
              <Stack
                width={'38.94vw'}
                height={'7.03vh'}
                paddingTop="2vh"
                paddingLeft="1vw"
              >
                {WARNINGS.map((warning) => (
                  <li key={warning.id}>
                    <CustomTypography
                      variant="caption2"
                      color={Theme.palette.accentColors.darkRed}
                      children={warning.text}
                    />
                  </li>
                ))}
              </Stack>
            </StyledBox>
          </Stack>
          <Stack spacing={'2vh'} width="48.53vw">
            <CustomTypography
              variant="caption2"
              color={Theme.palette.text.mediumEmphasis}
              children={`${Salutation} ${props.name},`}
            />
            <CustomTypography
              variant="caption2"
              color={Theme.palette.text.mediumEmphasis}
              children={Content}
            />
            {props.charges.map((item) => (
              <CustomTypography
                key={item}
                variant="caption2"
                color={Theme.palette.text.mediumEmphasis}
              >
                {<li>{item}</li>}
              </CustomTypography>
            ))}
            <CustomTypography
              variant="caption2"
              color={Theme.palette.text.mediumEmphasis}
              children={Conclusion}
            />
            <Stack>
              <CustomTypography
                variant="caption2"
                color={Theme.palette.text.mediumEmphasis}
                children={Closing}
              />
              <CustomTypography
                variant="caption2"
                color={Theme.palette.text.mediumEmphasis}
                children={Signature}
              />
            </Stack>
          </Stack>
          <Stack spacing={'1vh'}>
            <CustomTypography
              variant="caption1"
              color={Theme.palette.structuralColors.black}
              children={Attachments}
            />
            {ATTACHMENTS.map((link) => (
              <Stack direction={'row'} spacing={4} key={link.id}>
                <Icon
                  src={Attachment}
                  style={{ width: '24px', height: '24px' }}
                ></Icon>
                <CustomTypography
                  variant="caption2"
                  color={Theme.palette.text.mediumEmphasis}
                  children={link.text}
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Divider
          style={{
            color: Theme.palette.structuralColors.stroke,
          }}
        ></Divider>
        <StyledButton variant="contained" onClick={props.submitNotice}>
          {
            <CustomTypography
              variant="body1"
              color={Theme.palette.structuralColors.white}
              children={SubmitButton}
            />
          }
        </StyledButton>
      </StyledCard>
    </Modal>
  )
}

export default ConfirmModal
