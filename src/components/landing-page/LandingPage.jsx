import React, {useState, useEffect} from 'react';
import Home from './Home';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';
import Sponsors from './Sponsors';
import Footer from './Footer';
import Roadmap from './Roadmap';
import MoonLoader from "react-spinners/MoonLoader";
import Fade from 'react-reveal/Fade';

function LandingPage() {
  
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 5000);
  }, [pageLoading])
  

  return (
    <div className='text-sm md:text-md'>
      {
        !pageLoading ?
          <Fade left>
              <Home/>
              <SectionOne/>
              <SectionTwo/>
              <SectionThree/>
              <SectionFour/>
              <Roadmap />
              <SectionFive/>
              <Sponsors />
              <Footer />
          </Fade>
        :
      <div className='absolute flex justify-center items-center p-4 w-[100%] h-[100%] bg-[#0C0F16]' >
        <MoonLoader
             loading={pageLoading}
             color={`#734D08`}
             size={70}
        />
     </div>
      }
    </div>
  )
}

export default LandingPage