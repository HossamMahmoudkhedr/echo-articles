import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchData } from '../../utils/helper';
import { toast, ToastContainer } from 'react-toastify';

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showRePassword, setReShowPassword] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();
	useFetch();
	const submit = async (data) => {
		delete data.repassword;
		try {
			const res = await fetchData('/authors/signup', 'post', data);
			console.log(res);
			toast.success(
				'You have been signed in, you will be redirected to login page'
			);
			setTimeout(() => {
				navigate('/login');
			}, 3000);
		} catch (error) {
			toast.error(error.response.data || 'Something went wrong!');
			console.log(error);
		}
	};

	const toggleShowPassword = () => setShowPassword(!showPassword);
	const toggleReShowPassword = () => setReShowPassword(!showRePassword);

	const password = watch('password');
	return (
		<div className="container flex flex-col justify-center items-center h-[95vh]">
			<ToastContainer />
			<form
				onSubmit={handleSubmit(submit)}
				className="flex flex-col gap-4 shadow-2xl shadow-gray-400 rounded-xl w-[80%] md:w-[50%] xl:w-[45%] px-8 py-6">
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
								{...register('fname', {
									required: 'First name is required',
									minLength: {
										value: 3,
										message: 'First name must be at least 3 characters',
									},
								})}
								placeholder="John"
								className="input w-[100%]"
							/>
							{errors.fname && (
								<span className="text-error text-sm">
									{errors.fname?.message}
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2 w-[50%]">
							<label htmlFor="lname">Last Name</label>
							<input
								type="text"
								id="lname"
								name="lname"
								{...register('lname', {
									required: 'Last name is required',
									minLength: {
										value: 3,
										message: 'Last name must be at least 3 characters',
									},
								})}
								placeholder="Harvey"
								className="input w-[100%]"
							/>
							<span className="text-error text-sm">
								{errors.lname?.message}
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2 w-[100%]">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Invalid email address',
								},
							})}
							placeholder="youremail@example.com"
							className="input w-[100%]"
						/>
						<span className="text-error text-sm">{errors.email?.message}</span>
					</div>
					<div className="flex flex-col gap-2 w-[100%]">
						<label htmlFor="password">Password</label>
						<div
							className="input w-[100%]"
							style={{ outline: 'none' }}>
							<input
								type={showPassword ? 'text' : 'password'}
								id="password"
								name="password"
								{...register('password', {
									required: 'Password is required',
									pattern: {
										value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
										message:
											'Password must be at least 8 characters and include a letter and a number',
									},
								})}
								placeholder="•••••••••"
								className="p-0"
							/>
							<button
								onClick={toggleShowPassword}
								className="cursor-pointer"
								type="button">
								{showPassword ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="#969696"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="#969696"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								)}
							</button>
						</div>
						<span className="text-error text-sm">
							{errors.password?.message}
						</span>
					</div>
					<div className="flex flex-col gap-2 w-[100%]">
						<label htmlFor="password">Re-write Password</label>
						<div
							className="input w-[100%]"
							style={{ outline: 'none' }}>
							<input
								type={showRePassword ? 'text' : 'password'}
								id="repassword"
								name="repassword"
								{...register('repassword', {
									required: 'You have to re-write your password',
									validate: (value) =>
										value === password || "Passwords don't match",
								})}
								placeholder="•••••••••"
								className="p-0"
							/>
							<button
								onClick={toggleReShowPassword}
								className="cursor-pointer"
								type="button">
								{showRePassword ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="#969696"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="#969696"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								)}
							</button>
						</div>
						<span className="text-error text-sm">
							{errors.repassword?.message}
						</span>
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="btn btn-neutral text-lg">
						{isSubmitting ? (
							<span className="loading loading-spinner loading-lg"></span>
						) : (
							'Sign up'
						)}
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
