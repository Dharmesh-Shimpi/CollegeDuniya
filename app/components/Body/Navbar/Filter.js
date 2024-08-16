import { useDispatch } from 'react-redux';
import { setSortOrder } from '@/app/redux/college.redux';

export default function Filter({ filters, handleFilterChange }) {
	const dispatch = useDispatch();
	function handleSort(e) {
		dispatch(setSortOrder(e.target.value));
	}

	return (
		<nav className="flex flex-row p-5 justify-between">
			<div className="flex flex-row ">
				<div className="m-2 font-bold">Filter by :</div>
				<div className={`flex flex-row`}>
					<label className="my-2 mx-1">
						<input
							className="mx-1"
							type="radio"
							value="rating"
							checked={filters === 'rating'}
							onChange={handleFilterChange}
						/>
						Rating
					</label>
					<label className="my-2 mx-1">
						<input
							className="mx-1"
							type="radio"
							value="fees"
							checked={filters === 'fees'}
							onChange={handleFilterChange}
						/>
						Fees
					</label>
					<label className="my-2 mx-1">
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
	);
}
