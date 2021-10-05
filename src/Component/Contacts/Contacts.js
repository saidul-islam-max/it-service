import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div className="m-5 text-center ">
            <h1 className="m-5 text-center">Contact Information</h1>

            <Container>
              <Row className="border mb-5 p-5">
                 
                  <Col  xs={12} md={6} >
                      <h3>Unique It servicing Center</h3>
                      <p>Post -New Ranir Hat, Post Code-3900</p>
                      <p>Feni Sadar, Feni.</p>
                      <p>Phone : 0331 ****54 , 0331 ***58</p>
                      <p>Email : hdkhhfhhh@gmail.com</p>
                      <p>Mobile: hgdgfjjfjfjkl@gmail.com (Chirman)</p>
                  </Col>

                  <Col  xs={12} md={6} className="mb-4" >
                      <h3>Unique It servicing Center</h3>
                      <p>Engr. Syed Mahbub Alam</p>
                      <p className="fw-bold">Appeal Reception Officer</p>
                      <p>Instructor Head of the Department (TCT)</p>
                      <p>Phone : 0331 ****54 , 0331 ***58</p>
                      <p>Email:  fdhjkghdkfgjkl@gmail.com</p>
                  </Col>


              </Row>


              
            </Container>

            <Container>
                
                <div>
                <>
                    <Form.Control type="email" className="mb-4" placeholder="Enter your Email" />
                    
                    <FloatingLabel controlId="floatingTextarea2" label="Share Your Problem">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                 </>
                </div>
            </Container>

          
        </div>

       
    );
};

export default Contacts;