import React from 'react'


interface OverlayImgProps {
imgUrl:string
}

const OverlayImg = ({imgUrl}:OverlayImgProps) => {
  return (
    <div>
      <div
        className="overlay-image"
        style={{
          backgroundImage: imgUrl
        }}
      ></div>
    </div>
  );
}

export default OverlayImg