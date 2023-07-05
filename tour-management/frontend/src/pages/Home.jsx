import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world1.png'
import experieceImg from '../assets/images/experience.png'



import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'


const Home = () => {
  return  (<>
  {/*========== hero section start ============== */}
  <section>
    <Container>
    <Row>
      <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          <h1>Traveling opens the door to creating
            <span className="highlight"> memories</span>
            </h1>
            <p>Lorem ipsum dolor, sit amet consectetur 
              adipisicing elit. Consequuntur cupiditate minima iusto rem
               voluptas incidunt quod magnam neque cumque voluptates 
               pariatur expedita aut corrupti sit, sapiente veritatis? 
               Nostrum, dolor dicta?
            </p>
        </div>
      </Col>

      <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
      </Col>

      <Col lg='2'>
        <div className="hero__img-box mt-4">
          <video src={heroVideo} alt="" controls/>
        </div>
      </Col>

      <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt=""/>
        </div>
      </Col>

      <SearchBar/>
    </Row>
    </Container>
  </section>
  
  {/*========== hero section start ============== */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className="services__title">We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/*============= featured tour section start =============== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className="mb-5">
          <Subtitle subtitle={"Explore"}/>
          <h2 className="featured__tour-title">
            Our Featured Tours
          </h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>
  {/*============= featured tour section end =============== */}


  {/*============= experience section start =============== */}
    <section>
      <Row>
        <Col lg='6'> 
        <div className="experience__content">
          <Subtitle subtitle={"Experience"}/>
          <h2>
            with our all experience <br /> we will serve You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. In, repellendus enim? Fuga esse
            <br /> 
            dolorum corrupti, autem illum id ducimus totam quia 
            </p>
          </div> 
          <div className="counter__wrapper d-flex align-items-center gap-5">
            
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successfull trip</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Reugular clients</h6>
            </div>
            <div className="counter__box">
              <span>3</span>
              <h6>Years Experience </h6>
            </div>


            </div>    
          </Col>
        <Col lg='6'> 
        <div className="experience__img">
          <img src={experieceImg} alt="" /></div>     </Col>
      </Row>
    </section>
  {/*============= experience section start =============== */}


  {/*============= gallery section start =============== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className="gallery__title">Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>
            <MasonryImagesGallery/>
            
        </Col>
      </Row>
    </Container>
  </section>
  {/*============= gallery section end =============== */}


  {/*============= Testimonial section start =============== */}
  <secction>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial_title">What our fans say about us</h2>
        
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </secction>
  {/*============= Testimonial section end =============== */}

  <Newsletter/>

  </>
  )
}


export default Home

