export const ExportButtonClick = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenSuccessModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpen(false)
  setOpenSuccessModal(true)
}
