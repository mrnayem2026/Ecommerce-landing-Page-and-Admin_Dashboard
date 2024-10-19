import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import FourShopCard from '../components/FourShopCard/FourShopCard';
import AllProduct from '../components/AllProduct/AllProduct';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FourShopCard />
        <AllProduct />
        <Footer />
    </div>
  )
}

export default LandingPage;
