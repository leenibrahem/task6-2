import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import IMG1 from './../../Components/Assets/Imgs/free-deliver-icon.webp'
import IMG2 from './../../Components/Assets/Imgs/offers-icon.webp'
import IMG3 from './../../Components/Assets/Imgs/support-icon.webp'
import './MiniCards.css'


const MiniCards = () => {
  return (
    <div className='container-fluid extra-line border-bottom'>
      <Row  className='container-fluid extra-line border-bottom' >
        <Col>
        <div className="extra-card d-flex justify-content-center align-items-center p-4">
                <div className="extra-img pe-3">
                  <img src={IMG1} alt=""/>
                </div>
                <div className="extra-text">
                  <h6>FREE SHIPPING</h6>
                  <p className="text-black-50 m-0">Save Big on next product</p>
                </div>
              </div>
        </Col>
        <Col>
        <div className="extra-card d-flex justify-content-center align-items-center p-4">
                <div className="extra-img pe-3">
                  <img src={IMG2} alt=""/>
                </div>
                <div className="extra-text">
                  <h6>FREE SHIPPING</h6>
                  <p className="text-black-50 m-0">Save Big on next product</p>
                </div>
              </div>
        
        
        </Col>
        <Col>
        <div className="extra-card d-flex justify-content-center align-items-center p-4">
                <div className="extra-img pe-3">
                  <img src={IMG3} alt=""/>
                </div>
                <div className="extra-text">
                  <h6>FREE SHIPPING</h6>
                  <p className="text-black-50 m-0">Save Big on next product</p>
                </div>
              </div>
        
        
        </Col>

      </Row>
    
    </div>
  )
}

export default MiniCards
