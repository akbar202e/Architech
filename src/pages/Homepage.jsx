import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Homepage = () => {
    return (
        <div align='center'>
             <h1>Home Page</h1>
             <Link to='/about'><Button variant='success'>Halaman About</Button></Link>
        </div>
    );
};

export default Homepage;
