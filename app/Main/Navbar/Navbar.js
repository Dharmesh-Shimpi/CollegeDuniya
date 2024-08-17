'use client';

import React from 'react';
import css from './Navbar.module.css';
import { setName } from '@/app/redux/college.redux';

function Navbar() {
	const handleNameChange = (name) => {
		dispatch(setName(name));
	};

	return (
		<nav className="fixed flex justify-center w-screen bg-white z-10">
			<div className="py-3 w-5/6 flex container flex-row justify-between items-center">
				<div className={` w-fit h-fit ${css.text} ${css.customGradient}`}>
					Collegeduniya.com
				</div>
				<div className="flex flex-row m-2">
					<p className="m-2 font-bold">Search :</p>
					<input
						type="text"
						placeholder="Enter college name here"
						onChange={(e) => handleNameChange(e.target.value)}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
