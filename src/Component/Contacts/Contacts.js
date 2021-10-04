import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div className="m-5 text-center border pb-3">
            <h1 className="m-5 text-center">Contact Information</h1>

            <Container>
              <Row>
                  <Col  xs={12} md={6} >
                      <h3>Unique It servicing Center</h3>
                      <p>Engr. Syed Mahbub Alam</p>
                      <p>Appeal Reception Officer</p>
                      <p>Instructor Head of the Department (TCT)</p>
                      <p>Phone : 0331 ****54 , 0331 ***58</p>
                      <p>Email:  fdhjkghdkfgjkl@gmail.com</p>
                  </Col>



                  <Col  xs={12} md={6}>
                      <h3>Unique It servicing Center</h3>
                      <p>Post -New Ranir Hat, Post Code-3900</p>
                      <p>Feni Sadar, Feni.</p>
                      <p>Phone : 0331 ****54 , 0331 ***58</p>
                      <p>Email : hdkhhfhhh@gmail.com</p>
                      <p>Mobile: hgdgfjjfjfjkl@gmail.com (Chirman)</p>
                  </Col>
              </Row>


              
            </Container>

          
        </div>

       
    );
};

export default Contacts;