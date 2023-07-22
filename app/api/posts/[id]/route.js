import prismadb from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	try {
		const { id } = params;

		const post = await prismadb.post.findUnique({
			where: {
				id,
			},
		});

		if (!post) {
			return NextResponse.json(
				{ message: 'GET Error', error },
				{ status: 404 }
			);
		}

		return NextResponse.json(post);
	} catch (error) {
		return NextResponse.json({ message: 'GET Error', error }, { status: 500 });
	}
}

export async function PATCH(request, { params }) {
	try {
		const body = await request.json();
		const { title, description } = body;

		const { id } = params;

		const updatePost = await prismadb.post.update({
			where: {
				id,
			},
			data: {
				title,
				description,
			},
		});

		if (!updatePost) {
			return NextResponse.json(
				{ message: 'GET Error', error },
				{ status: 404 }
			);
		}

		return NextResponse.json(updatePost);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Update Error', error },
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	try {
		const { id } = params;

		await prismadb.post.delete({
			where: {
				id,
			},
		});

		return NextResponse.json('Post has been deleted');
	} catch (error) {
		return NextResponse.json(
			{ message: 'DELETE Error', error },
			{ status: 500 }
		);
	}
}
