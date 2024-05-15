import React, { useEffect, useState } from "react";
import "./Slider.css";
import { Fade, Slide , Zoom} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slider() {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => res.json())
      .then((data) => {
        setImgData(data.slice(0, 10));
      });
  }, []);

  return (
    <div className="slide-container">
      <Fade>
        {imgData.map((image) => (
          <div key={image.id} className="each-slide-effect">
            <h1>{image.title}</h1>
            <img src={image.url} alt={image.title} className='img' />
          </div>
        ))}
      </Fade>
    </div>
  );
}
