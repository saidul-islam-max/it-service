import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className="m-5">
            <h1 className="text-center">Our Service</h1>
            <Container>
                <Row>
                {
                service.map(service => <Col service={service} xs={12} md={3} className="text-center service-img mt-4" >
                <Image src={service.imgService} className="img-service" hegiht="" rounded />
                <h4>{service.type}</h4>
                </Col>)
                 }
                </Row>
            </Container>
            
        </div>
    );
};

export default Services;