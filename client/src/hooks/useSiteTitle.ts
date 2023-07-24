import { useLayoutEffect } from 'react'

const useSiteTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) document.title = title
    else document.title = 'SimpleAdminDesboard'
  })
}

export default useSiteTitle
