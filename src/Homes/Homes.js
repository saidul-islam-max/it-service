
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row ,Button, Card } from 'react-bootstrap';


import img from '../img/2.jpg'

import './Homes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';




const Homes = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const element = <FontAwesomeIcon icon={faClipboardCheck} />
    return (
        <div >
            <div className="home-img text-center">
             <div className=" home-text w-75">
           
             <h1 className="text-light">Wellcome to <span className="text-warning">Unique It servicing Center</span></h1>
             <div>
             <p className="text-light">Unique It servicing Center is a technology based institution in Feni Sadar Upazila, Bangladesh. It is directed under The Directorate of Technical Education(DTE). </p>

             <button type="button" className="btn btn-warning btn-home mt-4">Click Here</button>

             </div>
             
             </div>
           </div>

               {/* ---------About section------- */}
                   <div className="card pt-5 pb-5 bg-light" >
                   <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                <Image src={img} className="img-fluid" rounded />
                                </Col>
                                
                                <Col xs={12} md={6}>
                                   <h1 className="fw-bold">Intriduce of Our Service</h1>
                                   <div className="p-3">
                                   <p className="about-text">Unique It servicing Center is a technology based institution in Feni Sadar Upazila, Bangladesh. It is establish in 2008 5th march.Mopstak Ahmed this company CEO and Funder . It is directed under The Directorate of Technical srvice center. The service of Unique IT Center is much better than any other service center</p>
                                   <p className="about-text ps-5  border-start border-dark border-4">
                                   Our aim is to provide service to the customer and satisfy the customer's 100% percentage.
                                   </p>
                                   <p className="about-text">
                                   The IT Service Center is dedicated to contribute to the academic growth of the campus community. Contact the IT Service Center to get help with all OIT services, email and IdentiKey, on campus Internet connectivity, telephone service and other technology-related questions.
                                   </p>
                                   </div>
                                   <Button className="p-2">{element} Clik thiss</Button>

                                   
                                </Col>
                            </Row>
                            </Container>
                  </div>
 {/*---------------------- service section--------------- */}
                  <div className="mt-5">
                  <Container>
                      <div className="text-center m-5">
                           <h1>Our Service</h1>
                      </div>
                    <Row>
                        
                        {
                            service.slice(0,4).map(service =>  <Col service={service} xs={12} key={service.type} md={3} className="text-center service-img mt-4" >
                            <Image src={service.imgService} className="img-service" hegiht="" roundedCircle />
                            <h4>{service.type}</h4>
                            </Col>)
                        }
                       
                    </Row>
                    </Container>
                  </div>

{/*---------------------- service section end--------------- */}


{/*---------------------- service man section end--------------- */}

<div className="mt-5 mb-5 bg-light mt-5">
                  <Container>
                      <div className="text-center">
                           <h1>Our Team</h1>
                      </div>
                    <Row>
                        
                        {
                            service.slice(0,11).map(service =>  <Col service={service} xs={12} md={4} className="text-center  mt-4" >
                            <Card >
                               <Card.Img variant="top" className="team-img" src={service.img} />
                               <Card.Body>
                                   <Card.Title>Name: {service.name}</Card.Title>
                                   
                                   <Card.Text>
                                       <p>Age: {service.age}</p>
                                       <p>Job-type: {service.type}</p>
                                       <p>Adresse: {service.Address}</p>
                                       <p>Salary: {service.salary}</p>
                                   </Card.Text>
                                   
                               </Card.Body>
                               </Card>
                           
                           </Col>)
                        }
                       
                    </Row>
                    </Container>
                  </div>

                  
         {/* ----------------- */}

        </div>
      
    );
};
export default Homes;
