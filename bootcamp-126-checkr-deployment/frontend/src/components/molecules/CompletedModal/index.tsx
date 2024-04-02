import { Modal, Stack, styled } from '@mui/material'
import React, { useEffect } from 'react'
import Theme from '../../../theme'
import Icon from '../../atoms/Icon'
import Success from '../../../../public/assets/images/success.gif'
import CustomTypography from '../../atoms/Typography'
import { useNavigate } from 'react-router'
const StyledModal = styled(Modal)`
  top: 20%;
  left: 25%;
  .css-2bjsqt-MuiStack-root {
    height: 55.2vh;
    width: 50.9vw;
    justify-content: center;
    border-radius: ${Theme.spacing(3)};
  }
`
interface CompletedModalProps {
  modalText: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  redirect: string
}

const CompletedModal = (props: CompletedModalProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      props.setOpen(false)
      if (props.redirect) {
        navigate(`/${props.redirect}`)
      }
    }, 4000)
  }, [props.open])

  return (
    <StyledModal open={props.open} data-testid="completed-modal">
      <Stack
        direction={'column'}
        bgcolor={Theme.palette.structuralColors.white}
        alignItems={'center'}
        gap={'1vh'}
      >
        <Stack width={'20vw'}>
          <Icon src={Success} alt="success" />
        </Stack>
        <CustomTypography variant="h2" color={Theme.palette.text.highEmphasis}>
          {props.modalText}
        </CustomTypography>
      </Stack>
    </StyledModal>
  )
}

export default CompletedModal
