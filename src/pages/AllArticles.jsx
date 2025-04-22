import React, { useState } from 'react';
import Article from '../components/Article';

export default function AllArticles() {
	const [show, setShow] = useState(false);
	const showCategory = () => {
		setShow(!show);
	};
	return (
		<div className="container">
			<div>
				<h1 className="header">ARTICLES</h1>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-4 md:gap-[unset] md:items-end justify-between mt-15">
				<div className="flex flex-col gap-2 w-[45%]  md:w-[22%]">
					<label
						htmlFor="name"
						className="font-semibold">
						Enter article name
					</label>
					<label className="input">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor">
								<circle
									cx="11"
									cy="11"
									r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</g>
						</svg>
						<input
							type="search"
							name="name"
							id="name"
							className="grow"
							placeholder="Search for an article"
						/>
					</label>
				</div>

				<div className="flex flex-col-reverse items-center md:items-[unset] md:flex-row gap-2">
					{show && (
						<div className={`flex gap-2 items-center`}>
							<button className="btn btn-outline rounded-3xl text-sm text-gray-700 hover:bg-white border-gray-400 hover:border-gray-400">
								Art
							</button>
							<button className="btn btn-outline rounded-3xl text-sm text-gray-700 hover:bg-white border-gray-400 hover:border-gray-400">
								Tech
							</button>
							<button className="btn btn-outline rounded-3xl text-sm text-gray-700 hover:bg-white border-gray-400 hover:border-gray-400">
								Science
							</button>
						</div>
					)}
					<button
						className="btn btn-neutral rounded-3xl w-fit"
						onClick={showCategory}>
						Choose category
					</button>
				</div>
			</div>
			<div className="">
				<Article />
				<Article />
				<Article />
				<Article />
			</div>
		</div>
	);
}
