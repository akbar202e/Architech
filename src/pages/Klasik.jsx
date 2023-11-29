import React from 'react'

import HeroSlider from '../components/HeroSlider';

import { Button } from 'react-bootstrap';

import '../assets/css/Klasik.css'
import NavbarC from '../components/NavbarC';

function Klasik() {
    const slides = [
        { url: "https://s3-alpha-sig.figma.com/img/69dc/f29a/d1619903a8100ba617d7880723e298d7?Expires=1701648000&Signature=VqGfuLFniJeUyvQYozMWlbzrE1eS0LWJOMDbMa4p6xRGPSSR8isAR45y0NJTJgy1lJXs60H1IIB6AN0wmIAHRm1yXQaqKnFbUkQN1i9JfitlYf2zCzpeyUXw29BjeLnuuSHGwNq4jae2ero6HJdBTYarj2WYIycZn3y79pdOahRyQYd5RNpWK2E~0bOKVO61uSorLWQNnItYWAfI2-eg~P1csr3TtaYW70YCxlIdPyTWBLEtR5ltOz1-phLCOs82wweKCOpL~RvEjTEIaG9wr~CDE2w5hOtF0lHb1IdnsMIcShkiodgTGgFmrf4OD4uoYX9nGrOqvebLfhZ1QmdNgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", title: "Minimalis" },
        { url: "https://s3-alpha-sig.figma.com/img/69dc/f29a/d1619903a8100ba617d7880723e298d7?Expires=1701648000&Signature=VqGfuLFniJeUyvQYozMWlbzrE1eS0LWJOMDbMa4p6xRGPSSR8isAR45y0NJTJgy1lJXs60H1IIB6AN0wmIAHRm1yXQaqKnFbUkQN1i9JfitlYf2zCzpeyUXw29BjeLnuuSHGwNq4jae2ero6HJdBTYarj2WYIycZn3y79pdOahRyQYd5RNpWK2E~0bOKVO61uSorLWQNnItYWAfI2-eg~P1csr3TtaYW70YCxlIdPyTWBLEtR5ltOz1-phLCOs82wweKCOpL~RvEjTEIaG9wr~CDE2w5hOtF0lHb1IdnsMIcShkiodgTGgFmrf4OD4uoYX9nGrOqvebLfhZ1QmdNgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", title: "Minimalis" },
        { url: "https://s3-alpha-sig.figma.com/img/69dc/f29a/d1619903a8100ba617d7880723e298d7?Expires=1701648000&Signature=VqGfuLFniJeUyvQYozMWlbzrE1eS0LWJOMDbMa4p6xRGPSSR8isAR45y0NJTJgy1lJXs60H1IIB6AN0wmIAHRm1yXQaqKnFbUkQN1i9JfitlYf2zCzpeyUXw29BjeLnuuSHGwNq4jae2ero6HJdBTYarj2WYIycZn3y79pdOahRyQYd5RNpWK2E~0bOKVO61uSorLWQNnItYWAfI2-eg~P1csr3TtaYW70YCxlIdPyTWBLEtR5ltOz1-phLCOs82wweKCOpL~RvEjTEIaG9wr~CDE2w5hOtF0lHb1IdnsMIcShkiodgTGgFmrf4OD4uoYX9nGrOqvebLfhZ1QmdNgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", title: "Minimalis" },
    ];
    const containerStyle = {
        width: "500px",
        height: "280px",
        margin: "auto",
        marginBottom: "40px"
      };
      return (
        <div>
            <NavbarC />
            <div className="box">
              <div className="retangle">
                <div className="content" style={containerStyle}>
                  <HeroSlider slides={slides} parentWidth={500} />
                </div>
                <div className="content-logo">
                <i class="bi bi-arrows-angle-expand text-white"> 2KM</i>
                <i class="bi bi-bounding-box text-white"> 10M X 20M</i>
                <i class="bi bi-geo-alt-fill text-white"> Kota Semarang</i>
                </div>
                  <Button className='border-0 px-3 py-1 fs-6 rounded-5 display-flex justify-content-center' style={{background:'#B1907F', marginLeft: 'auto', marginRight: 'auto'}}>Selengkapnya</Button>
                </div>
          </div>
        </div>
      )
    };
export default Klasik