import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div className="homebg bg-cover md:h-screen h-[100dvh]">
    <Nav/>
    <main className="  flex gap-11 flex-col-reverse md:flex-row items-center justify-center md:justify-between md:px-16 px-6">
      <div className="text-white">
         <h1 className='md:text-5xl text-3xl font-bold' style={{lineHeight:'1.2'}}>LuDoge - Journey to the <br /> Moon andBeyond</h1>
         <div className="mt-4">
          <button className='bg-[#734D08] rounded-md py-2 border border-[#734D08] hover:bg-transparent hover:text-[#734D08] mr-4 px-4 text-white'>Get Started</button>
         <button className='border text-[#734D08] hover:bg-[#734D08] hover:text-white border-[#734D08] rounded-md py-2 px-4 '>Learn more</button>
         </div>
      </div>
      <img className='md:w-2/5' src="/iconic 2d isometric illustration of green cash bil (1) 1.svg" alt="" />
    </main>
    </div>
  )
}

export default Home