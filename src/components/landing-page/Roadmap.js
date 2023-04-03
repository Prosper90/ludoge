import React from 'react'

export default function Roadmap() {
  return (
<section id='roadmap' className='bg-[#734D08] md:flex py-6 pb-5 flex md:flex-row flex-col-reverse h-[70dvh] md:h-screen md:justify-between justify-center items-center px-6 md:px-16'>
			<div className='w-full'>
				<h1 className='md:text-5xl mb-20 text-[#D9D9D9] text-3xl font-bold text-center'>
					Roadmap
				</h1>

                <div className="flex gap-10 px-5 w-full md:w-full  flex-nowrap whitespace-nowrap overflow-hidden overflow-x-scroll scrollbar-hide items-center h-auto scrollbar-hide">

                    <div className="border border-[#FFA400] p-5 hover:drop-shadow-xl rounded-[5px] text-sm w-[300px] h-[300px] md:h-auto text-white flex flex-col justify-center gap-7 md:block">
                        <p className='md:text-base text-sm font-sans font-normal'> -Launch Website </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -Open Telegram Group </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -SocialsPresale / Marketing Begins </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -Presale Pinksale </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -Prelaunch Marketing Begins </p>
                    </div> 


                    <div className="border border-[#FFA400] p-5 hover:drop-shadow-xl rounded-[5px] text-sm w-[300px] h-[300px] md:h-auto text-white flex flex-col justify-center gap-7 md:block">
                        <p className='md:text-base text-sm font-sans font-normal'> -Launch on pancake swap </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -Post Launch partnership </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -CMC Listing  </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -CG listing </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -launch LuDoge game </p>
                    </div> 


                    <div className="border border-[#FFA400] p-5 hover:drop-shadow-xl rounded-[5px] text-sm w-[300px] h-[300px] md:h-auto text-white flex flex-col justify-start pt-10 gap-7 md:block">
                        <p className='md:text-base text-sm font-sans font-normal'> -Community events and giveaways </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -Twitter and Youtube Marketing Begins </p>
                        <p className='md:text-base text-sm font-sans font-normal'> -More Partnerships </p>
                    </div>



                </div>

         


			</div>
		</section>
  )
}
