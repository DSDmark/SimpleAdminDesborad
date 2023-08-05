import { useState } from 'react'
import { HandleOpen, HandleClose, OpenState } from '../type'

const useAccountMenuToggle = (
  initialValue: OpenState,
): [HandleOpen, HandleClose, OpenState] => {
  const [open, setOpen] = useState<OpenState>(initialValue)

  const handleOpen: HandleOpen = e => {
    setOpen(e.currentTarget)
  }

  const handleClose: HandleClose = () => {
    setOpen(null)
  }

  return [handleOpen, handleClose, open]
}

export default useAccountMenuToggle
