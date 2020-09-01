import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="mb-1" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Store Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-top" />
        <Navbar.Collapse id="navbar-top">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Add Item</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>UserName</Nav.Link>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
