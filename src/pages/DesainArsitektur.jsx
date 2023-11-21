import React from "react";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import { Button, Image } from "react-bootstrap";

import rumah from "../assets/rectangle-472.png";
import hiasan1 from "../assets/minimalist-brown-tone-ink-background-wallpaper-image-for-free-do.png";
import hiasan2 from "../assets/minimalist-brown-tone-ink-background-wallpaper-image-for-free-do-1.png";
import { Link } from "react-router-dom";
import "../assets/css/DesainArsitektur.css";

const DesainArsitektur = () => {
  return (
    <div className="desain-arsitektur">
      <div className="div">
        <NavbarC />
        <div className="container">
          <div className="overlap">
            <div className="text-wrapper">Scandinavian</div>
            <div className="rectangle" />
            <div className="text-wrapper-2">
              Prosedur Pemesanan Desain Arsitektur
            </div>
            <div className="rectangle-2" />
            <div className="text-wrapper-3">Tahap Pertama</div>
            <div className="group">
              <div className="overlap-group">
                <p className="penyampaian-data-dan">
                  1. Penyampaian data dan informasi pada arsitek kami ke
                  WhatsApp : 081234574528.
                  <br />
                  2. Pengajuan kontrak pemsanan desain arsitektur.
                  <br />
                  3. Pembayaran tanda jadi.
                  <br />
                  4. Survey Lokasi.
                </p>
              </div>
            </div>
            <img className="img" alt="Rectangle" src={rumah} />
          </div>
          <div className="text-wrapper-4">Scandinavian</div>
          <div className="overlap-2">
            <div className="rectangle-3" />
            <img
              className="minimalist-brown"
              alt="Minimalist brown"
              src={hiasan1}
            />
            <img
              className="minimalist-brown-2"
              alt="Minimalist brown"
              src={hiasan2}
            />
            <div className="text-wrapper-5">Tahap Ketiga</div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <p className="pra-desain-atau">
                  1. Pra desain atau konsep rumah.
                  <br />
                  2. Pembayaran termin ke-1 , Setelah konsep disetujui makan
                  akan dibuat 3D.
                  <br />
                  3. Model 3D rendering desain rumah yang dapat direvisi sampai
                  3 kali.
                </p>
              </div>
            </div>
            <div className="text-wrapper-6">Tahap Kedua</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <p className="pembayaran-termin-ke">
                  1. Pembayaran termin ke-2 Setelah konsep denah dan 3D model
                  disetujui.
                  <br />
                  2. Pembuatan gambar kerja terdiri dari gambar detail
                  arsitektur.
                  <br />
                  3. Penyerahan hasil desain berupa softfile kepada klien
                </p>
              </div>
            </div>
            <div className="text-wrapper-7">
              <Link to="/about">
                <Button
                  className="shadow border-0 px-4 py-2 fs-4 rounded-5"
                  style={{ background: "#B1907F", marginLeft: "30px" }}
                >
                  Pesan Sekarang !
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* <FooterC /> */}
      </div>
    </div>
  );
};
export default DesainArsitektur;
