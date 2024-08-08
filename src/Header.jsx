import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary fw-bolder">
        <Container>
            <Navbar.Brand href="#home">
                <i class="fa-solid fa-cart-arrow-down fa-bounce me-2"></i>
                EKART
            </Navbar.Brand>
        </Container>
    </Navbar>
    </>
  )
}

export default Header
