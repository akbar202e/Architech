import React from "react";
import "../assets/css/profile.css";
import loginImg from "../assets/login/loginImg.png";
import FooterC from "../components/FooterC";
import logo from "../assets/profile.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavbarCLogin from "../components/NavbarCLogin";

const Profile = () => {
  return (
    <div>
      <NavbarCLogin/>
      <section id="profile">
        <div
          className="container d-flex px-5 justify-content-center"
          style={{
            width: "55rem",
            backgroundColor: "#735f4d",
            borderRadius: "50px",
          }}
          id="loginContainer"
        >
          <div className="loginImg1 d-flex flex-column justify-content-center">
            <img src={loginImg} alt="" />
          </div>
          <div className="loginCard1 p-4 text-center">
            <div className="loginForm1 d-flex flex-column gap-4 p-5">
              <img src={logo} />
              <input type="text" placeholder="" value={"Arief Hendra"} />
              <input
                type="text"
                placeholder=""
                value={"arief.hendra@gmail.com"}
              />
              <input type="text" placeholder="" value={"081234578934"} />
            </div>
          </div>
        </div>
      </section>
      <FooterC />
    </div>
  );
};

export default Profile;