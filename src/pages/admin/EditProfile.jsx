import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';
import logo from '../../assets/ArchitechLogo.png'
const KontenEdit = () => {
    return (
        <div className="container content2 p-5">
            <h2 className='text-light'>Data Admin</h2>
            <hr/>
            <div className='content3 rounded-5 p-4 row overflow-hidden mb-5 py-5'>
            <div align='center' className="content3text px-3">
                <img src={logo} style={{width:'12rem'}}/>
                <h2 className='text-light my-4'>Edit Profile</h2>
                <div>
                    <input type="password" name="" placeholder='Password Baru' className='rounded-pill border-0 p-1 text-center'/>
                </div>
                    <Link align='end' to='#'><Button className='border-0 px-4 py-1 mt-3 fs-6 rounded-5' style={{background:'#B1907F'}}>Simpan</Button></Link>
            </div>
            </div>
        </div>
    );
}

const EditProfile = () => {
    return (
        <Dashboard isi={<KontenEdit/>}/>
    );
}

export default EditProfile;
