'use client';

import { useState } from 'react';

export default function UserWork({ userData }) {
	const [show, setShow] = useState(false);

	function handleOpen() {
		setShow(!show);
	}

	return (
		<div className='border-b-zinc-700 border-b-2 mt-1 p-2 '>
			<h2 className='underline underline-offset-2 py-3' onClick={handleOpen}>
				{' '}
				Work Info:
			</h2>
			{show && (
				<div>
					<div className=' my-5'>
						<div className='my-1'>
							<label htmlFor='name'>Company Name:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-1/2'
								type='text'
								name='name'
								placeholder={userData.company.name}
								disabled
							/>
						</div>
						<div className='my-1'>
							<label htmlFor='name'>Position Title:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								placeholder={userData.company.title}
								disabled
							/>
						</div>
						<div className='my-1'>
							<label htmlFor='name'>Department:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								placeholder={userData.company.department}
								disabled
							/>
						</div>
					</div>
					<div className='md:flex my-2'>
						<div className='flex items-center'>
							<label htmlFor='name'>Address:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								placeholder={userData.company.address.address}
								disabled
							/>
						</div>
						<div className='flex items-center'>
							<label htmlFor='name'>City:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								placeholder={userData.company.address.city}
								disabled
							/>
						</div>
					</div>
					<div className='flex items-center'>
						<label htmlFor='name'>Sate: </label>
						<input
							className='text-sm font-semibold py-1 px-2'
							type='text'
							name='name'
							placeholder={userData.company.address.state}
							disabled
						/>
					</div>
				</div>
			)}
		</div>
	);
}

// "company": {
//     "address": {
//       "address": "629 Debbie Drive",
//       "city": "Nashville",
//       "coordinates": {
//         "lat": 36.208114,
//         "lng": -86.58621199999999
//       },
//       "postalCode": "37076",
//       "state": "TN"
//     },
//     "department": "Marketing",
//     "name": "Blanda-O'Keefe",
//     "title": "Help Desk Operator"
//   },
