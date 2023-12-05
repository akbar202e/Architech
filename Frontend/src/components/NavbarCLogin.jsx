import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/ArchitechLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Styles = {
  fontFamily: 'Poppins , sans-serif',
  color:'var(--lightText)',
  backgroundColor: '#735F4D'
};

const NavbarCLogin = () => {
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
            <NavDropdown title={<FontAwesomeIcon className='mx-3 p-2 rounded-5' style={{backgroundColor:'#d5b599',width:'28px',height:'28px',color:'#B1907F'}} icon={faUser}/>} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profil">Profil Saya</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/edit">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login">logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCLogin;