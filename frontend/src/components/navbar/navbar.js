import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">IITI Students Exam Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Peoples</Nav.Link>
            <Nav.Link href="#link">Contents</Nav.Link>
            <Nav.Link href="#about">Contact us</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="/auth">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
