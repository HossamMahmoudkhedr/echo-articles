import React from 'react';
import ArticleImg from '../assets/images/pexels-steve-johnson-1572386 1.png';
import { Link } from 'react-router-dom';

export default function Article() {
	return (
		<div className="flex h-[100%] gap-12 my-14 pb-9 border-b-2">
			<div className="w-[47%]">
				<img
					src={ArticleImg}
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-between">
				<div className="flex flex-col gap-4">
					<h3 className="font-bold text-3xl">Article Title</h3>
					<p
						className="w-[90%] font-light"
						style={{ lineHeight: '1.8' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						pariatur sequi quas exercitationem reiciendis blanditiis, aliquid
						repellat rerum praesentium itaque odio at error provident ea
						architecto? Iusto ipsa laudantium id?iciendis blanditiis, aliquid
						repellat rerum praesentium itaque odio at error provident ea
						architecto? Iusto ipsa laudantium id?
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-7 text-gray-600">
						<div className="flex items-center gap-2">
							<p className="font-bold">Author</p>
							<p>Hossam Mahmoud</p>
						</div>
						<div className="flex items-center gap-2">
							<p className="font-bold">Date</p>
							<p>16, March 2025</p>
						</div>
					</div>
					<div>
						<Link
							to="article-details"
							className="btn btn-outline border-1 rounded-3xl flex items-center gap-2 duration-300 transition-all font-normal hover:bg-white hover:gap-4">
							<span>READ MORE</span>
							<span className="mt-[1px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
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
