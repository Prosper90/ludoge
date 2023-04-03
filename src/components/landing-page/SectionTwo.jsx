import React from 'react'

export default function SectionTwo() {
  return (
    <section className='bg-[#D9D9D9] md:flex py-6 pb-10 flex md:flex-row flex-col-reverse h-[100dvh] md:h-screen md:justify-between justify-center items-center px-6 md:px-16'>
			<div className=''>
				<h1 className='md:text-5xl mb-4 text-[#734D08] text-3xl font-bold'>
					What is LuDoge?
				</h1>
				<p className='md:w-[40vw] text-[#734D08] text-sm md:text-xl'>
					LuDgoe is a deflationary memecoin built on the BinanceSmart Chain (BSC) that aims to provide its investors with unprecedented growth potential. It boasts a strong community of early adopters who are passionate about the project's vision and potential. 
				</p>
			</div>
			<img
				className='md:w-2/5'
				src='/Beautiful yellow dices game 2.svg'
				alt='illustration'
			/>
		</section>
  )
}
