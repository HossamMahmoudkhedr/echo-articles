import React, { useEffect, useState } from 'react';
import HeroImg from '../assets/images/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png';
import Avatar from '../assets/images/avatar.png';
import Article from '../components/Article';
import { Link, useParams } from 'react-router-dom';
import PageHead from '../components/PageHead';
import useFetch from '../hooks/useFetch';
import { formatDate } from '../../utils/helper';

export default function ArticleDetails({ currentUser, showWindow }) {
	const [article, setArticle] = useState({});
	const { id } = useParams('id');

	const { data, loading, error } = useFetch(
		`http://localhost:3000/api/articles/${id}`
	);

	useEffect(() => {
		setArticle(data?.article);
	}, [data]);

	if (loading) return <div className="container">Loading...</div>;
	return (
		<div className="container">
			<div>
				<PageHead text={'article'} />
				<div>
					{article?.author?._id === currentUser?._id && (
						<div className="flex items-center justify-end gap-4 mt-8">
							<Link
								to={`/edit-article/${article?._id}`}
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
				</div>
				<div className="flex flex-col gap-15 xl:gap-30">
					<div className="flex flex-col xl:flex-row justify-between mt-5">
						<div className="w-[100%] xl:w-[38%]">
							<h2 className="main-title">{article?.title}</h2>
						</div>
						<div className="xl:w-[40%]">
							<p style={{ lineHeight: '1.8' }}>{article?.description}</p>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-7 text-gray-600">
							<div className="flex items-center gap-2 text-[12px] md:text-sm ">
								<p className="font-bold">Author</p>
								<p>
									{article?.author?.fname} {article?.author?.lname}
								</p>
							</div>
							<div className="flex items-center gap-2 text-[12px] md:text-sm">
								<p className="font-bold">Date</p>
								<p>{formatDate(article?.date)}</p>
							</div>
						</div>
						<div className="flex gap-2 items-center">
							{article?.tags?.map((tag, index) => (
								<div
									key={index}
									className="badge badge-neutral badge-outline">
									{tag}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="xl:h-[95vh]">
						<img
							src={article?.image}
							alt=""
						/>
					</div>
				</div>
				<div className="mt-20 flex flex-col items-center xl:items-start xl:flex-row gap-8 justify-center">
					<div className="flex flex-col sm:w-[60%] xl:w-[25%]">
						<div className="flex gap-4 items-center pb-4 mb-5 border-b-2 border-black">
							<div className="xl:w-[30%] rounded-full overflow-hidden">
								{article?.authorImage ? (
									<img
										className="w-[100%]"
										src={article?.author?.authorImage || Avatar}
										alt=""
									/>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-[100%]">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								)}
							</div>
							<h3
								className="xl:w-[30%] font-bold text-3xl md:text-5xl"
								style={{ fontFamily: '"League Spartan", sans-serif' }}>
								{article?.author?.fname} {article?.author?.lname}
							</h3>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex justify-between">
								<p className="font-bold">Date</p>
								<p>{formatDate(article?.date)}</p>
							</div>
						</div>
					</div>
					<div className="sm:w-[60%] xl:w-[50%] flex flex-col gap-3">
						{article?.body}
					</div>
				</div>
				{/* <hr className="text-black border-1 my-16" />
				<div>
					<div className="flex justify-between items-center">
						<h2 className="sub-title my-10">LATEST POSTS</h2>
						<Link
							to="/articles"
							className="flex items-center gap-2 font-bold transition-all duration-300 hover:gap-4 cursor-pointer w-fit ">
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
					<div className="flex lg:flex-row lg:flex-wrap flex-col gap-4">
						<div className="lg:w-[32%]">
							<Article vertical={true} />
						</div>
						<div className="lg:w-[32%]">
							<Article vertical={true} />
						</div>
						<div className="lg:w-[32%]">
							<Article vertical={true} />
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
