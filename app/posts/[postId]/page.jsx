async function getPostData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error('fetch not working');
	}

	return res.json();
}

const Post = async ({ params: { postId } }) => {
	const post = await getPostData(postId);

	return (
		<div>
			<p>Post ID: {postId}</p>
			<p className='text-lg font-medium'>User:{post.userId}</p>
			<h2 className='text-2xl font-semibold'>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
};

export default Post;
