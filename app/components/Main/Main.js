// components/Main.js
'use client';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading/loading';
import Table from './table';
import Navbar from '../Navbar/Navbar';

export default function Main() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [filters, setFilters] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');
	const [name, setName] = useState('');
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchData();
	}, [filters, sortOrder, name, page]);

	const fetchData = async () => {
		setStatus('loading');
		try {
			const response = await fetch(
				`/api/college?page=${page}&filters=${
					filters || ''
				}&sortOrder=${sortOrder}&name=${name}`,
			);
			const result = await response.json();
			if (page === 1) {
				setData(result);
			} else {
				setData((prevData) => [...prevData, ...result]);
			}
			setHasMore(result.length > 0);
			setStatus('succeeded');
		} catch (err) {
			setError('Failed to fetch data');
			setStatus('failed');
		}
	};

	const loadMoreData = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const handleFilterChange = (e) => {
		setFilters(e.target.value);
		setPage(1);
	};

	const handleSort = (e) => {
		setSortOrder(e.target.value);
		setPage(1);
	};

	const handleNameChange = (name) => {
		setName(name);
		setPage(1);
	};

	return (
		<div className=" w-full">
			<Navbar onNameChange={handleNameChange} />
			<div
				style={{ backgroundColor: '#f3f7fa' }}
				className="w-full flex items-center justify-start flex-col">
				<div className="m-10 px-10 w-fit relative top-16 z-0 bg-white rounded-3xl">
					<nav className="flex flex-row p-5 justify-between">
						<div className="flex flex-row ">
							<div className="m-2 font-bold">Filter by :</div>
							<div className={`flex flex-row`}>
								<label className="m-2">
									<input
										className="mx-1"
										type="radio"
										value="rating"
										checked={filters === 'rating'}
										onChange={handleFilterChange}
									/>
									Rating
								</label>

								<label className="m-2">
									<input
										className="mx-1"
										type="radio"
										value="fees"
										checked={filters === 'fees'}
										onChange={handleFilterChange}
									/>
									Fees
								</label>
								<label className="m-2">
									<input
										className="mx-1"
										type="radio"
										value="user_review_rating"
										checked={filters === 'user_review_rating'}
										onChange={handleFilterChange}
									/>
									User Rating
								</label>
							</div>
						</div>
						<div className="flex flex-row">
							<div className="m-2 font-bold">Sort by :</div>
							<select onChange={handleSort}>
								<option value="asc">Ascending</option>
								<option value="desc">Descending</option>
							</select>
						</div>
					</nav>
					<div className="flex justify-center items-center">
						{status === 'loading' && <Loading />}
					</div>

					{data.length > 0 && (
						<InfiniteScroll
							dataLength={data.length}
							next={loadMoreData}
							hasMore={hasMore}
							endMessage={<p>No more data to load</p>}>
							<Table data={data} />
						</InfiniteScroll>
					)}
					{error && <div>{error}</div>}
				</div>
			</div>
		</div>
	);
}
