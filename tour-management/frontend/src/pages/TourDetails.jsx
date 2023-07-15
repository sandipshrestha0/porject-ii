import React, {useRef, useState, useEffect} from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'

import calculateAvgRating from '../utils/avgRating'
import avatar from "../assets/images/avatar.jpg"
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

const TourDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  
 //fetch data ffrom db
 const {data:tour} = useFetch(`${BASE_URL}/tours/${id}`)

console.log(id);
  // destrucure propeties from tour object
  const {
    photo, 
    title, 
    desc, 
    price, 
    reviews, 
    address, 
    city, 
    distance, 
    maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  //formate date
  const options ={day:'numeric', month:'long', year:'numeric'}

  // submit request to the server
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    
    alert(`${reviewText}, ${tourRating}`)
    // later will call our api
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
    
    <section>
      <Container>
        <Row>
          <Col lg ='8'>
          <div className="tour__content">
            <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
              <span className="tour__rating d-flex align-items-center gap-1">
                <i className="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i> 
                {avgRating === 0 ? null : avgRating }
                {totalRating === 0 ? 
                ('Not rated')  :(
                <span>({reviews.length})</span> )}
              </span>
              <span>
                <i className='ri-map-pin-user-fill'></i> {address}
              </span>
              </div>
              <div className="tour__extra-details">
                <span>  <i className='ri-map-pin-2-line'></i> {city}   </span>
                <span>  <i className='ri-money-dollar-circle-line'></i> {price} /per person   </span>
                <span>  <i className='ri-map-pin-time-line'></i> {distance} k/m   </span>
                <span>  <i className='ri-group-line'></i> {maxGroupSize}  </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
            {/* =======tour revies section  ========= */}
            <div className="tour__reviews mt-4">
              <h4>Reviews({reviews?.length}reviews) </h4>

              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-3 rating__group">
                  <span onClick={()=> setTourRating(1)}>
                    1 <i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(2)}>
                    2 <i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(3)}>
                    3 <i className="ri-star-s-fill"></i></span>
                  <span onClick={()=>setTourRating(4)}>
                    4 <i className="ri-star-s-fill"></i></span>
                  <span onClick={()=>setTourRating(5)}>
                    5 <i className="ri-star-s-fill"></i></span>
                </div>
                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' 
                    required
                  />
                  <button className="btn primary__btn text-white" type='submit'>
                    submit
                  </button>
                </div>
              </Form>

              <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review=>
                    (<div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>sandip</h5>
                            <p>
                              {
                              new Date('06/02/2023').toLocaleDateString("en-US", options)
                              }
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            5 <i className='ri-star-s-fill'></i>
                          </span>
                        </div>
                        <h6>Amazig tour</h6>
                      </div>
                    </div>
                      ))
                  }
              </ListGroup>

            </div>
            {/* =======tour revies section end ========= */}
            </div>
          </Col>
          <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default TourDetails
