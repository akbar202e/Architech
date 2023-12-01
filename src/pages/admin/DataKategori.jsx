import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTrash } from '@fortawesome/free-solid-svg-icons';
const KontenKategori = () => {
    return (
        <div className="container content2 p-5">
            <h2 className='text-light'>Data Kategori</h2>
            <hr/>
            <div className='content3 rounded-5 p-4 row overflow-hidden mb-5'>
            <div className="content3text d-flex flex-column justify-content-center px-3 text-center ">
                <Link align='end' to='#'><Button className='border-0 px-4 py-1 fs-6 rounded-5' style={{background:'#B1907F'}}>Tambah Data</Button></Link>
                <table className='fs-5 my-2'>
                  <thead>
                   <tr>
                     <th>No</th>
                     <th>Kategori</th>
                   </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Minimalis</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Klasik</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Industrial</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Interior</td>
                    </tr>
                  </tbody>
                </table>
                <div align='end'>
                <Button className='border-0 mx-2' style={{backgroundColor:'#B1907F'}}>
                    <FontAwesomeIcon className='' icon={faGear} size='lg'/>
                </Button>
                <Button className='border-0' style={{backgroundColor:'#B1907F'}}>
                    <FontAwesomeIcon className='mx-1' icon={faTrash} size='lg'/>
                </Button>
                </div>
            </div>
            </div>
        </div>
    );
}

const DataKategori = () => {
    return (
        <Dashboard isi={<KontenKategori/>}/>
    );
}

export default DataKategori;
