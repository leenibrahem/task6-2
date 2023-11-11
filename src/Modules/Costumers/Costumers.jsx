import React from 'react'
import './Costumers.css'
import { Row , Col} from 'react-bootstrap'
import phone from './../../Components/Assets/Imgs/bg-1.webp'

const Costumers = () => {

  return (
    <div className='customers py-5'>
        <Row className=' pb-5 text-center text-white'>
        <h2>SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h2>
         <p class="text-white-50"> DESIGNED TO PERFECTION</p>
        </Row>
        <Row>
        <Col>
        <div className="customers-img pb-5 pb-lg-0">
                <img src={phone} className="object-fit-cover mw-100 iphone" alt="customers-img"/>
              </div>

        </Col>

        <Col>
        <div class="accordion" id="accordionExample">
                <div class="accordion-item border-0 bg-transparent text-white">
                  <h2 class="accordion-header border-bottom">
                    <button class="accordion-button bg-transparent shadow-none text-white d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      NEW GRADIENT COLOR FINISHES
                      <div class="menu-item menu-item-0">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Rierem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 bg-transparent text-white">
                  <h2 class="accordion-header border-bottom">
                    <button class="accordion-button bg-transparent shadow-none text-white d-flex justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      FOUR-SIDED CURVED CERAMIC BODY
                      <div class="menu-item menu-item-1">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 bg-transparent text-white">
                  <h2 class="accordion-header border-bottom">
                    <button class="accordion-button bg-transparent shadow-none text-white d-flex justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      4000MAH HIGH-CAPACITY BATTERY
                      <div class="menu-item menu-item-2">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 bg-transparent text-white">
                  <h2 class="accordion-header border-bottom">
                    <button class="accordion-button bg-transparent shadow-none text-white d-flex justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      FULLY HIDDEN CAMERA LENS
                      <div class="menu-item menu-item-3">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                    </div>
                  </div>
                </div>
              </div>
        </Col>
      
        
 </Row>
      
    </div>
  )
}

export default Costumers
