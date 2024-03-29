import { SkeletonProps, Skeleton as MuiSkeleton } from '@mui/material'
import { IProps } from './type'

const props: SkeletonProps = {
  color: 'primary',
  variant: 'rectangular',
}

const SkeletonGrid = ({ numRows, numCols, width, height }: IProps) => {
  const skeletonRows = Array.from({ length: numRows }, (_, index) => (
    <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
      {Array.from({ length: numCols }, (_, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <MuiSkeleton {...props} width={width} height={height} />
        </div>
      ))}
    </div>
  ))

  return <div>{skeletonRows}</div>
}

export default SkeletonGrid
