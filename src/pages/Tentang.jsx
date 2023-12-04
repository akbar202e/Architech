import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from '../components/NavbarC';
import bgAbout from '../assets/about/about2-bg.png'
import '../assets/css/about.css';
import FooterC from '../components/FooterC';
const Tentang = () => {
    return (
        <div className="About">
            <NavbarC/>
            <section id="about1">
                <div className="container p-5 d-flex flex-column gap-5">
                    <div className='about1-header mt-5'>
                        <div className="p-5">
                            <h1 className='display-4 fw-bold'>Architech</h1>
                            <h5 className='fw-bold'>Jika kamu dapat memimpikannya,<br/> Kita bisa membangunnya !</h5>
                        </div>
                    </div>
                <div className='about1-desc fw-bold fs-5 p-5 text-center' style={{backgroundColor:'#B1907F', borderRadius:'60px'}}>
                    <p>Selamat datang di situs web kami yang menampilkan dua layanan utama dalam satu lokasi yang nyaman : Layanan Desain Rumah dan Pembelian Real Estat. Kami memahami bahwa desain rumah dan proses pembelian merupakan langkah penting dalam hidup Anda dan kami hadir untuk membantu Anda memasuki dunia real estat dengan percaya diri.</p>
                </div>
                <div className="about2-header">
                    <img src={bgAbout} alt="" />
                    <div className='about2-desc'>
                        <h1 className='display-4 fw-bold'>Tentang Kami</h1>
                    </div>
                </div>
                    <div className='about1-desc fw-bold fs-5 p-5 text-center mt-4' style={{backgroundColor:'#B1907F', borderRadius:'60px'}}>
                        <p>Rumah adalah tempat bertemunya impian dan kreativitas dalam kehidupan nyata. Dalam layanan desain kami, kami menawarkan berbagai solusi untuk memastikan rumah Anda mencerminkan selera, gaya hidup, dan kebutuhan unik Anda. Tim desain kami terdiri dari para profesional berpengalaman yang akan bekerja sama dengan Anda untuk menciptakan ruang yang Anda impikan. Dari konsep hingga penyelesaian.</p>
                    </div>
                </div>
            </section>
            <FooterC/>
        </div>
    );
}

export default Tentang;
