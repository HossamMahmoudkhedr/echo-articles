import React, { useState } from 'react';
import ArticleImg from '../assets/images/pexels-steve-johnson-1572386 1.png';
import { Link } from 'react-router-dom';
import { formatDate, useAuth } from '../../utils/helper';
import { toast, ToastContainer } from 'react-toastify';

export default function Article({ vertical, article, showWindow }) {
	return (
		<div
			className={`article relative flex flex-col items-center ${
				vertical
					? 'md:flex-col border-1 py-5 px-6 h-fit md:gap-6'
					: 'article md:flex-row h-[100%] my-14 pb-9 md:gap-12'
			}    `}>
			{article.author._id === JSON.parse(localStorage.getItem('user'))._id && (
				<div className="contorl-article absolute top-0 end-5 flex items-center gap-4">
					<Link
						to={`/edit-article/${article._id}`}
						className="btn btn-circle bg-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
							/>
						</svg>
					</Link>
					<button
						onClick={() => {
							showWindow(article._id);
						}}
						className="btn btn-circle bg-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</button>
				</div>
			)}
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
							<p>
								{article.author.fname} {article.author.lname}
							</p>
						</div>
						<div className="flex items-center gap-2 text-[12px] md:text-sm">
							<p className="font-bold">Date</p>
							<p>{formatDate(article.date)}</p>
						</div>
					</div>
					<div>
						<Link
							to={`/article/${article._id}`}
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
