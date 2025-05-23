import React, { useEffect, useState } from 'react';
import HeroImg from '../assets/images/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png';
import Person from '../assets/images/person.png';

import Article from '../components/Article';
import { Link } from 'react-router-dom';
import Author from '../components/Author';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../../utils/helper';
import { article, div } from 'framer-motion/client';
export default function Home({ showWindow, refresh, currentUser }) {
	// const { data, loading, error } = useFetch(
	// 	'http://localhost:3000/api/articles'
	// );
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		useAuth('/articles?limit=8')
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, [refresh]);

	console.log(data);
	return (
		<div className="container">
			<div>
				<h1 className="header">ART & LIFE</h1>
				<div className="py-5 px-0 md:p-5 bg-black flex">
					<p className="font-bold text-white w-[70%] px-2 md:px-[unset] text-sm md:w-[13%]  bg-black">
						NEWS TICKER+++
					</p>
					<marquee
						direction="right"
						scrollamount="8"
						className="text-white">
						<span className="mx-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<span className="mx-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<span className="mx-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</span>
					</marquee>
				</div>
				<div className="my-8">
					<img
						src={HeroImg}
						alt="Echo Articles"
					/>
				</div>
				<div>
					{loading && (
						<div className="w-[100%] h-[100%] flex items-center justify-center">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					)}
					{!loading &&
						data?.articles?.length > 0 &&
						data?.articles?.map((article) => (
							<Article
								currentUser={currentUser}
								key={article._id}
								article={article}
								showWindow={showWindow}
							/>
						))}
					{!loading && (!data?.articles || data?.articles?.length === 0) && (
						<div className="flex items-center justify-center">
							<p className="text-gray-400">No articles found, add one!</p>
						</div>
					)}
				</div>
				{!loading && data?.articles && (
					<div className="pt-10 pb-17 px-6 md:px-0 border-b-2">
						<Link
							to="/articles"
							className="flex items-center gap-2 font-bold transition-all duration-300 hover:gap-4 cursor-pointer w-fit">
							All Articles
							<span className="mt-[1px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="3"
									stroke="currentColor"
									className="size-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</span>
						</Link>
					</div>
				)}
				{/* <div>
					<div className="flex items-center justify-between">
						<h2 className="sub-title my-10">AUTHORS</h2>
						<Link
							to="/authors"
							className="flex items-center gap-2 font-bold transition-all duration-300 hover:gap-4 cursor-pointer">
							All Authors
							<span className="mt-[1px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="3"
									stroke="currentColor"
									className="size-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</span>
						</Link>
					</div>
					<div className="flex flex-col items-center p-2 md:p-0">
						<table className="border-collapse border border-black  w-[100%]">
							<tbody>
								<tr>
									<td className="border border-inherit ">
										<Author />
									</td>
									<td className="border hidden md:block border-inherit ">
										<Author />
									</td>
								</tr>
								<tr>
									<td className="border border-inherit ">
										<Author />
									</td>
									<td className="border border-inherit hidden md:block ">
										<Author />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div> */}
			</div>
		</div>
	);
}
