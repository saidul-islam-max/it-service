import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../img/1.jpg'

const About = () => {
    return (
        <div>
             <div class="card pt-5 pb-5 bg-light" >
                   <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                <Image src={img} className="img-fluid" rounded />
                                </Col>
                                
                                <Col xs={12} md={6}>
                                   <h1 className="fw-bold">About</h1>

                                   <p className="fs-4">Unique It servicing Center is a technology based institution in Feni Sadar Upazila, Bangladesh. It is directed under The Directorate of Technical Education(DTE). This is the first government ICT based polytechnic institute for diploma in engineering courses in Bangladesh. It provides diploma in engineering program in three technologies, they are 1. Data Telecommunication and Networking (DTNT), 2. Computer Science and Technology (CST) and 3. Telecommunication Technology.</p>
                                   
                                </Col>
                            </Row>
                            </Container>
                  </div>

                  <div>

                  </div>
        </div>
    );
};

export default About;