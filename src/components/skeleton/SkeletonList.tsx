import React from 'react'
import Skeleton from './Skeleton'

const SkeletonList = () => {
    const arr = Array.from({length:20})
    
  return (
    <div className="movies-list row mx-auto">
      {arr.map((s, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}

export default SkeletonList