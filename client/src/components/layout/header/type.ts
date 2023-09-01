import { MouseEvent } from 'react'

// useAccountMenuToggle hook
export type HandleOpen = (e: MouseEvent<HTMLButtonElement>) => void
export type HandleClose = () => void
export type OpenState = HTMLButtonElement | null

export interface Props {
  onOpen: boolean
}
