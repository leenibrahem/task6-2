import React from 'react'
import './Arrivals.css'

const Arrivals = () => {







    
  return (
    <div class="container-fluid Arrivals">
          <div class="row section-header pb-5 text-center">
            <h2>NEW ARRIVALS</h2>
            <p class="text-black-50">FIND THE PERFECT PHONE FOR YOU</p>
          </div>
          <div class="main-slider-container position-relative mx-auto">
            <div class="prev-btn-container bg-dark p-2 position-absolute  d-flex justify-content-center align-items-center rounded-circle">
              <div class="prev-btn"></div>
            </div>
            <div class="swiper-slider d-flex overflow-hidden mx-auto">
              <div class="swiper-container d-flex gap-3 position-relative">
              </div>
            </div>
            <div class="next-btn-container bg-dark p-2 position-absolute  d-flex justify-content-center align-items-center rounded-circle">
              <div class="next-btn"></div>
            </div>
          </div>
        </div>
  )
}

export default Arrivals
