import { useState } from 'react'

const useSnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const handleClick = () => {
    setOpenSnackBar(true)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackBar(false)
  }

  return { openSnackBar, handleClick, handleClose }
}

export default useSnackBar
