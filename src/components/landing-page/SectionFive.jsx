import React from 'react'

function SectionFive() {
  return (
    <section className='bg-[#734D08] gap-16 py-6 pb-10 md:h-auto  px-6 md:px-16'>
        <h1 className='text-center md:text-5xl mb-4 text-[#fff] text-3xl font-bold py-16'>OUR TOKENOMICS</h1>

        <div className="w-4/5 m-auto">  
          <img src="/tokenomicsill.svg" alt="" />
        </div>
        <div className="flex justify-end">
          <div className="">
            <h4 className='md:text-xl mb-4 text-[#fff] text-lg mt-8 font-bold'>Contact Us</h4>

            <div className="flex gap-10">  
               <div className="text-[#fff] flex justify-center items-center flex-col  text-base">
                 <img className='md:w-auto w-10' src="/Vector (33).svg" alt="" />
                 <span>Twitter</span>
               </div>
                <div className="text-[#fff] flex justify-center items-center flex-col text-base">
                 <img className='md:w-auto w-10' src="/Vector (34).svg" alt="" />
                 <span>Telegram</span>
               </div>
                <div className="text-[#fff] flex justify-center items-center flex-col text-base">
                 <img className='md:w-auto w-10' src="/Vector (35).svg" alt="" />
                 <span>Instagram</span>
               </div>
            </div>
          </div>
        </div>

         <p className='text-center text-white mt-10'>Copyright © 2023 Lugode, All rights reserved. Powered by @lugode</p>
			
		</section>
  )
}

export default SectionFive