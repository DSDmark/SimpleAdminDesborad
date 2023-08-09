import { lazy, Suspense } from 'react'

const NotFoundLazy = lazy(() => import('@/pages/404/components/index'))

export default function NotFound() {
  return (
    <Suspense fallback={'loading...'}>
      <NotFoundLazy />
    </Suspense>
  )
}
