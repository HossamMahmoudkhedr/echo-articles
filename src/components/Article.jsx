import React from 'react';
import ArticleImg from '../assets/images/pexels-steve-johnson-1572386 1.png';
import { Link } from 'react-router-dom';

export default function Article({ vertical }) {
	return (
		<div
			className={`relative flex flex-col items-center ${
				vertical
					? 'md:flex-col border-1 py-5 px-6 h-fit md:gap-6'
					: 'article md:flex-row h-[100%] my-14 pb-9 md:gap-12'
			}    `}>
			<div className={`${!vertical && 'md:w-[47%]'} `}>
				<img
					src={ArticleImg}
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-between gap-4 p-5 md:p-[unset]">
				<div className="flex flex-col gap-4">
					<h3 className="title">Article Title</h3>
					<p
						className={`w-[100%] ${!vertical && 'md:w-[90%]'} font-light`}
						style={{ lineHeight: '1.8' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						pariatur sequi quas exercitationem reiciendis blanditiis, aliquid
						repellat rerum praesentium itaque odio at error provident ea
						architecto? Iusto ipsa laudantium id?iciendis blanditiis, aliquid
						repellat rerum praesentium itaque odio at error provident ea
						architecto? Iusto ipsa laudantium id?
					</p>
				</div>
				<div
					className={`flex flex-col md:flex-row md:items-center justify-between gap-8`}>
					<div
						className={`flex flex-col  gap-2 ${
							vertical
								? 'md:gap-3 md:flex-col md:items-start'
								: 'md:gap-7 md:flex-row md:items-center'
						} text-gray-600`}>
						<div className="flex items-center gap-2 text-[12px] md:text-sm ">
							<p className="font-bold">Author</p>
							<p>Hossam Mahmoud</p>
						</div>
						<div className="flex items-center gap-2 text-[12px] md:text-sm">
							<p className="font-bold">Date</p>
							<p>16, March 2025</p>
						</div>
					</div>
					<div>
						<Link
							to="/article/1"
							className="btn btn-outline border-1 rounded-3xl flex items-center gap-2 duration-300 transition-all font-normal hover:bg-white hover:gap-4 w-[fit-content]">
							<span>READ MORE</span>
							<span className="mt-[1px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
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
				</div>
			</div>
		</div>
	);
}
