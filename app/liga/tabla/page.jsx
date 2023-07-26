async function getAllTable() {
	try {
		const res = await fetch(
			'https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=tables&league=1'
		);

		if (!res.ok) {
			throw new Error('Faild to fetch');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

const Tabla = async () => {
	const tablesData = await getAllTable();
	const tables = tablesData.table;

	return (
		<table className='w-[150px]'>
			<thead>
				<tr>
					<th scope='col' class='px-6 py-3'>
						Team
					</th>
					<th scope='col' class='px-6 py-3'>
						Points
					</th>
					<th scope='col' class='px-6 py-3'>
						Wins
					</th>
					<th scope='col' class='px-6 py-3'>
						Draws
					</th>
					<th scope='col' class='px-6 py-3'>
						Losses
					</th>
				</tr>
			</thead>
			<tbody>
				{tables.map((t, index) => (
					<tr key={index} className=''>
						<td scope='col' class='px-6 py-1 text-center'>
							{t.abbr}
						</td>
						<td scope='col' class='px-6 py-1 text-center'>
							{t.points}
						</td>
						<td scope='col' class='px-6 py-1 text-center'>
							{t.wins}
						</td>
						<td scope='col' class='px-6 py-1 text-center'>
							{t.draws}
						</td>
						<td scope='col' class='px-6 py-1 text-center'>
							{t.losses}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Tabla;
