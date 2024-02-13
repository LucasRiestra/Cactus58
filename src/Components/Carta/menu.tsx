import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EmpanadasArray } from '../../../Database/empanadas';
import 'swiper/swiper-bundle.css';
import "./menu.css"

const Menu = () => {
    return (
        <div className='Foods'>
            <h1 className='CategoryTitle'>Empanadas</h1>
            <p className='slide'>(desliza)</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {EmpanadasArray.map((empanada) => (
                    <SwiperSlide key={empanada.id}>
                        <h2 className="eatTitle">{empanada.name}</h2>
                        <img className="slider-image" src={empanada.img} alt={empanada.name} />
                        
                        <p className='description'>{empanada.description}</p>
                        <p className='price'>Precio: {empanada.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Arepas</h1>
            <p className='slide'>(desliza)</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {EmpanadasArray.map((empanada) => (
                    <SwiperSlide key={empanada.id}>
                        <h2 className="eatTitle">{empanada.name}</h2>
                        <img className="slider-image" src={empanada.img} alt={empanada.name} />
                        
                        <p className='description'>{empanada.description}</p>
                        <p className='price'>Precio: {empanada.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Cachapas</h1>
            <p className='slide'>(desliza)</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {EmpanadasArray.map((empanada) => (
                    <SwiperSlide key={empanada.id}>
                        <h2 className="eatTitle">{empanada.name}</h2>
                        <img className="slider-image" src={empanada.img} alt={empanada.name} />
                        
                        <p className='description'>{empanada.description}</p>
                        <p className='price'>Precio: {empanada.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Pastelitos</h1>
            <p className='slide'>(desliza)</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {EmpanadasArray.map((empanada) => (
                    <SwiperSlide key={empanada.id}>
                        <h2 className="eatTitle">{empanada.name}</h2>
                        <img className="slider-image" src={empanada.img} alt={empanada.name} />
                        
                        <p className='description'>{empanada.description}</p>
                        <p className='price'>Precio: {empanada.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
};

export default Menu;