import React from 'react'

function SectionFive() {
  return (
    <section id="Tax" className='bg-[#D9D9D9] gap-16 py-6 pb-10 md:h-auto  px-6 md:px-16 text-xs md:text-sm'>
        <h1 className='text-center md:text-5xl mb-9 md:mb-20 text-[#734D08] text-3xl font-bold py-16 flex flex-col justify-center items-center relative'>
          <img src="/Tax.png"  alt="tax" className='absolute w-[20%] md:w-[10%] h-auto top-[45px]' />
        </h1>

        <div className="flex flex-col justify-start items-start md:items-center gap-5">
          
          <div className=""><span className='text-[#734D08] text-3xl font-bold'>Tax</span> 5%</div>

          <div className=""><span className='text-[#734D08] text-3xl font-bold'>Marketing</span> 3%</div>

          <div className=""><span className='text-[#734D08] text-3xl font-bold'>Doge rewards</span> 2%</div>

        </div>

			
		</section>
  )
}

export default SectionFive