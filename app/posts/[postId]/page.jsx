async function getPostData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error('fetch not working');
	}

	return res.json();
}

// async function getUsersData() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');

// 	return res.json();
// }

const Post = async ({ params: { postId } }) => {
	const post = await getPostData(postId);

	return (
		// <div>
		// 	<h1 className='text-4xl mb-5'>Posts Page</h1>
		// 	<h3 className='text-2xl font-semibold'>Users</h3>
		// 	<div className='bg-gray-300'>
		// 		{users.map((user, index) => (
		// 			<div key={index}>
		// 				<p>{user.name}</p>
		// 			</div>
		// 		))}
		// 	</div>
		// 	<ul className='flex flex-col gap-5'>
		// 		<div key={post.id} href={`/posts/${post.id}`}>
		// 			<li className='bg-gray-100 p-5 cursor-pointer'>
		// 				<h4 className='text-xl font-semibold'>{post.title}</h4>
		// 				<p>{post.body}</p>
		// 			</li>
		// 		</div>
		// 	</ul>
		// </div>
		<div>
			<p>Post ID: {postId}</p>
			<p className='text-lg font-medium'>User:{post.userId}</p>
			<h2 className='text-2xl font-semibold'>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
};

export default Post;
