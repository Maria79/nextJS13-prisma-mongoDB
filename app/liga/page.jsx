import Image from 'next/image';

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
			<div className='flex gap-x-4'>
				{tms.map((t, index) => (
					<div key={index}>
						<Image
							src={t.shield}
							alt=''
							width={28}
							height={28}
							title={t.nameShow}
							className='cursor-pointer '
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default EquiposPage;
