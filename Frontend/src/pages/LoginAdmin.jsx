import React from 'react';
import '../assets/css/login.css';
import loginImg from '../assets/login/LoginImg.png';
import logo from '../assets/ArchitechLogo.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LoginAdmin = () => {
    return (
        <div>
            <section id="login">
                <div className="container d-flex px-5 justify-content-center" id='loginContainer'>
                    <div className="loginImg d-flex flex-column justify-content-center">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="loginCard p-4 text-center">
                        <div className="loginForm d-flex flex-column gap-4 p-5">
                            <img src={logo}/>
                            <h1 className='text-light fw-bold'>Admin</h1>
                            <input type="text" placeholder='Email'/>
                            <input type="password" placeholder='Password'/>
                            <Link to='/dashboard'><Button className='submit border-0 px-5 py-1 fs-5 rounded-5' style={{background:'#B1907F'}}>Masuk</Button></Link>
                        </div>
                    </div>
                </div>
                <Link to='/login'><Button className='adminButton border-0 px-2 py-1 rounded-2' style={{background:'#B1907F'}}>User</Button></Link>
            </section>
        </div>
    );
}

export default LoginAdmin;
