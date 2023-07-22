import Link from 'next/link';

export default function HomePage() {
	return (
		<div className=''>
			<h1 className='text-4xl'>Home Page</h1>
			<p className='py-10'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam
				cupiditate adipisci repellendus sunt aspernatur minus sit ratione ullam,
				voluptate labore earum repudiandae vitae architecto, beatae, dolor rerum
				ipsam dolorem?
			</p>

			<Link href='/about'>About Page</Link>
		</div>
	);
}
