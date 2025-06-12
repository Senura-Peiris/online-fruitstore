import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import OurMenu from './Components/OurMenu';
import BrandInfo from './Components/BrandInfo';
import OnlineFruitstore from './Components/OnlineFruitStore';
import FreshFruits from './Components/FreshFruits';
import Footer from './Components/Footer';



function App() {

  return (
    
      <div>
        <Navbar/>
        <Hero/>
        <OurMenu/>
        <BrandInfo/>
        <OnlineFruitstore/>
        <FreshFruits/>
        <Footer/>
      </div>
  );
}

export default App
