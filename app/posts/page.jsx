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
	// const [posts, users] = await Promise.all([getPostsData(), getUsersData()])

	return (
		<div>
			<h1 className='text-4xl mb-5'>Posts Page</h1>
			<h3 className='text-2xl font-semibold'>Users</h3>
			<div className='bg-gray-300'>
				{users.map((user, index) => (
					<div key={index}>
						{posts.map((post) => (
							<Link key={post.id} href={`/posts/${post.id}`}>
								<p>{user.name}</p>
								<li className='bg-gray-100 p-5 cursor-pointer'>
									<h4 className='text-xl font-semibold'>{post.title}</h4>
									<p>{post.body}</p>
								</li>
							</Link>
						))}
					</div>
				))}
			</div>
			<ul className='flex flex-col gap-5'></ul>
		</div>
	);
};

export default Posts;
