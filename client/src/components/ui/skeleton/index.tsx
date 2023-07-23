import { SkeletonProps, Skeleton as MuiSkeleton } from '@mui/material'

const props: SkeletonProps = {
  color: 'primary',
}

const Skeleton = ({ w, h }) => {
  return (
    <MuiSkeleton {...props} width={w} height={h}>
      Skeleton
    </MuiSkeleton>
  )
}

export default Skeleton
