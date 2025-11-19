export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="primary-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          {/* 之後換成真正圖片路徑 */}
          <div className="hero-image-placeholder">Hero Image</div>
        </div>
      </div>
    </section>
  );
}
