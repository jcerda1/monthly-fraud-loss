import React from 'react';
import { Navbar, Nav, NavDropdown }  from 'react-bootstrap'


let Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">RippleShot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#Reports">Reports</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Before RippleShot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">After RippleShot</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
};

export default Header;
