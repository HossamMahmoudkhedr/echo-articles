import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../../utils/helper';

export default function AllArticles({ showWindow, refresh }) {
	// const { data, loading, error } = useFetch(
	// 	'http://localhost:3000/api/articles'
	// );
	let currentPage = 1;
	const articlesInPage = 5;
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		useAuth('/articles')
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, [refresh]);

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
						Enter article title
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
							name="title"
							id="title"
							className="grow"
							onChange={(e) => {
								if (e.target.value != '' && data && data.articles) {
									const filterdData = data?.articles?.filter((article) => {
										console.log(article.title.includes(e.target.value));
										return article.title.includes(e.target.value);
									});
									setData(filterdData);
								}
							}}
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
				{data &&
					data.articles &&
					data.articles
						.slice(
							(currentPage - 1) * articlesInPage,
							currentPage * articlesInPage
						)
						.map((article) => (
							<Article
								article={article}
								key={article.id}
								showWindow={showWindow}
							/>
						))}
			</div>
			<div className="flex justify-center">
				<div className="join">
					{data &&
						data.articles &&
						Array(Math.ceil(data?.articles?.length / articlesInPage))
							.fill(0)
							.map((item, index) => (
								<button
									className={`join-item btn ${
										currentPage == index + 1 ? 'btn-active' : ''
									}`}>
									{index + 1}
								</button>
							))}
				</div>
			</div>
		</div>
	);
}
