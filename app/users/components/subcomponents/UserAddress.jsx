'use client';

import { useState } from 'react';

export default function UserAddress({ userData }) {
	const [show, setShow] = useState(false);

	function handleOpen() {
		setShow(!show);
	}

	return (
		<div className='border-b-zinc-700 border-b-2 mt-1 p-2'>
			<h2 className='underline underline-offset-2 py-3' onClick={handleOpen}>
				User Address:
			</h2>
			{show && (
				<div className='md:grid md:grid-cols-3  my-5'>
					<div className='flex items-center'>
						<label htmlFor='name'>Street:</label>
						<input
							className='text-sm font-semibold py-1 px-2'
							type='text'
							name='name'
							placeholder={userData.address.address}
							disabled
						/>
					</div>
					<div className='flex items-center'>
						<label htmlFor='name'>City:</label>
						<input
							className='text-sm font-semibold py-1 px-2'
							type='text'
							name='name'
							placeholder={userData.address.city}
							disabled
						/>
					</div>
					<div className='flex items-center'>
						<label htmlFor='name'>ZIP Code:</label>
						<input
							className='text-sm font-semibold py-1 px-2 w-1/3'
							type='text'
							name='name'
							placeholder={userData.address.postalCode}
							disabled
						/>
					</div>
					<div className='flex items-center'>
						<label htmlFor='name'>State:</label>
						<input
							className='text-sm font-semibold py-1 px-2'
							type='text'
							name='name'
							placeholder={userData.address.state}
							disabled
						/>
					</div>
				</div>
			)}
		</div>
	);
}
