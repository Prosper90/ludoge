import React from 'react';
import Home from './Home';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';
import Sponsors from './Sponsors';
import Footer from './Footer';
import Roadmap from './Roadmap';

function LandingPage() {
  return (
    <div className='text-sm md:text-md'>
      <Home/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Roadmap />
      <SectionFive/>
      <Sponsors />
      <Footer />
    </div>
  )
}

export default LandingPage