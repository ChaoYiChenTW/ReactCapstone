import logo from '../assets/Logo.svg'

export default function Nav() { return (
    <nav className="top-nav">
      <div className="nav-inner container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
)}