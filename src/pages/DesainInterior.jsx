import React from "react";
import NavbarC from "../components/NavbarC";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import interior from "../assets/desainInterior/rectangle-496.png";
import hiasan1 from "../assets/desainInterior/minimalist-brown-tone-ink-background-wallpaper-image-for-free-do.png";
import hiasan2 from "../assets/desainInterior/minimalist-brown-tone-ink-background-wallpaper-image-for-free-do-1.png";
import "../assets/css/DesainInterior.css";
import FooterC from "../components/FooterC";

const DesainInterior = () => {
  return (
    <div>
        <NavbarC />
    <div className="desain-interior">
      <div className="div">

        <div className="overlap">
          <div className="text-wrapper">Scandinavian</div>
          <div className="rectangle" />
          <div className="text-wrapper-2">Tahap Pertama</div>
          <div className="group">
            <div className="overlap-group">
              <p className="penyampaian-data-dan">
                1. Penyampaian data dan informasi pada arsitek kami ke WhatsApp
                : 081234574528.
                <br />
                2. Pengajuan kontrak pemsanan desain arsitektur.
                <br />
                3. Pembayaran tanda jadi.
                <br />
                4. Survey Lokasi.
              </p>
            </div>
          </div>
          <img className="img" alt="Rectangle" src={interior} />
        </div>
        <div className="text-wrapper-3">Scandinavian</div>
        <div className="overlap-2">
          <div className="rectangle-2" />
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
          <div className="text-wrapper-4">Tahap Ketiga</div>
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <p className="pra-desain-atau">
                1. Pra desain atau konsep rumah.
                <br />
                2. Pembayaran termin ke-1 , Setelah konsep disetujui makan akan
                dibuat 3D.
                <br />
                3. Model 3D rendering desain rumah yang dapat direvisi sampai 3
                kali.
              </p>
            </div>
          </div>
          <div className="text-wrapper-5">Tahap Kedua</div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <p className="pembayaran-termin-ke">
                1. Pembayaran termin ke-2 Setelah konsep denah dan 3D model
                disetujui.
                <br />
                2. Pembuatan gambar kerja terdiri dari gambar detail arsitektur.
                <br />
                3. Penyerahan hasil desain berupa softfile kepada klien
              </p>
            </div>
          </div>
          <div className="text-wrapper-6">
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
        <div className="group-2">
          <div className="overlap-3">
            <div className="text-wrapper-7">
              Prosedur Pemesanan Desain Interior
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterC/>
 </div>
  );
};

export default DesainInterior;