import React from 'react';

export default function Footer() {
	return (
		<footer className="mt-24 md:mt-48 bg-black text-white">
			<div>
				<marquee className="pt-3 pb-18 md:pb-30">
					<div className="flex items-center gap-3">
						{Array(10)
							.fill(1)
							.map((item, index) => (
								<p
									key={index}
									className="font-bold uppercase text-2xl">
									Newsletter++
								</p>
							))}
					</div>
				</marquee>
				<div className="container flex flex-col gap-20 md:gap-35">
					<div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
						<h3
							className="text-5xl md:text-8xl text-center md:text-start font-bold md:w-[60%] uppercase"
							style={{ lineHeight: 1.3 }}>
							Design News to your inbox
						</h3>
						<form className="flex items-center gap-5 md:w-[25%]">
							<input
								className="bg-white placeholder:text-gray-500 p-2 w-[80%]"
								type="email"
								placeholder="Email"
							/>
							<button className="btn btn-primary uppercase bg-white text-black outline-none border-none">
								Sign up
							</button>
						</form>
					</div>
					<div className="flex flex-col gap-15">
						<div className="flex flex-col gap-4 md:gap-0">
							<p className="text-xl font-bold ms-6 md:ms-0">Echo Articles</p>
							<div className="self-center flex flex-col md:flex-row justify-between md:w-[60%] gap-5 md:gap-0 text-center md:text-start font-light">
								<ul className="flex flex-col gap-5">
									<li>Art</li>
									<li>Design</li>
									<li>Arcitecture</li>
								</ul>
								<ul className="flex flex-col gap-5">
									<li>Magazine</li>
									<li>Podcast</li>
									<li>Authors</li>
								</ul>
								<ul className="flex flex-col gap-5">
									<li>Styleguide</li>
									<li>Licensing</li>
									<li>Changelog</li>
								</ul>
							</div>
						</div>
						<div className="mb-10 flex justify-center md:justify-start">
							<small className="text-gray-300">
								© Made by{' '}
								<a href="https://hossam-mahmoud-portfolio.vercel.app/">
									Hossam Mahmoud
								</a>
							</small>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
