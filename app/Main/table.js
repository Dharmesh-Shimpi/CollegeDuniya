import Ranking from './Ranking/Ranking';

export default function Table({ data }) {
	return (
		<table className="table-auto w-full">
			<thead className="bg-green-300">
				<tr className="border-violet-500">
					<th className="border p-2 w-1/12">CD Rank</th>
					<th className="border p-2 w-2/12">Colleges</th>
					<th className="border p-2 w-1/12">Course Fees</th>
					<th className="border p-2 w-1/12">Placement</th>
					<th className="border p-2 w-1/12">User Reviews</th>
					<th className="border p-2 w-1/12">Ranking</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr
						key={index}
						className="border-b border-gray-700">
						<td className="border p-2 text-center">{item.cd_rank}</td>
						<td className="border p-2">
							<div className=" min-w-[450px] flex flex-col">
								<p className=" text-lg font-semibold">{item.college.name}</p>
								<span>{item.college.location}</span>
								<div className="flex space-x-2 my-4 justify-evenly">
									<a
										href="/"
										className="text-red-700">
										Apply Now
									</a>
									<a
										href="/"
										className="text-green-700">
										Download Now
									</a>
									<a href="/">Add to Compare</a>
								</div>
							</div>
						</td>
						<td className="border p-2 text-center min-w-28">
							<div className="font-bold">{`₹ ${item.course_fees.amount}`}</div>
							<div className="text-xs p-1">{item.course_fees.course}</div>
						</td>
						<td className="border p-2 text-center">
							<div className="font-bold">{item.placement.average_package}</div>
							<div className="text-xs pb-2">Average Package</div>
							<div className="font-bold ">{item.placement.highest_package}</div>
							<div className="text-xs">Highest Package</div>
						</td>
						<td className="border p-2 text-center">
							<div className="font-bold">{item.user_reviews.rating} / 5</div>
							<div className="text-xs">
								Based on {item.user_reviews.reviews_count} reviews
							</div>
							<div className="rounded-xl bg-amber-100 px-2 mt-2 inline-block">
								{item.user_reviews.highlight}
							</div>
						</td>
						<td className="border p-2 text-center">
							<Ranking ranking={item.ranking} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
