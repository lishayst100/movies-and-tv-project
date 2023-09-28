import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton';

const SkeletonSlider = () => {
     const [screenWidth, setScreenWidth] = useState(window.innerWidth);

     // Use useEffect to update the screenWidth when the window is resized
     useEffect(() => {
       function handleResize() {
         setScreenWidth(window.innerWidth);
       }

       // Add event listener for window resize
       window.addEventListener("resize", handleResize);

       // Clean up the event listener when the component unmounts
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);

    const arr = Array.from({ length: screenWidth > 500 ? 6 : 2});
  return (
    <div className="skeleton-silder">
      {arr.map((s, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}

export default SkeletonSlider