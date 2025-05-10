import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Menu from '../components/Menu'
import Contact from '../components/contact'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
        <Hero/>
        <Pricing/>
      <Menu/>
      <Contact/>
      <Footer/>
        </div>
  )
}

export default LandingPage