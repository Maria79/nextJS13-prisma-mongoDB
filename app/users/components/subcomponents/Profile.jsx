'use client';

import { useState } from 'react';

export default function Profile({ userData }) {
	const [show, setShow] = useState(false);

	function handleOpen() {
		setShow(!show);
	}

	return (
		<div className='border-indigo-500/75 border-b-2 mt-1 p-2 shadow'>
			<h2
				className='underline underline-offset-2 py-3 cursor-pointer hover:font-bold'
				onClick={handleOpen}
			>
				Profile Details:
			</h2>
			{show && (
				<div>
					<div className='md:grid md:grid-cols-3  my-5'>
						<div className='flex items-center'>
							<label htmlFor='name'>Height:</label>
							<input
								className='text-sm font-semibold py-1 px-2  w-1/3'
								type='text'
								name='name'
								id='name'
								placeholder={userData.height}
								disabled
							/>
						</div>
						<div className='flex items-center'>
							<label htmlFor='name'>Weight:</label>
							<input
								className='text-sm font-semibold py-1 px-2  w-1/3'
								type='text'
								name='name'
								id='name'
								placeholder={`${userData.weight} kg`}
								disabled
							/>
						</div>
					</div>
					<hr />

					<div className='md:grid md:grid-cols-3  my-2'>
						<div className='flex items-center'>
							<label htmlFor='name'>Eye Color:</label>
							<input
								className='text-sm font-semibold py-1 px-2  w-1/3'
								type='text'
								name='name'
								id='name'
								placeholder={userData.eyeColor}
								disabled
							/>
						</div>
						<div className='flex items-center'>
							<label htmlFor='name'>Hair:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								id='name'
								placeholder={`${userData.hair.color}, ${userData.hair.color} `}
								disabled
							/>
						</div>
					</div>
					<hr />
					<div className=' my-2'>
						<label htmlFor='name'>Blood Group:</label>
						<input
							className='text-sm font-semibold py-1 px-2 w-1/5'
							type='text'
							name='name'
							id='name'
							placeholder={userData.bloodGroup}
							disabled
						/>
					</div>
				</div>
			)}
		</div>
	);
}
