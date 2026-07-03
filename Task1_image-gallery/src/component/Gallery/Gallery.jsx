import { useState } from "react";
import ImageCard from "./ImageCard";
import "../../style/gallery.css";

export default function Gallery({ images, onSelect }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // FILTER LOGIC
  const filteredImages = images
    .filter((img) =>
      filter === "all" ? true : img.category === filter
    )
    .filter((img) =>
      img.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>

      {/* SEARCH BOX */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-box">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          🌍 All
        </button>

        <button
          className={filter === "nature" ? "active" : ""}
          onClick={() => setFilter("nature")}
        >
          🌿 Nature
        </button>

        <button
         className={filter === "human" ? "active" : ""}
          onClick={() => setFilter("human")}
    >
          🧑 Human
         </button>

        <button
          className={filter === "city" ? "active" : ""}
          onClick={() => setFilter("city")}
        >
          🏙️ City
        </button>

        <button
          className={filter === "animals" ? "active" : ""}
          onClick={() => setFilter("animals")}
        >
          🐾 Animals
        </button>

        <button
          className={filter === "birds" ? "active" : ""}
          onClick={() => setFilter("birds")}
        >
          🐦 Birds
        </button>

        <button
          className={filter === "plants" ? "active" : ""}
          onClick={() => setFilter("plants")}
        >
          🌱 Plants
        </button>

      </div>

      {/* IMAGE GRID */}
      <div className="gallery">
        {filteredImages.length > 0 ? (
          filteredImages.map((img, index) => (
            <ImageCard
              key={img.id}
              image={img}

              // 🚨 IMPORTANT FIX HERE
              onClick={() =>
                onSelect(index, filteredImages)
              }
            />
          ))
        ) : (
          <p className="no-result">No images found 😢</p>
        )}
      </div>

    </div>
  );
}