import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Image Gallery</h3>
        <p>Built with React ⚛️</p>

        {/* SOCIAL ICONS */}
        <div className="socials">
          <a href="#" target="_blank">🌐</a>
          <a href="#" target="_blank">🐙</a>
          <a href="#" target="_blank">💼</a>
        </div>

        <p className="copy">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}