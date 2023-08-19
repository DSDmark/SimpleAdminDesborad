import { useEffect } from 'react'
import nProgress from 'nprogress'
import { useLocation } from 'react-router-dom'

export default function useNProgress() {
  const history = useLocation()
  nProgress.configure({ showSpinner: false })

  useEffect(() => {
    const start = () => nProgress.start()
    const done = () => nProgress.done()

    const unlistenStart = () => window.addEventListener('beforeunload', start)
    const unlistenComplete = () => window.removeEventListener('load', done)

    unlistenStart()

    return () => {
      unlistenComplete()
    }
  }, [history])
  return null
}
