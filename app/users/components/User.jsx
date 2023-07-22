import { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './subcomponents/UserInfo';
import UserAddress from './subcomponents/UserAddress';
import Profile from './subcomponents/Profile';
import UserWork from './subcomponents/UserWork';
import UserPosts from './subcomponents/UserPosts';

const User = ({ userId }) => {
	const [userData, setUserData] = useState(null);
	const [userPosts, setUserPosts] = useState([]);

	useEffect(() => {
		axios
			.get(`https://dummyjson.com/users/${userId}`)
			.then((response) => {
				setUserData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching user data:', error);
			});

		axios
			.get(`https://dummyjson.com/users/${userId}/posts`)
			.then((response) => {
				setUserPosts(response.data.posts);
			})
			.catch((error) => {
				console.error('Error fetching user posts:', error);
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
	console.log(userPosts);
	//
	return (
		<div className=' border mb-5 py-2 px-5'>
			<h1 className='text-2xl font-semibold mb-2'>User</h1>
			<hr className='mb-3' />
			<div className='relative py-2 flex flex-col gap-1 max-h-[70vh] overflow-scroll scrollbar-hide'>
				<UserInfo
					userData={userData}
					formattedDate={formattedDate}
					aged={ageT()}
				/>

				<UserAddress userData={userData} />

				<Profile userData={userData} />

				<UserWork userData={userData} />

				<UserPosts userPosts={userPosts} />
				{/*< userData={userData} /> */}
			</div>
		</div>
	);
};

export default User;
