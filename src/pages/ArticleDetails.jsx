import React from 'react';
import HeroImg from '../assets/images/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png';
import Person from '../assets/images/person.png';
import Article from '../components/Article';
import { Link } from 'react-router-dom';

export default function ArticleDetails() {
	const goBack = () => {
		history.back();
	};
	return (
		<div className="container">
			<div>
				<div className="flex items-center justify-between mt-10">
					<div>
						<button
							className="	flex items-center gap-2 bg-white border-0 cursor-pointer font-bold"
							onClick={goBack}>
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
									d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
								/>
							</svg>
							GO BACK
						</button>
					</div>
					<div>
						<h2 className="sub-header">ARTICLE</h2>
					</div>
				</div>
				<div className="flex flex-col gap-15 xl:gap-30">
					<div className="flex flex-col xl:flex-row justify-between mt-15">
						<div className="w-[100%] xl:w-[32%]">
							<h2 className="main-title">hope dies last</h2>
						</div>
						<div className="xl:w-[40%]">
							<p style={{ lineHeight: '1.8' }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium exercitationem optio voluptatibus cumque adipisci
								voluptatum magnam nostrum laudantium, natus, pariatur dicta
								temporibus qui asperiores voluptas explicabo et harum maiores
								ipsa!
							</p>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-7 text-gray-600">
							<div className="flex items-center gap-2 text-[12px] md:text-sm ">
								<p className="font-bold">Author</p>
								<p>Hossam Mahmoud</p>
							</div>
							<div className="flex items-center gap-2 text-[12px] md:text-sm">
								<p className="font-bold">Date</p>
								<p>16, March 2025</p>
							</div>
						</div>
						<div>
							<button className="btn btn-outline rounded-3xl text-sm text-gray-700 hover:bg-white border-gray-400 hover:border-gray-400">
								Art
							</button>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="xl:h-[95vh]">
						<img
							src={HeroImg}
							alt=""
						/>
					</div>
				</div>
				<div className="mt-20 flex flex-col items-center xl:items-start xl:flex-row gap-6 justify-center">
					<div className="flex flex-col sm:w-[60%] xl:w-[25%]">
						<div className="flex gap-4 items-center pb-4 mb-5 border-b-2 border-black">
							<div className="xl:w-[30%] rounded-full overflow-hidden">
								<img
									className="w-[100%]"
									src={Person}
									alt=""
								/>
							</div>
							<h3
								className="xl:w-[30%] font-bold text-3xl md:text-5xl"
								style={{ fontFamily: '"League Spartan", sans-serif' }}>
								Hossam Mahmoud
							</h3>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex justify-between">
								<p className="font-bold">Date</p>
								<p>5 Mar 2025</p>
							</div>
							<div className="flex justify-between">
								<p className="font-bold">Job</p>
								<p>Software Engineer</p>
							</div>
						</div>
					</div>
					<div className="sm:w-[60%] xl:w-[50%] flex flex-col gap-3">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
							voluptatibus! Iste dolores a quibusdam nisi est fugit debitis
							ullam facere molestiae quas illum cumque, eum provident doloremque
							blanditiis, necessitatibus dicta!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
							voluptatibus! Iste dolores a quibusdam nisi est fugit debitis
							ullam facere molestiae quas illum cumque, eum provident doloremque
							blanditiis, necessitatibus dicta!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
							voluptatibus! Iste dolores a quibusdam nisi est fugit debitis
							ullam facere molestiae quas illum cumque, eum provident doloremque
							blanditiis, necessitatibus dicta!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
							voluptatibus! Iste dolores a quibusdam nisi est fugit debitis
							ullam facere molestiae quas illum cumque, eum provident doloremque
							blanditiis, necessitatibus dicta!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
							voluptatibus! Iste dolores a quibusdam nisi est fugit debitis
							ullam facere molestiae quas illum cumque, eum provident doloremque
							blanditiis, necessitatibus dicta!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
							voluptatibus! Iste dolores a quibusdam nisi est fugit debitis
							ullam facere molestiae quas illum cumque, eum provident doloremque
							blanditiis, necessitatibus dicta!
						</p>
					</div>
				</div>
				<hr className="text-black border-1 my-16" />
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
				</div>
			</div>
		</div>
	);
}
