import { Skeleton } from '@mui/material'
interface Iprops {
  numRows: number
  numCols: number
}

const SkeletonGrid = ({ numRows, numCols }: Iprops) => {
  const skeletonRows = Array.from({ length: numRows }, (_, index) => (
    <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
      {Array.from({ length: numCols }, (_, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <Skeleton variant='rectangular' width={150} height={100} />
        </div>
      ))}
    </div>
  ))

  return <div>{skeletonRows}</div>
}

export default SkeletonGrid
