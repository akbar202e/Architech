import React from 'react';
import '../assets/css/login.css';
import loginImg from '../assets/daftar/daftarImg.png';
import logo from '../assets/ArchitechLogo.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Daftar = () => {
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
                            <h2 className='text-light fw-bold'>Daftar</h2>
                            <input type="text" placeholder='Nama Lengkap'/>
                            <input type="email" placeholder='Email'/>
                            <input type="text" placeholder='No.Hp'/>
                            <input type="password" placeholder='Password'/>
                            <Link to='/'><Button className='border-0 px-5 py-1 fs-5 rounded-5' style={{background:'#B1907F'}}>Daftar</Button></Link>
                            <p>Sudah Punya Akun? <Link to='/login' style={{textDecoration:'none', color:'#735F4D', fontWeight:'bold'}}>Masuk</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Daftar;
