import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
	const [showSide, setShowSide] = useState(false);

	const closeSide = () => {
		setShowSide(false);
	};

	const show = () => {
		setShowSide(true);
	};
	return (
		<nav className="">
			<div className="flex items-center justify-between mt-5 ms-10 mb-5 md:mb-[unset] md:mt-10 md:ms-20 pe-3 md:pe-7 pb-3 border-b-2">
				<div>
					<Link
						to="/"
						className="font-bold text-2xl"
						style={{ fontFamily: '"League Spartan", sans-serif' }}>
						Echo Articles
					</Link>
				</div>

				<div
					className={`flex flex-col md:flex-row items-center md:gap-4 fixed md:static start-0 top-0 w-[100%] h-[100%] md:w-auto md:h-auto z-[2] duration-[0.3s] transition-all ${
						showSide ? 'translate-x-[0]' : 'translate-x-[-100%]'
					} md:translate-x-[unset] bg-white`}>
					<div className="flex md:hidden justify-start w-[100%] p-4 border-b-1 border-gray-300">
						<button
							className="btn bg-transparent border-0"
							onClick={closeSide}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-col md:flex-row justify-center h-[100%] gap-10 md:gap-4 items-center ">
						<div className="flex items-center gap-4 ">
							<ul className="flex flex-col md:flex-row items-center gap-4 text-2xl md:text-lg font-semibold">
								<li>
									<NavLink
										onClick={closeSide}
										to="/">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={closeSide}
										to="/articles">
										Articles
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={closeSide}
										to="/authors">
										Authors
									</NavLink>
								</li>
							</ul>
						</div>
						<span className="w-[20px] h-[1.6px] bg-black mt-1 hidden md:block"></span>
						<div className="flex items-center gap-2">
							<Link
								to="/login"
								onClick={closeSide}
								className="btn btn-outline btn-lg md:btn-md border-2 rounded-3xl hover:bg-white hover:border-black">
								Login
							</Link>
							<Link
								to="/sign-up"
								onClick={closeSide}
								className="btn btn-neutral btn-lg md:btn-md rounded-3xl">
								Sign up
							</Link>
						</div>
					</div>
				</div>
				<button
					className="block md:hidden btn bg-transparent border-0"
					onClick={show}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
}
