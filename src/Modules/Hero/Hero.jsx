import Carousel from 'react-bootstrap/Carousel';
import img1 from './../../Components/Assets/Imgs/phono-slider-1.webp'
import img2 from './../../Components/Assets/Imgs/phono-slider-2.webp'
import img3 from './../../Components/Assets/Imgs/phono-slider-3.webp'
import './Hero.css'

function Hero() {
  return (
   <div>
     <Carousel data-bs-theme="dark">
      <Carousel.Item className='  position-relative'>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='hero-text position-absolute text-white text-center hero-text-one tx1'>
        <h2 className="pb-2 ">Zania Black Edition</h2>
       <h2 className="pb-2">Curvy Bevel Dual Audio</h2>
       <div className="hero-btn">
        <a href="" className="btn btn-dark border-white rounded-pill p-3 px-5">SHOP NOW</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='  position-relative'>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className="hero-text position-absolute text-sm-black text-center hero-text-two tx2">
        <h2 className="pb-2">4k RESOLUTION</h2>
                <h2 className="pb-2">Exclusive Steel Frame</h2>
                <div className="hero-btn">
                  <a href="" className="btn btn-light border-black rounded-pill p-3 px-5">SHOP NOW</a>
                </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='  position-relative'>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className="hero-text position-absolute text-white text-center hero-text-three tx3">
        <h2 className="pb-2">Delta Zertiga Processor</h2>
        <h2 className="pb-2">Full Screen Display</h2>
        <div className="hero-btn">
                  <a href="" class="btn btn-dark border-white rounded-pill p-3 px-5">SHOP NOW</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
  
    </Carousel>
     
   </div>
    
  );
}

export default Hero;