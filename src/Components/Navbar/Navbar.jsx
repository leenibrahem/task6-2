import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../Assets/Imgs/logo.webp'
import mob from './../Assets/Imgs/bg-1.webp'
import { Row } from 'react-bootstrap';
import {Col } from 'react-bootstrap';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
    <div className="container">
      <Link className="navbar-brand text-light" href="#"><img src={logo}/></Link>
      <button className="navbar-toggler border-white" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to='/' className="nav-link active text-danger" >Home</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Collection
            </NavLink>
            
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Row>

                <Col>
                  <div><Link className="dropdown-item first" href="#">POWERBANKS</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
                  <div><Link className="dropdown-item" href="#">Affinity P40 Pro</Link></div>
              
                </Col>
                <Col>
                  <div><Link className="dropdown-item first" href="#">EARPHONE</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
                  <div><Link className="dropdown-item" href="#">Spots ERA 5X</Link></div>
              
                </Col>
                <Col>
                  <div><Link className="dropdown-item first" href="#">ANDROID</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
                  <div><Link className="dropdown-item" href="#">Tencho 10 Lite</Link></div>
              
                </Col>
                
                <Col>
                 <img src={mob}/>
              
                </Col>
              </Row>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className="nav-link" href="#Catigory">Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#News">Android</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#education">Memory&Storage</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
            Pages
            </NavLink>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#Courses">About us</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" href="#Leaders">Contactus</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" href="#Testimonials">Blog</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" href="#last-sec">Faq's</Link></li>
            </ul>
          </li>
       <div className='icons'>
       <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>        
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#Education"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></a>
          </li>
       </div>

        </ul>
       
      </div>
      <div className="position-relative w-50px">
        <a className="nav-link dropdown-toggle text-uppercase" id="select" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           
            us <img src="https://flagcdn.com/us.svg" width="20px" className="mb-1" alt="flag"/>
        </a>
        <div className="dropdown-menu ps-2 pe-3 w-100px overflow-scroll z-100 translateX" id="country">
         
        </div>
    </div>
      
      
    </div>
  </nav>
  );
}

export default CollapsibleExample;