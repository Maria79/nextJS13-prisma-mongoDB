'use client';

import { useState } from 'react';

const UserInfo = ({ userData, formattedDate, aged }) => {
	const [show, setShow] = useState(false);

	function handleOpen() {
		setShow(!show);
	}

	return (
		<div className='border-b-zinc-700 border-b-2 p-2 '>
			<h2
				className='mb-5 underline underline-offset-2 py-3'
				onClick={handleOpen}
			>
				User Personal Details:
			</h2>
			{show && (
				<div>
					<div className='md:grid md:grid-cols-3  my-5'>
						<div className=''>
							<label htmlFor='name'>Name:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-2/3'
								type='text'
								name='name'
								id='name'
								placeholder={userData.firstName}
								disabled
							/>
						</div>
						<div className=''>
							<label htmlFor='name'>Last Name:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-3/5'
								type='text'
								name='name'
								id='name'
								placeholder={userData.lastName}
								disabled
							/>
						</div>
						<div className=''>
							<label htmlFor='name'>Username:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-3/5'
								type='text'
								name='name'
								id='name'
								placeholder={userData.username}
								disabled
							/>
						</div>
					</div>
					<div className='md:grid md:grid-cols-3  my-2'>
						<div className=''>
							<label htmlFor='name'>Date of birth:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-2/3'
								type='text'
								name='name'
								id='name'
								placeholder={formattedDate}
								disabled
							/>
						</div>
						<div className=''>
							<label htmlFor='name'>Age:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-2/3'
								type='text'
								name='name'
								id='name'
								placeholder={aged}
								disabled
							/>
						</div>
						<div className=''>
							<label htmlFor='name'>Gender:</label>
							<input
								className='text-sm font-semibold py-1 px-2 w-2/3'
								type='text'
								name='name'
								id='name'
								placeholder={userData.gender}
								disabled
							/>
						</div>
					</div>

					<hr className='w-1/2' />

					<div className='md:grid md:grid-cols-2  my-2'>
						<div className=''>
							<label htmlFor='name'>Email:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								placeholder={userData.email}
								disabled
							/>
						</div>
						<div className=''>
							<label htmlFor='name'>Phone:</label>
							<input
								className='text-sm font-semibold py-1 px-2'
								type='text'
								name='name'
								placeholder={userData.phone}
								disabled
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default UserInfo;
