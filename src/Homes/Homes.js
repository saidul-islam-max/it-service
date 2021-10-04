
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row ,Button, Card } from 'react-bootstrap';

import img from '../img/1.jpg'
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
        <div className=" ">
            <div className="home-img text-center">
             <div class=" home-text w-50">
           
             <h1 className="text-light">Wellcome to <span class="text-warning">Unique It servicing Center</span></h1>
             
             <p class="text-light">Unique It servicing Center is a technology based institution in Feni Sadar Upazila, Bangladesh. It is directed under The Directorate of Technical Education(DTE). </p>

             <button type="button" class="btn btn-warning btn-home mt-4">Click Here</button>
             </div>
           </div>

               {/* ---------About section------- */}
                   <div class="card pt-5 pb-5 bg-light" >
                   <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                <Image src={img} className="img-fluid" rounded />
                                </Col>
                                
                                <Col xs={12} md={6}>
                                   <h1 className="fw-bold">Intriduce of Our Service</h1>

                                   <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi voluptatibus iure perferendis repellendus, at necessitatibus eaque, distinctio itaque nihil ex dolores vero eum maiores consectetur reiciendis placeat quae, accusamus possimus ullam sint illum quidem error aperiam. Corrupti, ducimus dicta? Incidunt pariatur nesciunt fugiat debitis reiciendis maxime aspernatur aperiam. Eveniet, sit magnam, placeat in sequi dolorum deserunt quo at eius quasi tempora distinctio recusandae veritatis, exercitationem corporis odit qui officiis molestiae animi ad.</p>
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
                            service.map(service =>  <Col service={service} xs={12} md={3} className="text-center service-img mt-4" >
                            <Image src={service.imgService} className="img-service" hegiht="" roundedCircle />
                            <h4>{service.type}</h4>
                            </Col>)
                        }
                       
                    </Row>
                    </Container>
                  </div>

{/*---------------------- service section end--------------- */}


{/*---------------------- service man section end--------------- */}

<div className="mt-5 mb-5 bg-light">
                  <Container>
                      <div className="text-center">
                           <h1>Our Team</h1>
                      </div>
                    <Row>
                        
                        {
                            service.map(service =>  <Col service={service} xs={12} md={4} className="text-center  mt-4" >
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
