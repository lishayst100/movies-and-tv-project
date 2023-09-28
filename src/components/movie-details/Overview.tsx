import React from 'react'

const Overview = (props:{overview:string}) => {
  return (
    <div>
      <h4 className="overview">Overview</h4>
      <p className="overview-text">{props.overview}</p>
    </div>
  );
}

export default Overview