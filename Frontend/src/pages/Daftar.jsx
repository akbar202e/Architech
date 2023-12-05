import React, { useState } from 'react';
import '../assets/css/login.css';
import loginImg from '../assets/daftar/daftarImg.png';
import logo from '../assets/ArchitechLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Daftar = () => {
    const navigate = useNavigate();
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [hp,sethp] = useState('');
    const [password,setPassword] = useState('');

    const handleDaftar = async () => {

        if (!fullName || !email || !hp || !password){
            alert('Mohon lengkapi semua data');
            return;
        }else{
            navigate('/')
        }

        try {
            const response = await axios.post('http://localhost:3001/api/v1/todo',{
                fullName,
                email,
                hp,
                password,
            });

            console.log(response.data);
            const userInfo = `Full Name: ${fullName}\nEmail: ${email}\nHP: ${hp}\nPassword: ${password}`;
            alert(userInfo);
        } catch (error){
            console.error(error.message);
        }
    };

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
                            <input type="text" placeholder='Nama Lengkap' value={fullName} onChange={(e)=> setFullName(e.target.value)} />
                            <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                            <input type="text" placeholder='No.Hp' value={hp} onChange={(e)=> sethp(e.target.value)}/>
                            <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                            <Button className='border-0 px-5 py-1 fs-5 rounded-5' style={{background:'#B1907F'}} onClick={handleDaftar}>Daftar</Button>
                            <p>Sudah Punya Akun? <Link to='/login' style={{textDecoration:'none', color:'#735F4D', fontWeight:'bold'}}>Masuk</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Daftar;
