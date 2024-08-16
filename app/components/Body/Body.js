'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import { setName, fetchColleges } from '../../redux/college.redux';

export default function Body() {
	const dispatch = useDispatch();
	const { page, filters, sortOrder, name } = useSelector(
		(state) => state.colleges,
	);

	useEffect(() => {
		dispatch(fetchColleges({ page, filters, sortOrder, name }));
	}, [filters, sortOrder, name, page, dispatch]);

	const handleNameChange = (name) => {
		dispatch(setName(name));
	};

	return (
		<div className=" w-full">
			<Navbar onNameChange={handleNameChange} />
			<Main />
		</div>
	);
}
