import { useEffect } from 'react'

const useSrcollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export default useSrcollTop
