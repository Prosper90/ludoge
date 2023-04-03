import React from 'react'

export default function Sponsors() {
  return (

      <div className="w-100 h-[200px] flex flex-col gap-10">

        <h1 className='md:text-5xl pt-2 px-5 text-[#734D08] text-3xl font-bold text-center md:text-start'>
					Sponsors
				</h1>
        
        <div className="flex gap-[4.75rem] pt-5 px-7 w-full md:w-full  flex-nowrap whitespace-nowrap overflow-hidden overflow-x-scroll scrollbar-hide items-center h-auto scrollbar-hide">

          <a href='#' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorone.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>sponsor one</span>
          </a>

          <a href='#' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsortwo.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>sponsor one</span>
          </a>

          <a href='#' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorthree.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>sponsor one</span>
          </a>

          <a href='#' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorfour.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>sponsor one</span>
          </a>

          <a href='#' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorfive.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>sponsor one</span>
          </a>

          <a href='#' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorsix.png" alt="sponsor"  className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>sponsor one</span>
          </a>

        </div>    


      </div>

  )
}
