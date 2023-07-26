import Link from 'next/link';

async function getPostsData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');

	await new Promise((resolve) => setTimeout(resolve)); //wait 3 seconds

	return res.json();
}

async function getUsersData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	await new Promise((resolve) => setTimeout(resolve)); //wait 3 seconds

	return res.json();
}

const Posts = async () => {
	const posts = await getPostsData();
	const users = await getUsersData();
	// const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);

	return (
		<div>
			<h1 className='text-4xl mb-5'>Posts Page</h1>
			<h3 className='text-2xl font-semibold'>Users</h3>
			<div className=''>
				{users.map((user) => (
					<div key={user.id} className='my-8'>
						<h4 className='text-2xl px-5 bg-gray-300'>{user.name}</h4>
						{posts
							.filter((post) => post.userId === user.id) // Filter posts for the current user
							.map((post) => (
								<Link key={post.id} href={`/posts/${post.id}`}>
									<div className='bg-gray-100 p-5 cursor-pointer'>
										<h4 className='capitalize text-xl font-semibold'>
											{post.title}
										</h4>
										<p className='capitalize'>{post.body}</p>
										<br />
										<hr />
									</div>
								</Link>
							))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
