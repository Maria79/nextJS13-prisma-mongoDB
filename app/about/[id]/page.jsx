import Link from 'next/link';

export default function DynamicPage({ params }) {
	return (
		<div className=''>
			<h1 className='text-4xl'>This is the about page with ID: {params.id} </h1>

			<Link href='/'>Home Page</Link>
		</div>
	);
}
