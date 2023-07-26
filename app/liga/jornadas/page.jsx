async function getAllMatches() {
	try {
		const res = await fetch(
			'https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchs&league=1&year=2022'
		);

		if (!res.ok) {
			throw new Error('Faild to fetch');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

const Matches = async () => {
	const equiposData = await getAllMatches();
	const teams = equiposData.match;

	const uniqueTeamAbbrs = [...new Set(teams.map((t) => t.competition_name))];

	return (
		<div>
			<div>
				<div className='underline underline-offset-2'>{uniqueTeamAbbrs}</div>
			</div>
			<table className='w-[450px]'>
				{teams.map((t, index) => (
					<tr key={index} className=''>
						<td>{t.local_abbr}</td>
						<td>{t.visitor_abbr}</td>
						{/* <td>{t.date}</td> */}
						<td>{t.local_goals}</td>
						<td>{t.visitor_goals}</td>
						<td>{t.result}</td>
					</tr>
				))}
			</table>
		</div>
	);
};
export default Matches;
