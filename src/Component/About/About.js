import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../img/1.jpg'

const About = () => {
    return (
        <div>
             <div className="card pt-5 pb-5 bg-light" >
                   <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                <Image src={img} className="img-fluid" rounded />
                                </Col>
                                
                                <Col xs={12} md={6}>
                                   <h1 className="fw-bold">About</h1>

                                   <div className="p-3">
                                   <p className="about-text">Unique It servicing Center is a technology based institution in Feni Sadar Upazila, Bangladesh. It is establish in 2008 5th march.Mopstak Ahmed this company CEO and Funder . It is directed under The Directorate of Technical srvice center. The service of Unique IT Center is much better than any other service center</p>
                                   <p className="about-text ps-5  border-start border-dark border-4">
                                   Our aim is to provide service to the customer and satisfy the customer's 100% percentage.
                                   </p>
                                   <p className="about-text">
                                   The IT Service Center is dedicated to contribute to the academic growth of the campus community. Contact the IT Service Center to get help with all OIT services, email and IdentiKey, on campus Internet connectivity, telephone service and other technology-related questions.
                                   </p>
                                   </div>
                                   
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