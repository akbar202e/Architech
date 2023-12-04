import React from "react";
import "../assets/css/contact.css";
import loginImg from "../assets/login/kontak.png";
import logo from "../assets/ArchitechLogo.png";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <NavbarC />
      <section id="contact">
        <div
          className="container d-flex px-5 justify-content-center"
          style={{
            width: "60rem",
            backgroundColor: "#735f4d",
            borderRadius: "50px",
          }}
          id="loginContainer"
        >
          <div className="loginImg3 d-flex flex-column justify-content-center">
            <img src={loginImg} alt="" />
          </div>
          <div className="loginCard3 p-4 text-center">
            <div className="loginForm3 d-flex flex-column gap-4 p-4">
              <img src={logo} />
              <h2 className="text-light fw-bold">Hubungi Kami</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <textarea className="form-control" name="" placeholder="Pesan" />
              <Link to="/">
                <Button
                  className="submit border-0 px-5 py-1 fs-5 rounded-5"
                  style={{ background: "#B1907F" }}
                >
                  Kirim
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterC />
    </div>
  );
};

export default Login;
