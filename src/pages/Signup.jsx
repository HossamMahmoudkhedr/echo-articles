import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
	return (
		<div className="container flex flex-col justify-center items-center h-[90vh]">
			<form className="flex flex-col gap-4 shadow-2xl shadow-gray-400 rounded-xl w-[80%] md:w-[50%] xl:w-[45%] px-8 py-6">
				<div>
					<h3 className="font-bold text-3xl">Sign up</h3>
					<p className="text-gray-500">Enter your data below to sign up.</p>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4 w-[100%]">
						<div className="flex flex-col gap-2 w-[50%]">
							<label htmlFor="fname">First Name</label>
							<input
								type="text"
								id="fname"
								name="fname"
								placeholder="John"
								className="input w-[100%]"
							/>
						</div>
						<div className="flex flex-col gap-2 w-[50%]">
							<label htmlFor="lname">Last Name</label>
							<input
								type="text"
								id="lname"
								name="lname"
								placeholder="Harvey"
								className="input w-[100%]"
							/>
						</div>
					</div>
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
					<div className="flex flex-col gap-2 w-[100%]">
						<label htmlFor="password">Re-write Password</label>
						<input
							type="password"
							id="repassword"
							name="repassword"
							placeholder="•••••••••"
							className="input w-[100%]"
						/>
					</div>
					<button
						type="submit"
						className="btn btn-neutral text-lg">
						Sign up
					</button>
					<hr className="text-gray-400 my-4" />
					<p className="self-center">
						Already have account?{' '}
						<Link
							to="/login"
							className="underline">
							Login
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
