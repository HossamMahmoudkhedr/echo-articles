import React from 'react';
import Author from '../components/Author';

export default function Authors() {
	return (
		<div className="container">
			<div>
				<h1 className="header">AUTHORS</h1>
			</div>
			<div>
				<div className="author relative">
					<Author wide={true} />
				</div>
				<div className="author relative">
					<Author wide={true} />
				</div>
			</div>
		</div>
	);
}
