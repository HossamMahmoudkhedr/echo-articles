import React from 'react';
import Author from '../components/Author';
import useFetch from '../hooks/useFetch';

export default function Authors() {
	const { data, loading, error } = useFetch(
		'http://localhost:3000/api/authors'
	);
	console.log(data);
	return (
		<div className="container">
			<div>
				<h1 className="header">AUTHORS</h1>
			</div>
			<div>
				{data &&
					!loading &&
					data?.authors?.map((author) => (
						<div
							key={author.id}
							className="author relative">
							<Author
								wide={true}
								author={author}
							/>
						</div>
					))}
			</div>
		</div>
	);
}
