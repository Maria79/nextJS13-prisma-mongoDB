import React from 'react';

export default function Teams({ ligas }) {
	const roundMatches = ligas.filter((match) => match.RoundNumber === 1);

	const uniqueHomeTeams = [
		...new Set(roundMatches.map((liga) => liga.HomeTeam)),
	];
	const uniqueAwayTeam = [
		...new Set(roundMatches.map((liga) => liga.AwayTeam)),
	];
	return (
		<div className='flex justify-between flex-wrap pb-5'>
			{uniqueAwayTeam.map((away, index) => (
				<div key={index}>
					<div>{away}, </div>
				</div>
			))}
			{uniqueHomeTeams.map((home, index) => (
				<div key={index}>
					<div>{home}, </div>
				</div>
			))}
		</div>
	);
}
