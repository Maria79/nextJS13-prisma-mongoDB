'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = ({ onUserClick }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get('https://dummyjson.com/users')
			.then((response) => {
				setUsers(response.data.users);
			})
			.catch((error) => {
				console.error('Error fetching users:', error);
			});
	}, []);

	return (
		<div className='border mb-5 py-2'>
			<h1 className='text-2xl font-semibold mb-2 text-center'>Al users: </h1>
			<hr className='hidden md:flex' />
			<div className='px-2 py-1 md:h-[75vh] overflow-scroll scrollbar-hide'>
				{users.map((user) => (
					<div
						key={user.id}
						className='p-1 my-2 cursor-pointer  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-blue-300/50 '
						onClick={() => onUserClick(user.id)}
					>
						{user.firstName}
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;
