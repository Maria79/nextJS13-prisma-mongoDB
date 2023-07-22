'use client';

import { useState } from 'react';

const UserInfo = ({ userData, formattedDate, aged }) => {
	const [show, setShow] = useState(false);
	const [showBank, setShowBank] = useState(false);

	function handleOpen() {
		setShow(!show);
	}
	function handleOpenBank() {
		setShowBank(!showBank);
	}

	return (
		<div className='border-indigo-500/75 border-b-2 p-2 '>
			<h2
				className='underline underline-offset-2 py-3 cursor-pointer hover:font-bold'
				onClick={handleOpen}
			>
				User Personal Details:
			</h2>
			{show && (
				<div className='pb-4'>
					<div className='md:grid md:grid-cols-3 my-5'>
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
					<hr className='w-1/2 my-4' />
					<div className='mt-4'>
						<h2
							onClick={handleOpenBank}
							className={`cursor-pointer font-semibold mb-4
								${showBank ? 'text-sky-800' : ''}
							`}
						>
							Bank Details
						</h2>
						{showBank && (
							<div className='py-3 px-4 shadow'>
								<div className='py-1'>
									<label htmlFor='name'>Card Type:</label>
									<input
										className='capitalize text-sm font-semibold py-1 px-2 w-1/3'
										type='text'
										name='name'
										id='name'
										placeholder={userData.bank.cardType}
										disabled
									/>
								</div>
								<div className='py-1 flex'>
									<div className='flex-1'>
										<label htmlFor='name'>Card Number:</label>
										<input
											className='capitalize text-sm font-semibold py-1 px-2 w-1/3'
											type='text'
											name='name'
											id='name'
											placeholder={userData.bank.cardNumber}
											disabled
										/>
									</div>

									<div className=''>
										<label htmlFor='name'>Card Expire:</label>
										<input
											className='text-sm font-semibold py-1 px-2 mr-16 w-1/3'
											type='text'
											name='name'
											id='name'
											placeholder={userData.bank.cardExpire}
											disabled
										/>
									</div>
								</div>
								<div className='py-1'>
									<label htmlFor='name'>Currency:</label>
									<input
										className='capitalize text-sm font-semibold py-1 px-2  w-1/3'
										type='text'
										name='name'
										id='name'
										placeholder={userData.bank.currency}
										disabled
									/>
								</div>
								<div className='py-1'>
									<label htmlFor='name'>IBAN:</label>
									<input
										className='capitalize text-sm font-semibold py-1 px-2 w-1/3'
										type='text'
										name='name'
										id='name'
										placeholder={userData.bank.iban}
										disabled
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
export default UserInfo;
