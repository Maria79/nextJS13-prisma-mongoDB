import React from 'react';

export default function Jornadas({ ligas }) {
	// const roundMatches = ligas.filter((match) => match.RoundNumber === 1);
	const sortedMatches = ligas
		.filter((match) => match.RoundNumber === 1)
		.slice()
		.sort((a, b) => a.MatchNumber - b.MatchNumber);

	return (
		<div className='flex justify-center'>
			<table class='table-auto w-[350px] border'>
				<thead>
					<tr>
						{/* <th></th> */}
						<th>Home</th>
						<th>Away</th>
					</tr>
				</thead>
				<tbody>
					{sortedMatches.map((liga, index) => (
						<tr key={index}>
							{/* <td>{liga.MatchNumber}</td> */}
							<td className='pl-8'>{liga.HomeTeam}</td>
							<td className='pl-8'>{liga.AwayTeam}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
