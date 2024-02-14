import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import "./navbar.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleAsideOpen = () => {
        setIsAsideOpen(true);
    };
    const handleAsideClose = () => {
        setIsAsideOpen(false);
        document.body.style.marginLeft = '0';
    };

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };

  
  const MenuContent = () => (
    <aside className={`menuAside ${isAsideOpen ? 'open' : ''}`} style={{ position: 'fixed'}}>
      <ul className='ulAside'>
        <li className='liAside' onClick={() => {scrollToTop(); handleAsideClose();}}>
          <Link to="/">home</Link>
        </li>
        <li className='liAside' onClick={() => {scrollToTop(); handleAsideClose();}}>
          <Link to="/menu">la carta</Link>
        </li>
        <li className='liAside' onClick={() => {scrollToTop(); handleAsideClose();}}>
          <Link to="/contact">contactanos</Link>
        </li>
        <li className='liAside' onClick={() => {scrollToTop(); handleAsideClose();}}>
          <Link to="/conocenos">conocenos</Link>
        </li>
        <button className="closeAside" onClick={handleAsideClose}>cerrar</button>
      </ul>
    </aside>
  );

  return (
    <div style={{position: 'relative'}}>
    <nav>
      <ul className='navList'>
        
        <li><Link to="/" className={windowWidth <= 600 ? 'welcome' : ''}>
            {windowWidth <= 600 ? 'ByCactus58' : 'Home'}
          </Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/contact">Contáctanos</Link></li>
        <li><Link to="/conocenos">Conócenos</Link></li>
        <FontAwesomeIcon onClick={handleAsideOpen} icon={faBars} className='fabars' />
      </ul>
    </nav>
    {MenuContent()}
    </div>
  );
};

export default Navbar;