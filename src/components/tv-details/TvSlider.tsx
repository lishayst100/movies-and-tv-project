import { useState, useEffect } from "react";
import '../header/Hero.scss'
import { TvShow } from "../../types/types";
import FrontTv from "../tv/FrontTv";

type Props = {
  images: TvShow[];
};

const TvSlider = ({ images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Set up an interval to change the image every 2 seconds
    const interval = setInterval(goToNextImage, 7000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const imageStyle = {
    transform: `translateX(-${currentImageIndex * (200 / images.length)}%)`,
  };

  return (
    <div className="image-slider">
      <div className="slider-container" style={imageStyle}>
        {images.map((image, index) => (
          <FrontTv key={index} {...image} />
        ))}
      </div>
    </div>
  );
};

export default TvSlider;
