'use client';

import { useState } from 'react';
import Modal from './Modal';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Post = ({ post }) => {
	const router = useRouter();

	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [postToEdit, setPostToEdit] = useState(post);

	const [openModalDelete, setOpenModalDelete] = useState(false);

	const handleEditSubmit = (e) => {
		e.preventDefault();
		axios
			.patch(`/api/posts/${post.id}`, postToEdit)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				// postToEdit({});
				setOpenModalEdit(false);
				router.refresh();
			});
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleDeletePost = (id) => {
		axios
			.delete(`/api/posts/${id}`)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setOpenModalDelete(false);
				router.refresh();
			});
	};

	return (
		<li className=' flex justify-between items-center p-3 my-5 bg-slate-200'>
			<div>
				<h2 className='text-2xl font-bold'>{post.title}</h2>
				<p className=''>{post.description}</p>
			</div>

			<div className='flex gap-2'>
				{/* EDIT */}
				<BiSolidEdit
					size={28}
					className='text-green-600 cursor-pointer'
					onClick={() => setOpenModalEdit(true)}
				/>
				<Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
					<form className='w-full' onSubmit={handleEditSubmit}>
						<h1 className='text-2xl pb-3'>Add New Post</h1>

						<input
							type='text'
							placeholder='Title'
							name='title'
							className='w-full p-2'
							value={postToEdit.title || ''}
							onChange={handleChange}
						/>

						<input
							type='text'
							placeholder='Description'
							name='description'
							className='w-full p-2 my-5'
							value={postToEdit.description || ''}
							onChange={handleChange}
						/>

						<button type='submit' className='bg-blue-700 text-white px-5 py-2'>
							Submit
						</button>
					</form>
				</Modal>

				{/* DELETE */}
				<MdDeleteForever
					size={28}
					className='text-red-600 cursor-pointer'
					onClick={() => setOpenModalDelete(true)}
				/>
				<Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
					<div className='relative flex flex-col self-center'>
						<h1 className='text-2xl pb-3'>
							Are you sure, You want to delete this post?
						</h1>

						<div className='flex justify-around mb-5'>
							<button
								onClick={() => handleDeletePost(post.id)}
								className='border px-9 py-1 bg-neutral-200 rounded-lg shadow-lg hover:shadow-sm text-green-700 font-bold mr-5 '
							>
								YES
							</button>
							<button
								onClick={() => setOpenModalDelete(false)}
								className='border px-9 py-1 bg-neutral-200 rounded-lg shadow-lg hover:shadow-sm text-red-700 font-bold mr-5'
							>
								NO
							</button>
						</div>
					</div>
				</Modal>
			</div>
		</li>
	);
};

export default Post;
