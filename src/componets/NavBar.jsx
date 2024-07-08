import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
               </Nav>
            </Navbar.Collapse> */}
         </Container>
      </Navbar>
   );
};

export default NavBar;
