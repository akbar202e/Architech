import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/ArchitechLogo.png';
import './style.css';

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#735F4D' }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/about">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 gap-4">
            <Nav.Link as={Link} to="/about">Beranda</Nav.Link>
            <NavDropdown title="Tentang Kami" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Architech</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about">Contact US</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">Layanan</Nav.Link>
            <NavDropdown title="Portofolio" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Minimalis">Minimalis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Klasik">Klasik</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Industrial">Industrial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Interior">Interior</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Prosedur" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{gap:'5px'}}>
            <hr />
            <Button as={Link} to='/login' type="submit" variant='outline-light'>Daftar</Button>
            <Button as={Link} to='/login' type="submit" variant='secondary' style={{backgroundColor:'#B1907F'}}>Masuk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;