import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dash1 from '../../assets/dashboard/dash1.png'
import dash2 from '../../assets/dashboard/dash2.png'
import dash3 from '../../assets/dashboard/dash3.png'
import Dashboard from '../../components/Dashboard';

const KontenHome = () => {
    return (
        <div className="container content2 p-5">
            <h2 className='text-light'>Dashboard</h2>
            <hr/>
            <Card judul='Data Kategori' to='/kategori' img={dash1}/>
            <Card judul='Data Produk' to='/produk' img={dash2}/>
            <Card judul='Data Customer' to='/customer' img={dash3}/>
        </div>
    );
}

const Card = (props) => {
    return (
            <div className='content3 rounded-pill p-4 row overflow-hidden mb-5'>
            <div className="content3text d-flex flex-column justify-content-center col-5 px-3 text-center ">
                <h2 className='fw-bold'>{props.judul}</h2>
                <Link to={props.to}><Button className='border-0 px-4 py-1 fs-6 rounded-5' style={{background:'#B1907F'}}>Selengkapnya</Button></Link>
            </div>
            <div className="content3img rounded-pill col-7">
                <img src={props.img}/>
            </div>
            </div>
    );
}

const Home = () => {
    return (
        <Dashboard isi={<KontenHome/>}/>    
    );
}

export default Home;
