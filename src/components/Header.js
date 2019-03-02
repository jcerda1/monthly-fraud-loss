import React from 'react';
import { Container, Navbar }  from 'react-bootstrap'


let Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    )
};

export default Header;
