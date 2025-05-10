import React, { useEffect, useRef, useState } from 'react';
import PageHead from '../components/PageHead';
import HeroImg from '../assets/images/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../utils/helper';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { article } from 'framer-motion/client';
export default function AddArticle({ currentUser }) {
	const [status, setStatus] = useState('add');
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const ImageInputRef = useRef(null);
	// const [articleImage, setArticleImage] = useState(null);
	const [imageLoading, setImageLoading] = useState(false);
	const [pageLoading, setPageLoading] = useState(false);
	const [tags, setTags] = useState([]);

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		getValues,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			image: '',
			title: '',
			description: '',
			body: '',
			tags: [],
		},
	});

	useEffect(() => {
		register('image', {
			required: 'You have to add an image descripes the article',
		});

		if (location.pathname.split('/')[1] == 'edit-article') {
			setStatus('edit');
			setPageLoading(true);
			useAuth(`/articles/${id}`)
				.then((data) => {
					const article = data.data.article;
					reset({
						image: article.image,
						title: article.title,
						description: article.description,
						body: article.body,
						tags: article.tags,
					});

					setTags(article.tags);
					setPageLoading(false);
				})
				.catch((error) => {
					setPageLoading(false);
					console.log(error);
					toast.error('Something went wrong, please try again');
				});
		} else {
			setStatus('add');
		}
	}, []);

	const handleClickImage = () => {
		ImageInputRef.current?.click();
	};

	const handleAddTag = (e) => {
		const tag = e.target.value;
		if (tag && tags.length < 5) {
			setTags((prev) => [...prev, tag]);
			e.target.value = '';
		}
	};

	const removeTag = (index) => {
		const cloneTags = [...tags];
		cloneTags.splice(index, 1);
		setTags(cloneTags);
	};

	useEffect(() => {
		setValue('tags', tags);
	}, [tags]);

	const handleUploadImage = () => {
		setImageLoading(true);

		axios
			.post(
				'https://api.cloudinary.com/v1_1/dfujoudf4/image/upload',
				{
					upload_preset: 'dfujoudf4',
					cloud_name: 'dfujoudf4',
					file: ImageInputRef.current.files[0],
				},
				{ headers: { 'Content-Type': 'multipart/form-data' } }
			)
			.then((data) => {
				// setArticleImage(data.data.secure_url);
				setValue('image', data.data.secure_url, { shouldValidate: true });
				setImageLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setImageLoading(false);
			});
	};

	const submit = async (data) => {
		console.log(data);
		console.log(status);
		if (status === 'add') {
			const lastData = {
				...data,
				user_id: currentUser._id,
				date: new Date().toUTCString(),
			};
			console.log(lastData);
			try {
				const response = await useAuth('/articles/add-article', 'post', {
					...lastData,
				});
				console.log(response);
				toast.success('Article has been published');
				reset();
			} catch (error) {
				console.log(error);
				toast.error('Something went wrong!');
			}
		} else {
			try {
				const res = await useAuth(`/articles/edit-article/${id}`, 'post', {
					...data,
				});
				console.log(res);
				toast.success('Article has been updated successfully');
				setTimeout(() => {
					navigate(`/article/${id}`);
				}, 3000);
			} catch (error) {
				console.log(error);
				toast.error('Something went wrong!');
			}
		}
	};
	return (
		<div>
			{pageLoading && (
				<div className="fixed start-0 top-0 w-[100%] h-[100%] z-[1] bg-gray-300 flex justify-center items-center opacity-[0.5]">
					<span className="loading loading-spinner loading-lg"></span>
				</div>
			)}
			{/* <ToastContainer /> */}
			<div className="container">
				<div className="my-10">
					<PageHead text={'Add Article'} />
				</div>
				<form className="w-[100%] sm:w-[80%] lg:w-[60%] m-auto flex flex-col justify-center gap-10">
					<div
						className="h-[300px] cursor-pointer relative"
						onClick={handleClickImage}>
						{imageLoading && (
							<div className="absolute start-0 top-0 w-[100%] h-[100%] z-[1] bg-gray-300 flex justify-center items-center opacity-[0.5]">
								<span className="loading loading-spinner loading-lg"></span>
							</div>
						)}
						<img
							src={
								getValues().image ||
								'https://placehold.co/1280x720?text=Add+Image'
							}
							alt=""
						/>
					</div>
					{errors.image && (
						<sapn className="text-sm text-error">{errors.image?.message}</sapn>
					)}
					<input
						ref={ImageInputRef}
						type="file"
						name="image"
						onChange={handleUploadImage}
						id="image"
						hidden
					/>
					<input
						name="title"
						id="title"
						{...register('title', {
							required: 'You have to add a title to the article',
						})}
						type="text"
						placeholder="Add Title"
						className="outline-none border-none p-3  text-7xl placeholder:text-gray-300"
					/>
					{errors.title && (
						<sapn className="text-sm text-error">{errors.title?.message}</sapn>
					)}
					<textarea
						className="outline-none text-2xl min-h-[100px] max-h-[200px] placeholder:text-gray-300"
						name="description"
						{...register('description', {
							required: 'You have to add a brief about the article',
						})}
						placeholder="Add a breif about the article"
						id="description"></textarea>
					{errors.description && (
						<sapn className="text-sm text-error">
							{errors.description?.message}
						</sapn>
					)}
					<hr className="" />
					<textarea
						{...register('body', {
							required: 'You need to add the body of your article',
						})}
						className="outline-none text-lg placeholder:text-gray-300 placeholder:text-3xl min-h-[100px] max-h-[400px]"
						name="body"
						placeholder="Body"
						id="body"></textarea>
					{errors.body && (
						<sapn className="text-sm text-error">{errors.body?.message}</sapn>
					)}
					<div>
						<div className="flex gap-3 items-center flex-wrap">
							{tags.length > 0 && (
								<div className="flex gap-3 items-center flex-wrap ">
									{tags.map((tag, index) => (
										<div
											key={tag}
											className="badge badge-neutral badge-outline flex gap-3 py-3 items-center">
											<p>{tag}</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												onClick={() => {
													removeTag(index);
												}}
												className="size-5 cursor-pointer">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
												/>
											</svg>
										</div>
									))}
								</div>
							)}
							<input
								type="text"
								name="tags"
								id="tags"
								disabled={tags.length === 5}
								className="flex-1 disabled:placeholder:text-gray-300"
								onBlur={handleAddTag}
								onKeyDown={(e) => {
									if (e.key == 'Enter') handleAddTag(e);
								}}
								placeholder="Add tags"
							/>
						</div>
						<small className="text-gray-400">You can add up to 5 tags</small>
					</div>
					<button
						type="button"
						onClick={handleSubmit(submit)}
						disabled={isSubmitting || imageLoading}
						className="btn btn-lg bg-black text-white self-end">
						{isSubmitting ? (
							<span className="loading loading-spinner loading-lg"></span>
						) : status === 'add' ? (
							'Publish'
						) : (
							'Edit'
						)}
					</button>
				</form>
			</div>
		</div>
	);
}
