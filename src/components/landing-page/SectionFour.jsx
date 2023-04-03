/** @format */

import React from 'react';

export default function SectionFour() {
	return (
		<section className='bg-[#D9D9D9] md:flex py-6 pb-10 flex md:flex-row flex-col-reverse h-[100dvh] md:h-screen md:justify-between justify-center items-center px-6 md:px-16'>
			<div className=''>
				<h1 className='md:text-5xl mb-4 text-[#734D08] text-3xl font-bold'>
					What we Provide
				</h1>
				<p className='md:w-[40vw] text-[#734D08] text-sm md:text-xl'>
					Ludoge token is a deflationary meme token that
					leverages the power of the BSC. The total supply
					of LuDoge is 1,000,000,000 tokens, of which 50%
					will be burned to ensure scarcity and increase the
					value of the remaining tokens. The remaining 50%
					will be distributed among the community through
					various mechanisms, including liquidity provision,
					and airdrops.
				</p>
			</div>
			<img
				className='md:w-2/5'
				src='/a 2D icon  of smiley face emoji pointing a finger  1.svg'
				alt='illustration'
			/>
		</section>
	);
}
