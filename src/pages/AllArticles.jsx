import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../../utils/helper';
import useDebounce from '../hooks/useDebounce';

export default function AllArticles({ showWindow, refresh, currentUser }) {
	// const { data, loading, error } = useFetch(
	// 	'http://localhost:3000/api/articles'
	// );
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState();
	const [pages, setPages] = useState(0);
	const debouncevalue = useDebounce(search, 500);

	const handleSearch = async (e) => {
		const value = e.target.value;
		setSearch(value);
	};

	useEffect(() => {
		(async function () {
			setLoading(true);
			const endPoint = debouncevalue
				? `/articles?search=${search}&currentPage=${currentPage}`
				: `/articles?currentPage=${currentPage}`;
			try {
				const res = await useAuth(endPoint);
				setData(res.data.articles);
				setPages(res.data.pages);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		})();
	}, [debouncevalue, currentPage, refresh]);

	const [show, setShow] = useState(false);
	const showCategory = () => {
		setShow(!show);
	};

	const handlePagination = (page) => {
		setCurrentPage(page);
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
							value={search}
							className="grow"
							onChange={handleSearch}
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
				{loading && (
					<div className="w-[100%] h-[100%] flex items-center justify-center my-5">
						<span className="loading loading-spinner loading-lg"></span>
					</div>
				)}
				{!loading && (!data || data.length === 0) && (
					<div className="flex items-center justify-center">
						<p className="text-gray-400">No articles found, add one!</p>
					</div>
				)}
				{!loading &&
					data &&
					data.map((article) => (
						<Article
							key={article._id}
							currentUser={currentUser}
							article={article}
							showWindow={showWindow}
						/>
					))}
			</div>
			<div className="flex justify-center">
				<div className="join">
					{data &&
						Array(pages)
							.fill(0)
							.map((item, index) => (
								<button
									key={index}
									onClick={() => {
										handlePagination(index + 1);
									}}
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
