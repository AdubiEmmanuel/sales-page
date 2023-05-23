import React from 'react'
import Hero from '../pages/Hero';
import Navbar from '../pages/Utilities/Navbar';
import Footer from '../pages/Utilities/Footer';
import { Outlet } from 'react-router-dom';

export default function Guest() {
    return (
      <div>
        <Navbar />
        <Hero/>
            <Outlet/>
        <Footer />
      </div>
    );
}
