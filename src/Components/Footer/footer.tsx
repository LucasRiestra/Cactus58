import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
      <div>
        <p>© Powered By Lucas Riestra</p>
      </div>
      
    </footer>
  );
};

export default Footer;