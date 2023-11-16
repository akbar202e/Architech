import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div align='center'>
            <h1>Sorry :C</h1>
            <p>pages not found</p>
            <Link to='/'><Button>back to Homepage</Button></Link>
        </div>
    );
}

export default NotFound;
