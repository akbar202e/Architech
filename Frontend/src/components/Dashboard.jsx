import React from 'react';
import '../assets/css/dashboard.css'
import home from '../assets/dashboard/home.png';
import edit from '../assets/dashboard/edit.png';
import kategori from '../assets/dashboard/kategori.png';
import admin from '../assets/dashboard/admin.png';
import produk from '../assets/dashboard/produk.png';
import customer from '../assets/dashboard/customer.png';
import transaction from '../assets/dashboard/transaction.png';
import logout from '../assets/dashboard/logout.png';
import profil from '../assets/dashboard/profilePict.png'
import { Link, Route, Router, Routes } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    };
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
        <div id='layout'>
        <div id='left' className={leftOpen}>
          <div className='icon' onClick={this.toggleSidebar}>
            &equiv;
          </div>
          <div className={`sidebar ${leftOpen}`}>
            <div className='header'>
              <h3 className='title'>Architech</h3>
            </div>
            <div className='content'>
              <div className="barProfile d-flex pb-3 mb-3">
                <span>
                  <img src={profil} alt="" />
                </span>
                <p>Erwin Smith</p>
              </div>              
              <BarSelect to='/dashboard' img={home} desc='Home'/>
              <BarSelect to='/kategori' img={kategori} desc='Data Kategori'/>
              <BarSelect to='/produk' img={produk} desc='Data Produk'/>
              <BarSelect to='/customer' img={customer} desc='Data Customer'/>
              <BarSelect to='/transaksi' img={transaction} desc='Transaksi'/>
              <BarSelect to='/profil-admin' img={admin} desc='Data Admin'/>
              <BarSelect to='/profil-edit' img={edit} desc='Edit Profil'/>
              <BarSelect to='/admin' img={logout} desc='Logout'/>
            </div>
          </div>
        </div>

        <div id='main'>
          <div className='header'>
            <h3
              className={`
                title
                ${'left-' + leftOpen}
                ${'right-' + rightOpen}
              `}
            >
              Admin
            </h3>
          </div>
          <div className='content'>
            {this.props.isi}
          </div>
        </div>
      </div>
    );
  }
}


const BarSelect = (props) => {
  return (
    <Link to={props.to} style={{textDecoration:'none'}}>
    <div className="barSelect d-flex my-1">
    <span>
    <img src={props.img} style={{width:'50px'}}/>
    </span>
    <p className='text-light mx-2'>{props.desc}</p>
    </div>
    </Link>
  );
}

export default Dashboard;
