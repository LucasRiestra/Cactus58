import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { ArepasArray, EmpanadasArray, TequeñosArray, PastelitosArray, CachitosArray, SalchipapaArray, CachapasArray, BebidasArray, PostresArray, PerritoArray, PepitoArray, ZumosNaturalesArray} from '../../../Database/Food';
import 'swiper/swiper-bundle.css';
import "./menu.css"
import { useEffect, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Menu = () => {

    SwiperCore.use([Pagination]);

    const foodData = useMemo(() => ({
        arepas: ArepasArray,
        empanadas: EmpanadasArray,
        tequeños: TequeñosArray,
        pastelitos: PastelitosArray,
        cachitos: CachitosArray,
        salchipapa: SalchipapaArray,
        cachapas: CachapasArray,
        bebidas: BebidasArray,
        postres: PostresArray,
        perrito: PerritoArray,
        pepito: PepitoArray,
        zumos: ZumosNaturalesArray
        
    }), []);

    useEffect(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, []);

    return (
        <div className='Foods'>
            <h1 className='CategoryTitle'>Arepas</h1>
            <p className='description'>Son tortas de masas redondas y aplastadas que se hacen a base de harina de
              maíz y se cocinan asadas a la plancha. «El pan nuestro de cada día del venezolano»
                  A continuación te presentamos las combinaciones más famosas en Venezuela.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
            >
                {foodData.arepas.map((arepa) => (
                    <SwiperSlide key={arepa.id}>
                        <h2 className="eatTitle">{arepa.name}</h2>
                        <img className="slider-image" src={arepa.img} alt={arepa.name} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='description'>{arepa.description}</p>
                        <p className='price'>Precio: {arepa.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Tequeños</h1>
            <p className='description'>Palitos de queso tremendamente populares en Venezuela, cuya
              peculiaridad es la masa de harina de trigo frita. Se sirven con salsa de ajo y cilantro. Algunos los prefieren con
              mermelada, que Dios los perdone.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {foodData.tequeños.map((tequeños) => (
                    <SwiperSlide key={tequeños.id}>
                        <img className="slider-image" src={tequeños.img} />
                        <p className='price'>Precio: {tequeños.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Empanadas</h1>
            <p className='description'>Elaboradas con la misma masa de maíz que las arepas,
            tienen forma de media-luna y se sirven fritas. Si te dan el culito de la empanada esa persona te ama.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {foodData.empanadas.map((empanada) => (
                    <SwiperSlide key={empanada.id}>
                        <h2 className="eatTitle">{empanada.name}</h2>
                        <img className="slider-image" src={empanada.img} alt={empanada.name} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='description'>{empanada.description}</p>
                        <p className='price'>Precio: {empanada.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Pastelitos</h1>
            <p className='description'>Empanadillas de harina de trigo fritas.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {foodData.pastelitos.map((empanada) => (
                    <SwiperSlide key={empanada.id}>
                        <h2 className="eatTitle">{empanada.name}</h2>
                        <img className="slider-image" src={empanada.img} alt={empanada.name} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='description'>{empanada.description}</p>
                        <p className='price'>Precio: {empanada.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Cachitos</h1>
            <p className='description'>Es un pan similar al brioche y está relleno de trozos de jamón York y bacon. Nunca hay; si hoy tenemos estás de suerte.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {foodData.cachitos.map((tequeños) => (
                    <SwiperSlide key={tequeños.id}>
                        <img className="slider-image" src={tequeños.img} />
                        <p className='price'>Precio: {tequeños.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Salchipapa</h1>
            <p className='description'>Es una comida rápida suramericana que consiste en rodajas de salchicha frita y patatas a la francesa. Le agregamos cheddar, queso y salsas variadas. También puedes pedirla con ternera, pollo o mixta. Procura tener mucha hambre o venir acompañado.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} 
            >
                {foodData.salchipapa.map((tequeños) => (
                    <SwiperSlide key={tequeños.id}>
                        <h2 className="eatTitle">{tequeños.name}</h2>
                        <img className="slider-image" src={tequeños.img} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='price'>Precio: {tequeños.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Perrito<br/>latino</h1>
            <p className='description'>Perrito de 16 cm aprox. Relleno con doble salchicha de pavo, ensalada rallada de zanahoria y repollo, bacon y queso latino a la plancha, acompañado de salsas y patatas fritas. Como decimos en Venezuela: «Un perro con todos los juguetes»</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                
            >
                {foodData.perrito.map((tequeños) => (
                    <SwiperSlide key={tequeños.id}>
                        <img className="slider-image" src={tequeños.img} />
                        <p className='price'>Precio: {tequeños.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <h1 className='CategoryTitle'>Pepito latino</h1>
            <p className='description'>Estilo perrito. Puedes pedirlo de Ternera, Pollo o Mixto, también contiene ensalada rallada de zanahoria y repollo, además de salchichas troceadas de pavo, cheddar y queso Gouda, acompañado también de patatas fritas. Parece perro, pero no es perro, es Pepito, no insista.</p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {foodData.pepito.map((tequeños) => (
                    <SwiperSlide key={tequeños.id}>
                        <img className="slider-image" src={tequeños.img} />
                        <p className='price'>Precio: {tequeños.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            
            <h1 className='CategoryTitle'>Cachapas</h1>
            <p className='description'>Muy parecida a las panquecas, están hechas de maíz tierno molido, se cocinan en la plancha y terminan en forma de media-luna. Tienen un sabor dulzón y se rellenan casi siempre con los mismos ingredientes que las arepas. Dato curioso: Solo el 3 % de los venezolanos sabe darle la vuelta a la cachapa.</p>
            
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} 
            >
                {foodData.cachapas.map((arepa) => (
                    <SwiperSlide key={arepa.id}>
                        <h2 className="eatTitle">{arepa.name}</h2>
                        <img className="slider-image-cachapa" src={arepa.img} alt={arepa.name} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='description'>{arepa.description}</p>
                        <p className='price'>Precio: {arepa.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

            <h1 className='CategoryTitle'>Zumos Naturales</h1>
            <p className='slide'>(Desliza) <FaArrowRight /></p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} 
            >
                {foodData.zumos.map((arepa) => (
                    <SwiperSlide key={arepa.id}>
                        <h2 className="eatTitle">{arepa.name}</h2>
                        <img className="slider-image-drinks" src={arepa.img} alt={arepa.name} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='price'>Precio: {arepa.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

            <h1 className='CategoryTitle'>Bebidas</h1>
            <p className='slide'>(Desliza) <FaArrowRight /></p>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} 
            >
                {foodData.bebidas.map((arepa) => (
                    <SwiperSlide key={arepa.id}>
                        <h2 className="eatTitle">{arepa.name}</h2>
                        <img className="slider-image-drinks" src={arepa.img} alt={arepa.name} />
                        <p className='slide desliza'><FaArrowLeft /> (Desliza) <FaArrowRight /></p>
                        <p className='price'>Precio: {arepa.price.toFixed(2)} <FontAwesomeIcon icon={faEuroSign} /></p>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

            <h1 className='CategoryTitle'>Postres</h1>
            <div className='firstSwiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {foodData.postres.map((empanada) => (
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