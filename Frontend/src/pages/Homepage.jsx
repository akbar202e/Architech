import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from '../components/NavbarC';
import FooterC from '../components/FooterC';
import tumb from '../assets/homepage/homeTumbnail.png';
import two1 from '../assets/homepage/two1.png';import two2 from '../assets/homepage/two2.png';
import two3 from '../assets/homepage/two3.png';import two4 from '../assets/homepage/two4.png';
import two5 from '../assets/homepage/two5.png';import two6 from '../assets/homepage/two6.png';
import card1 from '../assets/homepage/card1.png';import card2 from '../assets/homepage/card2.png';
import three1 from '../assets/homepage/three1.png';
import four1 from '../assets/homepage/four1.png';import four2 from '../assets/homepage/four2.png';
import four3 from '../assets/homepage/four3.png';import four4 from '../assets/homepage/four4.png';
import fiveBG from '../assets/homepage/fiveBG.png';
import '../assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import NavbarCLogin from '../components/NavbarCLogin';
const Homepage = () => {
    return (
        <div className='Homepage'>
            <NavbarCLogin/>
            <section id='sect-one'>
                <div className='container'>
                    <div className="sect-one-text pt-5">
                        <h1 className='fw-bold'>Membantu Mewujudkan Rumah Impian.</h1>
                        <p className='py-3 fw-bold'>Jika kamu dapat memimpikannya, Kita bisa membangunnya !</p>
                        <span>
                            <Link to='/about'><Button className='shadow border-0 px-4 py-2 fs-4 rounded-5' style={{background:'#B1907F'}}>Tentang Kami</Button></Link>
                            <FontAwesomeIcon className='mx-3' icon={faChevronRight} size='xl'/>
                        </span>
                     </div>
                </div>
             </section>
             <section id="sect-two">
                <Button id='sect-two-button' className='py-4'><FontAwesomeIcon className='mx-3' icon={faChevronRight} size='xl'/></Button>
                <Button id='sect-two-button' className='py-4'><FontAwesomeIcon className='mx-3' icon={faChevronRight} size='xl' flip='horizontal'/></Button>
                <div className="container py-5 d-flex flex-wrap gap-4 justify-content-center">
                    <SectTwoImg img={two1}/>
                    <SectTwoImg img={two2}/>
                    <SectTwoImg img={two3}/>
                    <SectTwoImg img={two4}/>
                    <SectTwoImg img={two5}/>
                    <SectTwoImg img={two6}/>
                </div>
             </section>
             <section id="sect-three">
                <img className='sect-three-bg' src={three1}/>
                <img className='sect-three-bg' src={three1}/>
                <h1 className='fw-bold text-center pt-5'>Layanan</h1>
                <div className="container py-5 d-flex gap-5 justify-content-center" align='center'>
                    <div className="sect-three-card rounded-5 d-flex flex-column p-5 gap-3">
                        <span className="card-icon rounded-circle">
                            <img src={card1}/>
                        </span>
                        <h2>Arsitek</h2>
                        <p>Jasa desain arsitektur untuk rumah, kost, vila, ruko, kantor, gudang, restoran, cafe, dll..</p>
                    </div>
                    <div className="sect-three-card rounded-5 d-flex flex-column p-5 gap-3">
                        <span className="card-icon rounded-circle">
                            <img src={card2}/>
                        </span>
                        <h2>Kontraktor</h2>
                        <p>Jasa kontraktor pembangunan rumah, kost, vila, ruko, kantor, gudang, restoran, cafe, dll.</p>
                    </div>
                </div>
             </section>
             <section id="sect-four">
                <div className="container py-5 d-flex flex-wrap gap-4 justify-content-center">
                    <SectFourCard kategori='Minimalis' to='/minimalis' img={four1}/>
                    <SectFourCard kategori='Klasik' to='/klasik' img={four2}/>
                    <SectFourCard kategori='Industrial' to='/industrial' img={four3}/>
                    <SectFourCard kategori='Interior' to='/interior' img={four4}/>
                </div>
             </section>
             <section id="sect-five">
                <img src={fiveBG}/>
                <div className="container" id='sect-five-bg'>
                    <div className='sect-five-desc px-5 d-flex flex-column justify-content-center gap-2 fw-light' align='center'>
                        <h1>Architech</h1>
                        <p>Arsitek | Kontraktor</p>
                        <p>Jika kamu dapat memimpikannya Kita bisa membangunnya !</p>
                        <Link to='/layanan'><Button className='shadow border-0 px-4 py-2 fs-4 rounded-5' style={{background:'#B1907F'}}>Konusltasi Disini !</Button></Link>
                    </div>
                </div>
             </section>
             <FooterC/>
        </div>
    );
};

const SectTwoImg = (props) => {
    return (
        <div className='sect-two-img'>
            <img src={props.img}/>
        </div>
    );
}


const SectFourCard = (props) => {
    return (
        <div className="sect-four-card d-flex flex-column pt-4" align="center">
            <h3 className='fw-bold'>{props.kategori}</h3>
            <Link to={props.to}><Button className='border-0 px-3 py-1 fs-6 rounded-5' style={{background:'#B1907F'}}>Selengkapnya</Button></Link>
            <img src={props.img}/>
        </div>
    );
}

export default Homepage;

