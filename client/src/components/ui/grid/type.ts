import { IChildren } from '@/types'

export interface IProps<T> extends IChildren {
  data?: T
}
