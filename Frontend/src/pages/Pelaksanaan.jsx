import React from "react";
import NavbarC from "../components/NavbarC";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import rumah from "../assets/pelaksanaan/rectangle-471.png";
import hiasan1 from "../assets/pelaksanaan/minimalist-brown-tone-ink-background-wallpaper-image-for-free-do.png";
import hiasan2 from "../assets/pelaksanaan/minimalist-brown-tone-ink-background-wallpaper-image-for-free-do-1.png";
import "../assets/css/pelaksanaan.css";
import FooterC from "../components/FooterC";

const Pelaksanaan = () => {
  return (
    <div>
        <NavbarC />
    <div className="pelaksanaan">
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
                <br />
                2. Pembuatan desain rumah. jika klien belum memiliki gambar
                rencana arsitektur lengkap, kami 3. mewajibkan klien membuatnya
                terlebih dahulu.
              </p>
            </div>
          </div>
          <img className="img" alt="Rectangle" src={rumah} />
          <div className="rectangle-2" />
          <div className="text-wrapper-3">
            Prosedur Pemesanan Pelaksanaan Pembangunan
          </div>
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
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <p className="survei-lokasi-ke">
                3. Survei lokasi ke lahan yang akan dibangun untuk memastikan
                kesesuaian data.
                <br />
                <br />
                4. Pengajuan draft kontrak pelaksanaan pembangunan.
                <br />
                <br />
                5. Pembayaran tanda jadi jika draft kontrak pelaksanaan
                pembangunan dan penawaran yang kami ajukan disepakati,
              </p>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <p className="p">
                6. Pelaksanaan pembangunan setelah penandatanganan kontrak dan
                pembayaran tanda jadi.
                <br />
                <br />
                7. Penyerahan kunci dari pelaksana pembangunan setelah pekerjaan
                selesai 100% dan telah diterima dengan baik oleh pemilik
                pekerjaan (owner).
              </p>
            </div>
          </div>
          <div className="text-wrapper-5">
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
    </div>
    <FooterC/>
    </div>
  );
};
export default Pelaksanaan;