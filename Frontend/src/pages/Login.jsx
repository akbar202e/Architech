import React, {useState} from 'react';
import '../assets/css/login.css';
import loginImg from '../assets/login/LoginImg.png';
import logo from '../assets/ArchitechLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/todo', {
                email,
                password,
            });

            if (response.status === 200) {
                // Redirect to the next page or perform any other actions for successful login
                alert('Login successful!');
                // You can use React Router to navigate to the next page
                navigate('/')
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            alert('Error during login. Please try again.');
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
                            <h1 className='text-light fw-bold'>Masuk</h1>
                            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Button className='submit border-0 px-5 py-1 fs-5 rounded-5' style={{background:'#B1907F'}} onClick={handleLogin}>Masuk</Button>
                            <p>Belum Punya Akun? <Link to='/sign' style={{textDecoration:'none', color:'#735F4D', fontWeight:'bold'}}>Daftar</Link></p>
                        </div>
                    </div>
                </div>
                <Link to='/admin'><Button className='adminButton border-0 px-2 py-1 rounded-2' style={{background:'#B1907F'}}>Admin</Button></Link>
            </section>
        </div>
    );
}

export default Login;
