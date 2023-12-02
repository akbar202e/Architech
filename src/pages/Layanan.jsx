import React from 'react';
import NavbarC from '../components/NavbarC';
import '../assets/css/layanan.css'
import arsitekImg from '../assets/layanan/arsitekImg.png'
import kontraktorImg from '../assets/layanan/kontraktorImg.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FooterC from '../components/FooterC';
const Layanan = () => {
    return (
        <div className='layanan'>
            <NavbarC/>
            <section id="arsitek-sect">
                <div className="container">
                    <div className="layanan-card p-5 my-5">
                        <div className="text-layanan">
                            <h1 className='my-4 text-center fw-bold'>Arsitek</h1>
                            <div className='text-layanan-desc p-5' align='center'>
                                <p className='fw-bold fs-5'>Arsitek yang telah berpengalaman dalam desain arsitektur seperti rumah, villa, gedung, dan lain sebagainya.</p>
                                <Link to='/about'><Button className='shadow border-0 mt-5 px-4 py-2 fs-4 rounded-5' style={{background:'#B1907F'}}>Konusltasi Disini !</Button></Link>
                            </div>
                        </div>
                        <div className="img-layanan">
                            <img src={arsitekImg} alt="" />
                        </div>
                    </div>

                    <div className="layanan-card p-5 my-5">
                        <div className="text-layanan">
                            <h1 className='my-4 text-center fw-bold'>Arsitek</h1>
                            <div className='text-layanan-desc p-5' align='center'>
                                <p className='fw-bold fs-5'>Arsitek yang telah berpengalaman dalam desain arsitektur seperti rumah, villa, gedung, dan lain sebagainya.</p>
                                <Link to='/about'><Button className='shadow border-0 mt-5 px-4 py-2 fs-4 rounded-5' style={{background:'#B1907F'}}>Konusltasi Disini !</Button></Link>
                            </div>
                        </div>
                        <div className="img-layanan">
                            <img src={kontraktorImg} id='kontraktorImg'/>
                        </div>
                    </div>
                </div>
            </section>
            <FooterC/>
        </div>
    );
}

export default Layanan;
