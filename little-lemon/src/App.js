import { Route, Routes } from "react-router-dom";
import Footer from './layout/Footer';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import './styles/layout.css';
import './styles/style.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
