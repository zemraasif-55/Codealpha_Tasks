import { useEffect } from "react";
import "./lightbox.css";

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  close,
}) {

  if (!images || !images.length || currentIndex === null) return null;

  const currentImage = images[currentIndex];

  const handleChange = (e) => {
    setCurrentIndex(Number(e.target.value));
  };

  return (
    <div className="lightbox" onClick={close}>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

        {/* CLOSE */}
        <button className="close-btn" onClick={close}>✕</button>

        {/* IMAGE */}
        <img src={currentImage.src} alt="" />

        {/* SLIDER */}
        <input
          type="range"
          min="0"
          max={images.length - 1}
          value={currentIndex}
          onChange={handleChange}
          className="slider"
        />

      </div>

    </div>
  );
}