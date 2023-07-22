import { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './subcomponents/UserInfo';
import UserAddress from './subcomponents/UserAddress';
import Profile from './subcomponents/Profile';
import UserWork from './subcomponents/UserWork';

const User = ({ userId }) => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		axios
			.get(`https://dummyjson.com/users/${userId}`)
			.then((response) => {
				setUserData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching user data:', error);
			});
	}, [userId]);

	if (!userData) {
		return <div>Loading user data...</div>;
	}

	const ageT = () => {
		const birthDate = new Date(userData.birthDate);
		const today = new Date();

		let age = today.getFullYear() - birthDate.getFullYear();

		// Check if the birthday has already occurred this year
		const hasBirthdayOccurred =
			today.getMonth() > birthDate.getMonth() ||
			(today.getMonth() === birthDate.getMonth() &&
				today.getDate() >= birthDate.getDate());

		// If the birthday has not occurred this year, subtract one year from the age
		if (!hasBirthdayOccurred) {
			age--;
		}

		return age;
	};

	const birthDate = userData.birthDate;
	const parts = birthDate.split('-'); // Split the string at dashes
	const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

	//
	return (
		<div className='border py-5 px-2'>
			<h1 className='text-2xl font-semibold mb-2'>User Info</h1>
			<hr className='mb-3' />
			<div className='py-2 flex flex-col gap-1 max-h-[70vh] overflow-scroll scrollbar-hide'>
				<UserInfo
					userData={userData}
					formattedDate={formattedDate}
					aged={ageT()}
				/>

				<UserAddress userData={userData} />

				<Profile userData={userData} />

				<UserWork userData={userData} />

				{/*< userData={userData} />
				< userData={userData} /> */}
			</div>
		</div>
	);
};

export default User;
