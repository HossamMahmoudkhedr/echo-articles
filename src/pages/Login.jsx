import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<div className="container flex flex-col justify-center items-center h-[80vh]">
			<form className="flex flex-col gap-4 shadow-2xl shadow-gray-400 rounded-xl w-[80%] md:w-[35%] px-8 py-6">
				<div>
					<h3 className="font-bold text-3xl">Login</h3>
					<p className="text-gray-500">Enter your data below to login.</p>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2 w-[100%]">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="youremail@example.com"
							className="input w-[100%]"
						/>
					</div>
					<div className="flex flex-col gap-2 w-[100%]">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="•••••••••"
							className="input w-[100%]"
						/>
					</div>
					<button
						type="submit"
						className="btn btn-neutral text-lg">
						Login
					</button>
					<hr className="text-gray-400 my-4" />
					<p className="self-center">
						Don't have account?{' '}
						<Link
							to="/sign-up"
							className="underline">
							Sign up
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
