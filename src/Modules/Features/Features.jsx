import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import pic1 from './../../Components/Assets/Imgs/ic5.png'
import pic2 from './../../Components/Assets/Imgs/ic6.webp'
import pic3 from './../../Components/Assets/Imgs/ic3.webp'
import photo from './../../Components/Assets/Imgs/center.webp'
import pic4 from './.././../Components/Assets/Imgs/ic1.webp'
import pic5 from './../../Components/Assets/Imgs/ic4.webp'
import pic6 from './../../Components/Assets/Imgs/ic2.png'
const Features = () => {
  return (
    <div className='Features pb-5'>
   <div className='container'>
    <Row  className=' mt-5 py-5 text-center'>
    <h2>INNOVATIVE QUALITIES & FEATURES</h2>
     <p class="text-black-50">SHOW YOURS TO THE WORLD</p>
     </Row>
     <Row>
        <Col className='order-1 order-xl-0 d-flex flex-column justify-content-between align-items-center'> 
                 <div className='feat text-center text-sm-end d-flex flex-column flex-xl-row align-items-center align-items-sm-end align-items-xl-center'>
                 <div className="feat-text order-1 order-xl-0 pe-xl-4">
                  <h5><a href="#" className="text-decoration-none text-black">INTELLIGENT PROCESSOR</a></h5>
                  <p className="text-black-50">Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                  </div>
                   <div className="feat-img">
                  <img src={pic1} alt=""/>
                  </div>
                 </div>

                 <div className="feat text-center text-sm-end d-flex flex-column flex-xl-row align-items-center align-items-sm-end align-items-xl-center">
                <div className="feat-text order-1 order-xl-0 pe-xl-4">
                  <h5><a href="#" className="text-decoration-none text-black">HD SURROUND AUDIO</a></h5>
                  <p className="text-black-50">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
                </div>
                <div className="feat-img">
                  <img src={pic2} alt=""/>
                </div>
              </div>

              <div className="feat text-center text-sm-end d-flex flex-column flex-xl-row align-items-center align-items-sm-end align-items-xl-center">
                <div className="feat-text order-1 order-xl-0 pe-xl-4">
                  <h5><a href="#" className="text-decoration-none text-black">STYLISH BEVEL EDGES</a></h5>
                  <p className="text-black-50">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
                </div>
                <div className="feat-img">
                  <img src={pic3} alt="" />
                </div>
              </div>
            
        </Col>
        <Col>
        <div className="innovate-img d-flex justify-content-center mx-auto">
                <img src={photo} className="w-100" alt=""/>
         </div>
        
        </Col>
        <Col className=' order-1 order-xl-0 d-flex flex-column justify-content-between align-items-center'>
        <div class="feat text-center text-sm-start d-flex flex-column flex-xl-row align-items-center align-items-sm-start align-items-xl-center">
                <div class="feat-img">
                  <img src={pic4} alt=""/>
                </div>
                <div class="feat-text ps-xl-4">
                  <h5><a href="#" class="text-decoration-none text-black">INTELLIGENT PROCESSOR</a></h5>
                  <p class="text-black-50">Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                </div>
              </div>
              <div class="feat text-center text-sm-start d-flex flex-column flex-xl-row align-items-center align-items-sm-start align-items-xl-center">
                <div class="feat-img">
                  <img src={pic5} alt=""/>
                </div>
                <div class="feat-text ps-xl-4">
                  <h5><a href="#" class="text-decoration-none text-black">HD SURROUND AUDIO</a></h5>
                  <p class="text-black-50">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
                </div>
              </div>

              <div class="feat text-center text-sm-start d-flex flex-column flex-xl-row align-items-center align-items-sm-start align-items-xl-center">
                <div class="feat-img">
                  <img src={pic6} alt=""/>
                </div>
                <div class="feat-text ps-xl-4">
                  <h5><a href="#" class="text-decoration-none text-black">STYLISH BEVEL EDGES</a></h5>
                  <p class="text-black-50">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
                </div>
              </div>
        
        </Col>
     </Row>
   </div>
    </div>
  )
}

export default Features
