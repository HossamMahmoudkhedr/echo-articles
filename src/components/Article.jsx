import React from 'react';
import ArticleImg from '../assets/images/pexels-steve-johnson-1572386 1.png';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helper';

export default function Article({ vertical, article }) {
	return (
		<div
			className={`relative flex flex-col items-center ${
				vertical
					? 'md:flex-col border-1 py-5 px-6 h-fit md:gap-6'
					: 'article md:flex-row h-[100%] my-14 pb-9 md:gap-12'
			}    `}>
			<div className={`${!vertical && 'md:w-[30%]'} `}>
				<img
					src={article.image}
					alt={article.title}
				/>
			</div>
			<div className="flex flex-col justify-between gap-4 p-5 md:p-[unset] md:w-[65%]">
				<div className="flex flex-col gap-4">
					<h3 className="title">{article.title}</h3>
					<p
						className={`w-[100%] ${!vertical && 'md:w-[90%]'} font-light`}
						style={{ lineHeight: '1.8' }}>
						{article.description}
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
							<p>{article.author}</p>
						</div>
						<div className="flex items-center gap-2 text-[12px] md:text-sm">
							<p className="font-bold">Date</p>
							<p>{formatDate(article.date)}</p>
						</div>
					</div>
					<div>
						<Link
							to={`/article/${article.id}`}
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
