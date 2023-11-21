import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from '../components/NavbarC';

const Tentang = () => {
    return (
        <div align='center'>
            <NavbarC/>
            <h1>Tentang Kami</h1>
            <Link to='/'><Button variant='danger'>Home Page</Button></Link>
        </div>
    );
}

export default Tentang;
