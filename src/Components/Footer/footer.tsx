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
        <p>© Developed By<a href="https://www.lucasriestra.com/" target="_blank" rel="noreferrer">Lucas Riestra</a>
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;