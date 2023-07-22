'use client';
import Users from './components/Users';
import User from './components/User';
import { useState } from 'react';

export default function UsersPage() {
	const [selectedUserId, setSelectedUserId] = useState(null);

	const handleUserClick = (userId) => {
		setSelectedUserId(userId);
	};
	const handleCloseUserInfo = () => {
		setSelectedUserId(null);
	};

	return (
		<div className='grid grid-cols-1 grid-rows-2-[15%_85%] gap-2 md:grid md:grid-cols-[15%_85%]'>
			<Users onUserClick={handleUserClick} />

			{/* User */}
			{selectedUserId && (
				<User userId={selectedUserId} onClose={handleCloseUserInfo} />
			)}
		</div>
	);
}
