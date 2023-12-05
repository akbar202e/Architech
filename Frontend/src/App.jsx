import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin'; import Daftar from './pages/Daftar'; 
import Homepage from './pages/Homepage'; import Tentang from './pages/Tentang'; 
import NotFound from './pages/NotFound'; import DesainArsitektur from './pages/DesainArsitektur'; 
import DesainInterior from './pages/DesainInterior'; import Pelaksanaan from './pages/Pelaksanaan'; 
import Portofolio from './pages/Portofolio'; import Layanan from './pages/Layanan'; 
import Dashboard from './components/Dashboard'; import NavbarC from './components/NavbarC'; 
import Dashboard2 from './pages/admin/Home'; import DataKategori from './pages/admin/DataKategori'; 
import Home from './pages/admin/Home'; import DataProduk from './pages/admin/DataProduk'; 
import DataCustomer from './pages/admin/DataCustomer'; import Transaksi from './pages/admin/Transaksi';
import DataAdmin from './pages/admin/DataAdmin';
import EditProfile from './pages/admin/EditProfile';
import Minimalis from './pages/Minimalis';
import Klasik from './pages/Klasik';
import Interior from './pages/Interior';
import Industrial from './pages/Industrial';
import Profile from './pages/Profile';
import UserEdit from './pages/EditProfile';
import Kontak from './pages/Kontak';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<Tentang/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/desain-arsi" element={<DesainArsitektur/>} />
          <Route path="/desain-inter" element={<DesainInterior/>} />
          <Route path="/pelaksanaan" element={<Pelaksanaan/>}/>
          <Route path="/portofolio" element={<Portofolio/>}/>
          <Route path="/minimalis" element={<Minimalis/>}/>
          <Route path="/klasik" element={<Klasik/>}/>
          <Route path="/industrial" element={<Industrial/>}/>
          <Route path="/interior" element={<Interior/>}/>
          <Route path="/layanan" element={<Layanan/>}/>
          <Route path="/kontak" element={<Kontak/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Daftar/>}/>
          <Route path="/profil" element={<Profile/>}/>
          <Route path="/edit" element={<UserEdit/>}/>
          //admin pages
          <Route path="/admin" element={<LoginAdmin/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/kategori" element={<DataKategori/>}/>
          <Route path="/produk" element={<DataProduk/>}/>
          <Route path="/customer" element={<DataCustomer/>}/>
          <Route path="/transaksi" element={<Transaksi/>}/>
          <Route path="/profil-admin" element={<DataAdmin/>}/>
          <Route path="/profil-edit" element={<EditProfile/>}/>

        </Routes>
      </Router>
  )
}

export default App
