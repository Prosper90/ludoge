/** @format */

import React from 'react';

export default function SectionThree() {
	return (
		<section className='bg-[#734D08] gap-16  md:flex py-6 pb-10 flex md:flex-row flex-col h-[100dvh] md:h-screen md:justify-between justify-center items-center px-6 md:px-16'>
			<img
            className='md:w-2/5'
				src='/3d isometric style 1 (1).svg'
				alt='illustration'
			/>
			<div className=''>
				<h1 className='md:text-5xl mb-4 text-white text-3xl font-bold'>
					Why Invest in LuDoge?{' '}
				</h1>
				<p className=' text-white text-sm md:text-xl'>
					If you're looking for a memecoin with significant
					growth potential, then LuDoge is the perfect
					choice. With its innovative deflationary
					tokenomics and a growing community, LuDoge is
					poised for success. As more investors join the
					journey to the moon, the value of LuDoge tokens
					will only continue to rise.
				</p>
			</div>
		</section>
	);
}
