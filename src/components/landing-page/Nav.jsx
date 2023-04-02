/** @format */

import React from 'react';

export default function Nav() {
	return (
		<nav className=' w-full flex py-4 px-8 justify-between items-center'>
			<div className=''>
				<img src='/logo.svg' alt='ludoge-logo' />
			</div>
			<ul className='text-white w-2/5 font-semibld items-center md:flex justify-between'>
				<li>
					<a className='md:block hidden' href='#home'>Home</a>
				</li>
				<li>
					<a className='md:block hidden' href='#about'>About</a>
				</li>
				<li>
					<a className='md:block hidden' href='#tokenomic'>Tokenomic</a>
				</li>
				<li>
					<button className='bg-[#734D08] text-sm md:text-lg rounded-md py-2 px-4 text-white'>
						Connect to wallet
					</button>
				</li>
			</ul>
		</nav>

	);
}
