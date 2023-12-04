import React from "react";
import "../assets/css/editprofile.css";
import loginImg from "../assets/daftar/daftarImg.png";
import logo from "../assets/profile.png";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const profile = () => {
  return (
    <div>
      <NavbarC />
      <section id="editp">
        <div
          className="container d-flex px-5 justify-content-center"
          style={{
            width: "55rem",
            backgroundColor: "#735f4d",
            borderRadius: "50px",
          }}
          id="loginContainer"
        >
          <div className="loginImg2 d-flex flex-column justify-content-center">
            <img src={loginImg} alt="" />
          </div>
          <div className="loginCard2 p-4 text-center">
            <div className="loginForm2 d-flex flex-column gap-4 p-5">
              <img src={logo} />
              <input type="text" placeholder="" value={"Arief Hendra"} />
              <input
                type="text"
                placeholder=""
                value={"arief.hendra@gmail.com"}
              />
              <input type="password" placeholder="Password Baru" />
              <Link to="/profile">
                <Button
                  className="border-0 px-5 py-1 fs-5 rounded-5"
                  style={{ background: "#B1907F" }}
                >
                  Simpan
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

export default profile;
