import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg';

export default function Nav() { return (
    <nav className="top-nav">
      <div className="nav-inner container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul className="nav-links nav-links-style">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
)}