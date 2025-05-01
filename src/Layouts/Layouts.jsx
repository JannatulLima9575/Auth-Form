import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Layouts = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layouts;