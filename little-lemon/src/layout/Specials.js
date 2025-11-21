import lemon_dessert from '../assets/lemon dessert.jpg'
import bruchetta from '../assets/bruchetta.svg'
import greek_salad from '../assets/greek salad.jpg'

export default function Specials() {
  return (
    <section className="specials container">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="primary-btn">Online Menu</button>
      </div>

      <div className="cards">
        <article className="card">
          <div className="card-image">
            <img src={greek_salad} alt="Greek salad" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Greek salad</h3>
              <span className="price">$ 12.99</span>
            </div>
            <p className="card-text">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a href="#order">Order a delivery 🚚</a>
          </div>
        </article>

        <article className="card">
          <div className="card-image">
            <img src={bruchetta} alt="Bruschetta" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Bruschetta</h3>
              <span className="price">$ 5.99</span>
            </div>
            <p className="card-text">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="#order">Order a delivery 🚚</a>
          </div>
        </article>

        <article className="card">
          <div className="card-image">
            <img src={lemon_dessert} alt="Lemon Dessert" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Lemon Dessert</h3>
              <span className="price">$ 5.00</span>
            </div>
            <p className="card-text">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be.
            </p>
            <a href="#order">Order a delivery 🚚</a>
          </div>
        </article>
      </div>
    </section>
  );
}
