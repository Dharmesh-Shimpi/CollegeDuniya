'use client';
import { useState } from 'react';
// import css from './Ranking.module.css';

export default function Ranking({ ranking }) {
	const [display, setDisplay] = useState(false);

	const handleClick = () => {
		setDisplay(!display);
	};

	return (
		<div>
			{ranking.length > 0 && (
				<div>
					<div className="font-bold p-1">{ranking[0].overall_rank}</div>
					<div className="text-sm p-1">{ranking[0].media_source}</div>
				</div>
			)}

			<div
				onClick={handleClick}
				className="cursor-pointer">
				<p className="text-green-500">Show All</p>
				{display && (
					<div className="fixed top-1/3 right-1/5 rounded-2xl bg-white p-5 shadow-2xl flex flex-col items-end">
						<p onClick={handleClick}>X</p>
						{ranking.map((query, index) => (
							<div key={index}>
								<div className="font-bold p-1">{query.overall_rank}</div>
								<div className="text-sm p-1">{query.media_source}</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
