import prismadb from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		const body = await request.json();
		const { title, description } = body;

		const newPost = await prismadb.post.create({
			data: {
				title,
				description,
			},
		});

		return NextResponse.json(newPost);
	} catch (error) {
		return NextResponse.json({ message: 'Post Error', error }, { status: 500 });
	}
}

export async function GET() {
	try {
		const posts = await prismadb.post.findMany();

		return NextResponse.json(posts);
	} catch (error) {
		return NextResponse.json({ message: 'POST ERROR', error }, { status: 500 });
	}

	// const { searchParams } = new URL(request.url);
	// const id = searchParams.get('id');
	// const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'API-Key': process.env.DATA_API_KEY,
	// 	},
	// });
	// const product = await res.json();

	// return NextResponse.json({ product });
}
