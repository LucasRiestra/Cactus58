import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {

  return (
    <section>
    <div className="Logo">
        <img className="Transparent-Logo" src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1707761777/Cactus58/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview_lbi4nr.png" alt="Logo" />
        <h1 className='LogoTitle'>ByCactus58</h1>
        <h3 className='Title'>La mejor Comida Venezolana de Almeria</h3>
    </div>
    <div className='ImgMenu'>
        < Link to="/menu"><h1>Visita nuestra Carta</h1></Link>
    </div>
    <div className='ImgReserva'>
        <h1>Reserva o Haz tu pedido</h1>
    </div>
    <div className='ImgContact'>
        <h1>Conocenos</h1>
    </div>
    </section>
  );
};

export default Home;