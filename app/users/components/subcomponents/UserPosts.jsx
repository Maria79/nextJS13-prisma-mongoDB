import { useState } from 'react';
import {
	AiTwotoneDislike,
	AiTwotoneLike,
	AiFillCloseCircle,
} from 'react-icons/ai';

const UserPosts = ({ userPosts }) => {
	const [show, setShow] = useState(false);
	function handleOpen() {
		setShow(!show);
	}
	function handleClose() {
		setShow(!show);
	}

	const posts = userPosts;

	return (
		<div className=' border-b-2 border-indigo-500/75 mt-1 p-2'>
			<h2
				className='underline underline-offset-2 py-3 cursor-pointer hover:font-bold'
				onClick={handleOpen}
			>
				User Posts:
			</h2>
			{show && (
				<div className=' post w-full bg-slate-200'>
					<div className=' '>
						<div className='p-2'>
							<AiFillCloseCircle size={28} onClick={handleClose} className='' />
						</div>
					</div>

					{posts.map((post) => (
						<div key={post.id}>
							<div className='p-3'>
								<div className=''>
									<h1 className='text-xl'>
										{post.title.split(' ').slice(0, 5).join(' ')}...
									</h1>
									<p>{post.body}</p>
								</div>
								<div className='flex items-center gap-x-1 gap-y-22'>
									{post.reactions > 0 ? (
										<AiTwotoneLike className='text-blue-400/80' />
									) : (
										<AiTwotoneDislike className='text-slate-700/90' />
									)}
									<span>{post.reactions}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default UserPosts;
