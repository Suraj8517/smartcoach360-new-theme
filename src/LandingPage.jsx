import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/404'
import AboutUs from './pages/Aboutus';
import Footer from './components/Footer';
import SolutionSection from './components/Solutions/Solutions';
import Integration from './pages/Integration';
export default function LandingPage() {
  return (
    <>
     <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="solutions" element={<SolutionSection/>}/>
        <Route path="integrations" element={<Integration/>}/>

    </Routes>
    </main>
    <Footer/>
    </Router>
    </>

  )
}
