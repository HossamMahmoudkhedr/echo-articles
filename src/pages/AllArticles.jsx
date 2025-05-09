import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../../utils/helper';

let filteredData = [];
let pagesNo = 0;
export default function AllArticles({ showWindow, refresh, currentUser }) {
	// const { data, loading, error } = useFetch(
	// 	'http://localhost:3000/api/articles'
	// );
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState();
	const [pages, setPages] = useState(0);

	const handleSearch = async (e) => {
		const value = e.target.value;
		setSearch(value);
	};

	useEffect(() => {
		if (!search) {
			console.log('hi');
			setLoading(true);
			useAuth(`/articles?currentPage=${currentPage}`)
				.then((res) => {
					setData(res.data.articles);
					filteredData = res?.data?.articles;
					setPages(res.data.pages);
					pagesNo = res.data.pages;
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setLoading(false);
				});
		}
	}, [refresh, currentPage]);

	useEffect(() => {
		let time;
		setLoading(true);
		if (search) {
			time = setTimeout(async () => {
				try {
					const response = await useAuth(
						`/articles?search=${search}&currentPage=${currentPage}`
					);
					console.log(response);
					filteredData = response.data.articles;
					pagesNo = response.data.pages;
					setLoading(false);
				} catch (error) {
					console.log(error);
					setLoading(false);
				}
			}, 1000);
		} else {
			setLoading(false);
			filteredData = data;
			pagesNo = pages;
		}
		return () => {
			clearTimeout(time);
		};
	}, [search, currentPage]);
	console.log(pages);

	console.log(filteredData);
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
					<div className="w-[100%] h-[100%] flex items-center justify-center">
						<span className="loading loading-spinner loading-lg"></span>
					</div>
				)}
				{!loading &&
					filteredData &&
					filteredData.map((article) => (
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
					{filteredData &&
						Array(pagesNo)
							.fill(0)
							.map((item, index) => (
								<button
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
