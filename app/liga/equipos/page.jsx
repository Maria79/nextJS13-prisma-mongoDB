import React from 'react';

async function getAllE() {
	try {
		const res = await fetch(
			'http://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&format=json&req=teams&league=1'
		);

		if (!res.ok) {
			throw new Error('Faild to fetch');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

const EquiposPage = async () => {
	const equData = await getAllE();
	const tms = equData.team;

	return (
		<div>
			<div className='underline underline-offset-2 mb-4'>
				Estos son los equipos.
			</div>

			<table className='w-[450px]'>
				{tms.map((t, index) => (
					<tr key={index} className=''>
						<td>{t.fullName}</td>
						{/* <td>{t.visitor_abbr}</td> */}
					</tr>
				))}
			</table>
		</div>
	);
};

export default EquiposPage;

// key=c6196c01e7c1d93932590f42beec9ef8
// key=c6196c01e7c1d93932590f42beec9ef8
