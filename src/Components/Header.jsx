import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>

        <LinkContainer to="/">
          <Navbar.Brand href="#home">Online &nbsp; Shop</Navbar.Brand>
        </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
              <LinkContainer to="/cart">
              <Nav.Link href="#home">
                <i className="fas fa-shopping-cart">
                </i>&nbsp; cart
              </Nav.Link>
              </LinkContainer>
              
              <LinkContainer>
                <Nav.Link href="#link">
                  <i className="fas fa-user">
                  </i>&nbsp; singin</Nav.Link>
                </Nav>
              </LinkContainer>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header