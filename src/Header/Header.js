import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'



const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="fw-bold">
                <Container>

                <Navbar.Brand to="/home"><h1 class="logo">UISC</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                <Nav
                    className="me-auto  my-lg-0 fs-5 "
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                   <NavLink className="mx-2"
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >
                       home
                    </NavLink>

                    <NavLink className="mx-2"
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >
                     About
                    </NavLink>
                    <NavLink className="mx-2 "
                        to="/service"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >
                     service
                    </NavLink>
                
                    <NavLink className="mx-2 text-dar"
                        to="/contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >
                    contact
                    </NavLink>

                   
                </Nav>

              
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
         

       
       
    );
};

export default Header;