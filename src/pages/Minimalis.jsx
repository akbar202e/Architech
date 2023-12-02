import HeroSlider from '../components/HeroSlider';
import { Button } from 'react-bootstrap';
import '../assets/css/minimalis.css'
import NavbarC from '../components/NavbarC';
import m1 from '../assets/portofolio/minimalis/m1.jpg';
import m2 from '../assets/portofolio/minimalis/m2.png';
import m3 from '../assets/portofolio/minimalis/m3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCube, faBed } from '@fortawesome/free-solid-svg-icons';
import FooterC from '../components/FooterC';

function Minimalis  () {
  const slides = [
    { url: m1, title: "Minimalis" },
    { url: m1, title: "Minimalis" },
    { url: m1, title: "Minimalis" },
  ];

  const slides2 = [
    { url: m2, title: "Minimalis" },
    { url: m2, title: "Minimalis" },
    { url: m2, title: "Minimalis" },
  ];

  const slides3 = [
    { url: m3, title: "Minimalis" },
    { url: m3, title: "Minimalis" },
    { url: m3, title: "Minimalis" },
  ];

  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "auto",
    marginBottom: "40px",
    borderRadius:"80px",
    overflow:"hidden"
  };
  return (
    <div>
        <NavbarC />
        <div className="box my-4">
          <div className="retangle" align='center'>
            <div className="content" style={containerStyle}>
              <HeroSlider slides={slides} parentWidth={500} />
            </div>
            <div className="content-logo text-light">
            <p className='m-0'><FontAwesomeIcon icon={faBed}/> 2 KM</p>
            <p className='m-0'><FontAwesomeIcon icon={faCube}/> 10M X 20M</p>
            <p className='m-0'><FontAwesomeIcon icon={faMapMarkerAlt}/> Kota Semarang</p>
            </div>
              <Button className='border-0 px-3 py-1 fs-6 rounded-5' style={{background:'#B1907F'}}>Selengkapnya</Button>
            </div>
        </div>
        <div className="box my-4">
            <div className="retangle" align='center'>
                <div className="content" style={containerStyle}>
                <HeroSlider slides={slides2} parentWidth={500} />
                </div>
              <div className="content-logo text-light">
              <p className='m-0'><FontAwesomeIcon icon={faBed}/> 2 KM</p>
              <p className='m-0'><FontAwesomeIcon icon={faCube}/> 10M X 20M</p>
              <p className='m-0'><FontAwesomeIcon icon={faMapMarkerAlt}/> Kota Semarang</p>
              </div>
                <Button className='border-0 px-3 py-1 fs-6 rounded-5' style={{background:'#B1907F'}}>Selengkapnya</Button>
                </div>
        </div>
        <div className="box my-4">
            <div className="retangle" align='center'>
                <div className="content" style={containerStyle}>
                <HeroSlider slides={slides3} parentWidth={500} />
                </div>
              <div className="content-logo text-light">
              <p className='m-0'><FontAwesomeIcon icon={faBed}/> 2 KM</p>
              <p className='m-0'><FontAwesomeIcon icon={faCube}/> 10M X 20M</p>
              <p className='m-0'><FontAwesomeIcon icon={faMapMarkerAlt}/> Kota Semarang</p>
              </div>
                <Button className='border-0 px-3 py-1 fs-6 rounded-5' style={{background:'#B1907F'}}>Selengkapnya</Button>
            </div>
        </div>
        <FooterC/>
    </div>
  )
};

export default Minimalis