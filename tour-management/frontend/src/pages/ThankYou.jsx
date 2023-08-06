import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import '../styles/thank-you.css'


import config from './Khalti/khaltiConfig.js'
import KhaltiCheckout from "khalti-checkout-web";

let checkout = new KhaltiCheckout(config);


const ThankYou = () => {

const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const totalAmount = searchParams.get('totalAmount');



  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center'>
          <div className="thank__you">
            <span><i class="ri-checkbox-circle-line"></i></span>
            <h1 className="mb-3 fw-semibold">Thank You</h1>
            <h3 className="mb-4"> Payment System</h3>
  <div>totalamount: rs {totalAmount}  </div>
            {/* <Button className='btn primary__btn w-25'>
              <Link to='/home'>Back to Home </Link>
            </Button>  */}
            <Button lassName='btn primary__btn w-25' onClick={() => checkout.show({ amount: totalAmount })}>  Pay Via Khalti   </Button>
            
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYou
