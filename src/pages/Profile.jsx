import React from 'react';
import PageHead from '../components/PageHead';
import Avatar from '../assets/images/avatar.png';
import Article from '../components/Article';
export default function Profile({ currentUser }) {
	const fullName = `${currentUser?.fname}  ${currentUser?.lname}`;
	return (
		<div>
			<div className="container">
				<div className="mb-10">
					<PageHead text={'Author'} />
				</div>

				<div className="flex items-center flex-col lg:flex-row justify-center gap-16">
					<div className="flex flex-col items-center gap-8 lg:w-[30%]">
						<div className="overflow-hidden rounded-full w-xs h-xs">
							{currentUser?.image ? (
								<img
									src={currentUser?.image}
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
						<div className="flex flex-col gap-4 w-[100%] pt-7 border-t-1">
							<div className="flex w-[100%] justify-between">
								<p className="font-bold">Job</p>
								<p>Engineer</p>
							</div>
							<div className="flex w-[100%] justify-between">
								<p className="font-bold">City</p>
								<p>Cairo</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-7 text-center lg:text-left lg:w-[50%]">
						<div>
							<h2 className="text-5xl md:text-8xl font-semibold lg:w-[20%]">
								{fullName}
							</h2>
						</div>
						<div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
								asperiores ullam architecto nesciunt aliquam iusto quam nostrum
								ipsa placeat tempore atque impedit delectus, sint neque nam!
								Accusamus ducimus illo perspiciatis.
							</p>
						</div>
					</div>
				</div>

				{/* <hr className="my-10 md:my-15" />
				<h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-20">
					Artilces by {fullName}
				</h2> */}

				{/* <div className="flex lg:flex-row lg:flex-wrap flex-col gap-4">
					<div className="lg:w-[32%]">
						<Article vertical={true} />
					</div>
					<div className="lg:w-[32%]">
						<Article vertical={true} />
					</div>
					<div className="lg:w-[32%]">
						<Article vertical={true} />
					</div>
				</div> */}
			</div>
		</div>
	);
}
