import { FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='icon'>
        <a href="https://www.instagram.com/bycactus58/" target="_blank" rel="noreferrer">
          <FaInstagram size={48} />
        </a>
      </div>
      <div>
        <p className='reservas-footer'>Reservas: 671-35-92-21 / 950-67-18-22 </p>
      </div>
      <div>
        <p>© Developed By Lucas Riestra</p>
      </div>
      
    </footer>
  );
};

export default Footer;