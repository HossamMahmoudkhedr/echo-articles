import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="">
			<div className="flex items-center justify-between mt-10 ms-20 pe-7 pb-3 border-b-2">
				<div>
					<Link
						to="/"
						className="font-bold text-2xl">
						Echo Articles
					</Link>
				</div>

				<div className="flex items-center gap-4">
					<div className="flex items-center gap-4">
						<ul className="flex items-center gap-4 text-md font-semibold">
							<li>
								<NavLink to="/all-articles">Articles</NavLink>
							</li>
							<li>
								<NavLink to="/authors">Authors</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">About us</NavLink>
							</li>
						</ul>
					</div>
					<span className="w-[20px] h-[1.6px] bg-black mt-1"></span>
					<div className="flex items-center gap-2">
						<Link
							to="/login"
							className="btn btn-outline border-2 rounded-3xl hover:bg-white hover:border-black">
							Login
						</Link>
						<Link
							to="/sign-up"
							className="btn btn-neutral rounded-3xl">
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
