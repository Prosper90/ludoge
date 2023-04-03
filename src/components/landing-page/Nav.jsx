/** @format */

import React, {useState} from 'react';

export default function Nav() {

	const [nav, setNav] = useState(false);

	return (
		<nav className={`${nav ? " bg-[#0C0F16] text-white flex flex-col gap-[100px] justify-start items-center fixed top-0 left-0 w-screen pt-[40px] pb-40" : " w-full flex py-4 px-8 justify-between items-center"}`}>
			 
			<div className=''>
				<img src='/logo.svg' alt='ludoge-logo' />
			</div>

			<button onClick={() => setNav(!true)} className='absolute md:hidden top-7 right-5 text-4xl'>&times;</button>
			
			<ul className={`${nav ? "text-white flex flex-col gap-10 justify-center items-center z-[99999] w-full" : "hidden text-white w-2/5 font-semibld items-center md:flex justify-between" }`}>
				<li>
					<a className='' href='#home'>Home</a>
				</li>
				<li>
					<a className='' href='#about'>About</a>
				</li>
				<li>
					<a className='' href='#roadmap'>Roadmap</a>
				</li>
				<li>
				<li>
					<a className='' href='#tokenomics'>Tokenomics</a>
				</li>
				</li>
			</ul>

			<button className={`p-1 flex items-center md:hidden border rounded-md border-[#ffffff1a] ${nav ? "hidden" : "block" }`}> <img src="/icons8-menu-rounded-50.png" alt="menu" className='h-6 w-12 ' onClick={() => setNav(true)} />  </button>
		</nav>

	);
}
