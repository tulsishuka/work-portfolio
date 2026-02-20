import React from 'react'
import Hero from './components/Sections/Hero'
import PortfolioSection from './components/Sections/PortfolioSection'
import DeviceShowcase from './components/Sections/DeviceShowcase'
import About from './components/Sections/About'
import BentoPage from './components/Sections/la'
import Testimonials from './components/Sections/Testimonials'
import Brew from './components/Sections/brew'


const page = () => {
  return (
    <>
    <Hero/>
    <DeviceShowcase/>
    <About/>
    <PortfolioSection/>
<BentoPage/>
<Testimonials/>
<Brew/>
    </>
  )
}

export default page
