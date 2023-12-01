import React from "react"
import { Link } from "react-router-dom"
import logo from '../assets/ArchitechLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const FooterC = () => <footer className="page-footer pt-5 px-5" style={{ backgroundColor: '#735F4D'}}>
    <div className="container-fluid text-md-left px-5">
        <div className="footerFlex text-light">
            <div className="footerContent" align='center'>
                <img src={logo} alt="" />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="footerContent ">
                <h5 className="text-uppercase">LAYANAN</h5>
                <ul className="list-unstyled mt-3">
                    <li><Link to='/about' className="text-decoration-none text-light">Arsitek</Link></li>
                    <li><Link to='/about' className="text-decoration-none text-light">Kontaktor</Link></li>
                </ul>
            </div>

            <div className="footerContent ">
                <h5 className="text-uppercase">PORTOFOLIO</h5>
                <ul className="list-unstyled mt-3">
                    <li><Link to='/about' className="text-decoration-none text-light">Minimalis</Link></li>
                    <li><Link to='/about' className="text-decoration-none text-light">Klasik</Link></li>
                    <li><Link to='/about' className="text-decoration-none text-light">Industrial</Link></li>
                    <li><Link to='/about' className="text-decoration-none text-light">Interior</Link></li>
                </ul>
            </div>
            <div className="footerContent ">
                <h5 className="text-uppercase">TENTANG KAMI</h5>
                <ul className="list-unstyled mt-3">
                    <li><Link to='/about' className="text-decoration-none text-light">Tentang Kami</Link></li>
                    <li><Link to='/about' className="text-decoration-none text-light">Kontak</Link></li>
                </ul>
            </div>
            <div className="footerContent  text-center">
                <h5 className="text-uppercase">HUBUNGI KAMI</h5>
                <ul className="mt-4 list-unstyled text-light d-flex justify-content-center">
                    <li>
                        <Link to='#' className="text-decoration-none text-light">
                            <FontAwesomeIcon className='mx-3' icon={faFacebook} flip size="2xl"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-decoration-none text-light">
                            <FontAwesomeIcon className='mx-3' icon={faInstagram} flip size="2xl"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-decoration-none text-light">
                            <FontAwesomeIcon className='mx-3' icon={faWhatsapp} flip size="2xl"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-light">Hak Cipta © 2023-
        <Link to='/' className="text-decoration-none text-light">Architech.com</Link>
    </div>

</footer>

export default FooterC