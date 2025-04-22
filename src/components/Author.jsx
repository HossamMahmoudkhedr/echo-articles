import React from 'react';
import Person from '../assets/images/person.png';
import { Link } from 'react-router-dom';

export default function Author({ wide }) {
	return (
		<div
			className={`flex items-center ${
				wide ? 'justify-between flex-col md:flex-row' : ''
			} gap-7 md:gap-16 py-5 md:py-10 px-4 md:px-8`}>
			<div className={`${wide ? 'flex items-center gap-5' : ''}`}>
				<div className={`rounded-full overflow-hidden w-[35%] md:w-[unset]`}>
					<img
						className="w-[100%] object-cover"
						src={Person}
						alt=""
					/>
				</div>
				{wide && (
					<p className="text-lg md:text-3xl font-bold">Hossam Mahmoud</p>
				)}
			</div>

			<div className="flex flex-col gap-3">
				{!wide && (
					<p className="text-lg md:text-3xl font-bold">Hossam Mahmoud</p>
				)}
				<div
					className={`flex items-center justify-between text-[12px] md:text-sm gap-2 ${
						wide ? 'md:gap-10 gap-8' : ' md:gap-0'
					}`}>
					<p className={`flex  flex-col md:flex-row md:gap-3`}>
						<span className="font-bold">Job </span>
						<span className="">Software Engineer</span>
					</p>
					<p className="flex flex-col md:flex-row md:gap-3">
						<span className="font-bold">City </span>
						<span className="">Egypt</span>
					</p>
					{wide && (
						<Link
							to="/profile/1"
							className="flex items-center gap-2 font-bold transition-all duration-300 hover:gap-4 cursor-pointer w-fit">
							ABOUT
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
					)}
				</div>
			</div>
		</div>
	);
}
