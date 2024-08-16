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
					<div className="font-bold">{ranking[0].overall_rank}</div>
					<div className="text-sm">{ranking[0].media_source}</div>
				</div>
			)}

			<div
				onClick={handleClick}
				className="cursor-pointer">
				<p className="text-green-500">Other...</p>
				{display && (
					<div>
						{ranking.map((query, index) => (
							<div key={index}>
								<div className="font-bold">{query.overall_rank}</div>
								<div className="text-sm">{query.media_source}</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
