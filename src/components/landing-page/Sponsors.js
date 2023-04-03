import React from 'react'

export default function Sponsors() {
  return (

      <div className="w-100 h-[200px] flex flex-col gap-10">

        <h1 className='md:text-5xl pt-2 px-5 text-[#734D08] text-3xl font-bold text-center md:text-start'>
					Partners
				</h1>
        
        <div className="flex gap-[4.75rem] pt-5 px-7 w-full md:w-full  flex-nowrap whitespace-nowrap overflow-hidden overflow-x-scroll scrollbar-hide items-center h-auto scrollbar-hide">

          <a href='https://www.pinksale.finance' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorone.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>Pinksale</span>
          </a>

          <a href='https://www.dexview.com' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsortwo.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>Dex view</span>
          </a>

          <a href='https://bscscan.com' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorthree.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>Bsc</span>
          </a>

          <a href='https://pancakeswap.finance' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorfour.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>pancakeswap</span>
          </a>

          <a href='https://poocoin.app' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorfive.png" alt="sponsor" className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>poocoin</span>
          </a>

          <a href='https://www.dextools.io' className='w-[10%] h-auto flex flex-col justify-center items-center' > 
            <img src="/sponsorsix.png" alt="sponsor"  className='w-[100%] md:w-[50%] h-auto' />
            <span className='font-thin text-sm'>Dex tools</span>
          </a>

        </div>    


      </div>

  )
}
