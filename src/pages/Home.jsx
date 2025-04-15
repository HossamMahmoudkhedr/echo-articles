import React from 'react';
import HeroImg from '../assets/images/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png';

import Article from '../components/Article';
import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<div className="container">
			<div>
				<h1 className="header">ART & LIFE</h1>
				<div className="p-5 bg-black flex">
					<p className="font-bold text-white w-[13%]">NEWS TICKER+++</p>
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
					<Article />
					<Article />
					<Article />
					<Article />
					<Article />
				</div>
				<div className="pt-10 pb-17 border-b-2">
					<Link
						to="/all-articles"
						className="flex items-center gap-2 font-bold transition-all duration-300 hover:gap-4 cursor-pointer w-fit">
						All Articles
						<span className="mt-[1px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="3"
								stroke="currentColor"
								class="size-4">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
								/>
							</svg>
						</span>
					</Link>
				</div>

				<div>
					<div className="flex items-center justify-between">
						<h2 className="font-bold text-9xl my-10">AUTHORS</h2>
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
									class="size-4">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
