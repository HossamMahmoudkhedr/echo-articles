import React from 'react';

export default function PageHead({ text }) {
	const goBack = () => {
		history.back();
	};
	return (
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
				<h2 className="sub-header uppercase">{text}</h2>
			</div>
		</div>
	);
}
