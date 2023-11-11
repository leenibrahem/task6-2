import React from 'react'
import img1 from './../../../Components/Assets/Imgs/ic8.png'
import { Row , Col} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';

const Items = () => {
  return (
    <div className='ITEM '>
        <Row>
            <Col className='item'>
            <Spinner animation="grow" variant="danger" />
            <div className='itembody text-center'>
    <img src={img1} alt="processor"/>
    <h4 class="my-3">SCORPION PROCESSOR</h4>
                      <p class="fs-6">Tristique senectus et netus et malesuada fames ac turpis.</p>
    </div>
            </Col>
            <Col>
            <div className='itembody text-center'>
    <img src={img1} alt="processor"/>
    <h4 class="my-3">SCORPION PROCESSOR</h4>
                      <p class="fs-6">Tristique senectus et netus et malesuada fames ac turpis.</p>
    </div>
            </Col>
            <Col>
            <div className='itembody text-center'>
    <img src={img1} alt="processor"/>
    <h4 class="my-3">SCORPION PROCESSOR</h4>
                      <p class="fs-6">Tristique senectus et netus et malesuada fames ac turpis.</p>
    </div>
            </Col>
            <Col>
            <div className='itembody text-center'>
    <img src={img1} alt="processor"/>
    <h4 class="my-3">SCORPION PROCESSOR</h4>
                      <p class="fs-6">Tristique senectus et netus et malesuada fames ac turpis.</p>
    </div>
            </Col>
            
   </Row>
    </div>
  )
}

export default Items
