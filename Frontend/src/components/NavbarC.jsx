import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/ArchitechLogo.png';

const Styles = {
  fontFamily: 'Poppins , sans-serif',
  color:'var(--lightText)',
  backgroundColor: '#735F4D'
};

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={Styles} data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/about">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 gap-4">
            <Nav.Link as={Link} to="/">Beranda</Nav.Link>
            <NavDropdown title="Tentang Kami" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Architech</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/kontak">Contact US</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/layanan">Layanan</Nav.Link>
            <NavDropdown title="Portofolio" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/minimalis">Minimalis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/klasik">Klasik</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industrial">Industrial</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/interior">Interior</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/portofolio">Selengkapnya</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Prosedur" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/desain-arsi">Desain Arsitektur</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/desain-inter">Desain Interior</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pelaksanaan">Pembangunan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{gap:'5px'}}>
            <hr />
            <Button as={Link} to='/sign' type="submit" variant='outline-light'>Daftar</Button>
            <Button as={Link} to='/login' type="submit" variant='secondary' style={{backgroundColor:'#B1907F'}}>Masuk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;