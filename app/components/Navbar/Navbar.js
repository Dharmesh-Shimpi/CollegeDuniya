'use client';

import React from 'react';
import css from './Navbar.module.css';

function Navbar({ onNameChange }) {
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
						onChange={(e) => onNameChange(e.target.value)}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
