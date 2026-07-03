import { useState } from "react";
import images from "./data/images";
import Gallery from "./component/Gallery/Gallery";
import Lightbox from "./component/Lightbox/Lightbox";

export default function App() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>

      <div className="hero">
        <h1>World Wild Image Gallery</h1>
        <h2>Explore the beauty of nature</h2>
      </div>

      <Gallery
        images={images}
        onSelect={(index, list) =>
          setLightbox({ index, images: list })
        }
      />

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          setCurrentIndex={(newIndex) =>
            setLightbox(prev => ({
              ...prev,
              index: newIndex
            }))
          }
          close={() => setLightbox(null)}
        />
      )}
      
    </div>

  );
}