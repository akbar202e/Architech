import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from '../components/NavbarC';
const Homepage = () => {
    return (
        <div>
            <NavbarC/>
            <div align='center'>
             <h1>Home Page</h1>
             <Link to='/about'><Button variant='success'>Halaman About</Button></Link>
            </div>
        </div>
    );
};

export default Homepage;
