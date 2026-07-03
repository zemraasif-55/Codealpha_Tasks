export default function ImageCard({ image, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={image.src} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
}

