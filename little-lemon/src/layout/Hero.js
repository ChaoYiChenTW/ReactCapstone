import hero_image from '../assets/restauranfood.jpg'

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
          <div className="hero-image-placeholder">
            <img src={hero_image} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
