import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
     <Container>  
        <LinkContainer to="/">
        <Navbar.Brand  >
          Rohit Sanwariya
        </Navbar.Brand>
        </LinkContainer>
      
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/skills">
            <Nav.Link >
                Skills
              </Nav.Link>

            </LinkContainer>
            
            <LinkContainer exact to="/projects">
            <Nav.Link >
                Projects
              </Nav.Link>
              </LinkContainer>
            <LinkContainer exact to="/contacts">
            <Nav.Link >
                Contacts
              </Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;