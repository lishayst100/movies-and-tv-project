import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Cast } from "../../types/types";
import SingleCast from "../movie-details/CastComp";

type Props = {
  cast: Cast[];
};

const CastSlider = ({ cast }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === cast.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Set up an interval to change the image every 2 seconds
    const interval = setInterval(goToNextImage, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const castStyle = {
    transform: `translateX(-${currentImageIndex * (100 / cast.length)}%)`,
  };

  return (
    <div className="image-slider">
      <div className="slider-container-cast" style={castStyle}>
        {cast.map((cast, index) => (
          <SingleCast key={index} {...cast} />
        ))}
      </div>
    </div>
  );
};

export default CastSlider;


