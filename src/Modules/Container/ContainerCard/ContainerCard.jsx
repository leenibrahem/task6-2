import Card from "../Card/Card";
import React from 'react'
import img1 from './../../../Components/Assets/Imgs/ic12.webp'
import img2 from './../../../Components/Assets/Imgs/ic13.avif'
import img3 from './../../../Components/Assets/Imgs/ic12.webp'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const ContainerCard = () => {
  return (
    <div className="container mt-5">
        <Row className="text-center">
        <h2>WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
        <p class="text-black-50 pt-3">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
        </Row>
        <Row className="mt-4">
            <Col className="text-center">
            <Card img={img1}
      title="PERFECT CUT"
      txt="DUAL CAMERA"
      disc="Tristique senectus et netus et malesuada ant reiet fames."
      />
            </Col>
            <Col className="text-center">
            <Card img={img2}
      title="PRETTY"
      txt="INTELLIGENT PROCESSING"
      disc="Consequat ac habit amet asse felis donec et odio pellentesque diam."
      />
            </Col>
            <Col className="text-center">
            <Card img={img3}
      title="MOST POPULAR"
      txt="8GB DDR5 RAM"
      disc="Dictum varius duis at consectetur lorem donec massa sap faucibus."
      />
            </Col>
        </Row>
     
    </div>
  )
}

export default ContainerCard
