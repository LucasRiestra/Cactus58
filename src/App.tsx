import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import Menu from "./Components/Carta/menu";
import Contact from './Components/Contact/Contact';
import About from './Components/About/conocenos';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conocenos" element={<About />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;