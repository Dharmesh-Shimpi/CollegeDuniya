import Ranking from '../Ranking/Ranking';

export default function Table({ data }) {
	return (
		<table className="w-full border-separate border-spacing-0">
			<thead className="bg-green-300">
				<tr className=" border-violet-500 ">
					<th className="border-r border-b border-t border-l border-violet-500 p-2">
						CD Rank
					</th>
					<th className="border-r border-b border-t border-violet-500 p-2">
						Colleges
					</th>
					<th className="border-r border-b border-t border-violet-500 p-2">
						Course Fees
					</th>
					<th className="border-r border-b border-t border-violet-500 p-2">
						Placement
					</th>
					<th className="border-r border-b border-t border-violet-500 p-2">
						User Reviews
					</th>
					<th className="border-r border-b border-t border-violet-500 p-2">
						Ranking
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr
						key={index}
						className="border-b border-gray-700 ">
						<td className="border-r border-l border-b border-gray-500 p-2 ">
							{item.cd_rank}
						</td>
						<td className="border-r border-b border-gray-500 p-2">
							<div>
								<span className="font-bold">{item.college.name}</span>
								<br />
								<span>{item.college.location}</span>

								<div className="my-4">
									<a
										href="/"
										className="text-red-500 px-5">
										Apply Now
									</a>
									<a
										href="/"
										className="text-green-700 px-5">
										Download Now
									</a>
									<a
										href="/"
										className="px-5">
										Add to Compare
									</a>
								</div>
							</div>
						</td>
						<td className="border-r border-b border-gray-500  p-2">
							<div className="font-bold my-2">{`₹ ${item.course_fees.amount}`} </div>
							<div className="text-xs">{item.course_fees.course}</div>
						</td>
						<td className="border-r border-b border-gray-500  p-2">
							<div className="font-bold py-1">{item.placement.average_package}</div>
							<div className="text-xs">Average Package</div>
							<div className="font-bold py-1">{item.placement.highest_package}</div>
							<div className="text-xs">highest Package</div>
						</td>
						<td className="border-r border-b border-gray-500  p-2">
							<div className="font-bold py-1">{item.user_reviews.rating} / 5</div>
							<div className="text-xs">
								Based on {item.user_reviews.reviews_count} User reviews
							</div>
							<div className=" rounded-xl bg-amber-100 w-fit px-2 my-2">
								{item.user_reviews.highlight}
							</div>
						</td>
						<td className="border-r border-b border-gray-500 p-2">
							<Ranking ranking={item.ranking} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
