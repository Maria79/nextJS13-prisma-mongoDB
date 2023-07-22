import React from 'react';
import AddPost from '../components/AddPost';
import PostList from '../components/PostList';

async function getData() {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Failed to reach data');
	}

	return res.json();
}

export default async function CrudPage() {
	const posts = await getData();

	return (
		<div className='max-w-4xl max-auto mt-4'>
			<div className='my-5 flex flex-col gap-4'>
				<h1 className='text-3xl font-bold'>Blog</h1>
				<AddPost />
			</div>

			<PostList posts={posts} />
		</div>
	);
}
