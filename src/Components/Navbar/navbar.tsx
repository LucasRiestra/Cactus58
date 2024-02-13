import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import "./navbar.css"
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])


  return (
    <nav>
      <ul>
        <li><Link to="/" className={windowWidth <= 600 ? 'welcome' : ''}>
            {windowWidth <= 600 ? 'ByCactus58' : 'Home'}
          </Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/contactanos">Contáctanos</Link></li>
        <li><Link to="/conocenos">Conócenos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;