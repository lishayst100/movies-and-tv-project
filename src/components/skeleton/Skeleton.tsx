import React from 'react'
import './Skeleton.scss'

const Skeleton = () => {
  return (
    <div className="skeleton-container mb-3">
      <div className="skeleton skeleton-img"></div>
      <div className="skeleton rating-skeleton"></div>
      <div className="skeleton-p skeleton"></div>
      <div className="skeleton-p skeleton"></div>
    </div>
  );
}

export default Skeleton