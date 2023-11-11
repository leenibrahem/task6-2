import React from 'react'
import Items from './Items/Items'
import { Row } from 'react-bootstrap'
import './Possibilities.css'
import img1 from './../../Components/Assets/Imgs/ic7.webp'
import img2 from './../../Components/Assets/Imgs/ic10.webp'
import img3 from './../../Components/Assets/Imgs/ic9.webp'
import img4 from './../../Components/Assets/Imgs/ic8.png'
import lid from './../../Components/Assets/Imgs/lid.webp'

const Possibilities = () => {
  return (
    <section class="possibilities py-5">
    <div class="container">
      <div class="row section-header text-center">
        <h2>POSSIBILITIES. PERFORMANCE. POWER.</h2>
        <p class="text-black-50">FASTER PROCESSING WITH LESS POWER</p>
      </div>
      <div class="row position-relative">
        <img src={lid} alt=""/>
        <div class="dot">
          <span class="fa fa-circle" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></span>
          
         
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-4 position-relative">
                <div class="modal-body">
                  <img src={img1} alt="processor"/>
                  <h4 class="my-3">SCORPION PROCESSOR</h4>
                  <p class="fs-6">Tristique senectus et netus et malesuada fames ac turpis.</p>
                </div>
                <div class="close-modal-btn position-absolute bg-dark p-2 rounded-circle d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dot">
          <span class="fa fa-circle" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2"></span>
          <div class="pop-container position-absolute p-2">
            <div class="pop d-none d-lg-block position-relative text-center">
              <div class="pop-img">
                <img src={img2} alt="image"/>
              </div>
              <a href="#" class="text-decoration-none text-black fw-bold">DUAL SIM CARDS</a>
              <p>Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
            </div>
          </div>
          
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-4 position-relative">
                <div class="modal-body">
                  <img src={img3} alt="processor"/>
                  <h4 class="my-3">DUAL SIM CARDS</h4>
                  <p class="fs-6">Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
                </div>
                <div class="close-modal-btn position-absolute bg-dark p-2 rounded-circle d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dot">
          <span class="fa fa-circle" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3"></span>
          <div class="pop-container position-absolute p-2">
            <div class="pop d-none d-lg-block position-relative text-center">
              <div class="pop-img">
                <img src={img4} alt="image"/>
              </div>
              <a href="#" class="text-decoration-none text-black fw-bold">48 MP CAMERA</a>
              <p>Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>
            </div>
          </div>
        
        
               <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-4 position-relative">
                <div class="modal-body">
                  <img src={img1} alt="processor"/>
                  <h4 class="my-3">48 MP CAMERA</h4>
                  <p class="fs-6">Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>
                </div>
                <div class="close-modal-btn position-absolute bg-dark p-2 rounded-circle d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dot">
          <span class="fa fa-circle" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal4"></span>
          <div class="pop-container position-absolute p-2">
            <div class="pop d-none d-lg-block position-relative text-center">
              <div class="pop-img">
                <img src={img1} alt="image"/>
              </div>
              <a href="#" class="text-decoration-none text-black fw-bold">48 HRS BACKUP</a>
              <p>Natoque penatibus et magnis dis parturient montes nascetur.</p>
            </div>
          </div>
          <div class="modal fade" id="exampleModal4" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-4 position-relative">
                <div class="modal-body">
                  <img src={img1} alt="processor"/>
                  <h4 class="my-3">48 HRS BACKUP</h4>
                  <p class="fs-6">Natoque penatibus et magnis dis parturient montes nascetur.</p>
                </div>
                <div class="close-modal-btn position-absolute bg-dark p-2 rounded-circle d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default Possibilities
