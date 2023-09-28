import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from '../shared/Subtitle'

import worldImg from '../assets/images/world1.png'


const About = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'About Us'}/>
                        <img src={worldImg} alt="" />
                    </div>
                    <h1>Travel-Nepal
                        
                    </h1>
                    <p><span className="highlight"> Travel-Nepal</span>
                        is the website where costumer can book traveling packages by on
                        one click or tab. This website provide safety trips and budget packages. Bringing
                        affordable and trusted accomodation the guests can travel instantly. This site
                        also provides several dynamic feaures.
                    </p>
                </div>
                </Col>
                <Col lg='6'>
                    <div className="hero__img-box">
                        <img src={worldImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default About
