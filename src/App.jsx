import {
	Link,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import AllArticles from './pages/AllArticles';
import AddArticle from './pages/AddArticle';
import ArticleDetails from './pages/ArticleDetails';
import Authors from './pages/Authors';
import Cookies from 'js-cookie';

import Profile from './pages/Profile';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../utils/helper';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const location = useLocation();
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
	const [articleId, setArticleID] = useState();
	const hideFooterFrom = ['/login', '/sign-up'];
	const navigate = useNavigate();
	const hide = hideFooterFrom.includes(location.pathname);
	const showAddArticle = ['/', '/articles', '/authors'].includes(
		location.pathname
	);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		const loggedIn = Cookies.get('loggedIn');
		if (loggedIn) {
			setCurrentUser(JSON.parse(localStorage.getItem('user')));
		} else {
			localStorage.removeItem('user');
			setCurrentUser(null);
		}
	}, []);
	const logOut = async () => {
		if (localStorage.getItem('user')) {
			try {
				const res = await useAuth('/authors/logout');
				console.log(res);
				localStorage.removeItem('user');
				toast.warning('You have been Logged out!');
				setTimeout(() => {
					window.location.href = '/';
				}, 3000);
			} catch (error) {
				toast.warning('Something went wrong, please try again');
				console.log(error);
			}
		}
	};
	const showWindow = (id) => {
		setArticleID(id);
		setShow(true);
	};
	const removeArticle = async () => {
		try {
			setLoading(true);
			const res = await useAuth(`/articles/delete-article/${articleId}`);
			console.log(res);
			setShow(false);
			setLoading(false);
			setRefresh((prev) => prev + 1);
			toast.success('Article has been deleted successfully');
			if (location.pathname.split('/')[1] === 'article') {
				navigate('/articles');
			}
		} catch (error) {
			setLoading(false);
			setShow(false);
			console.log(error);
		}
	};
	return (
		<>
			<ToastContainer />
			{show && (
				<div className="fixed flex justify-center items-center w-[100%] h-[100%] top-0 end-0 bg-[#00000085] z-[9]">
					<div className="flex flex-col items-center text-center gap-6 bg-white z-[2] px-7 py-5 rounded-2xl">
						{!loading && (
							<>
								<p className="text-xl text-black">
									Are you sure you want to delete the article?
								</p>
								<div className="flex items-center gap-4">
									<button
										onClick={removeArticle}
										className="btn bg-red-600 text-white">
										Yes
									</button>
									<button
										className="btn  bg-white"
										onClick={() => {
											setShow(false);
										}}>
										No
									</button>
								</div>
							</>
						)}
						{loading && (
							<span className="loading loading-spinner loading-lg"></span>
						)}
					</div>
				</div>
			)}

			<Navbar
				currentUser={currentUser}
				logOut={logOut}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							currentUser={currentUser}
							showWindow={showWindow}
							refresh={refresh}
						/>
					}
				/>
				<Route
					path="/articles"
					element={
						<AllArticles
							currentUser={currentUser}
							showWindow={showWindow}
							refresh={refresh}
						/>
					}
				/>
				<Route
					path="/add-article"
					element={<AddArticle currentUser={currentUser} />}
				/>
				<Route
					path="/edit-article/:id"
					element={<AddArticle currentUser={currentUser} />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/sign-up"
					element={<Signup />}
				/>
				<Route
					path="/article/:id"
					element={
						<ArticleDetails
							showWindow={showWindow}
							currentUser={currentUser}
						/>
					}
				/>
				<Route
					path="/authors"
					element={<Authors />}
				/>
				<Route
					path="/profile/:id"
					element={<Profile currentUser={currentUser} />}
				/>
			</Routes>
			{hide || <Footer />}
			{showAddArticle && currentUser && (
				<div
					className="tooltip fixed bottom-20 end-20 z-1"
					data-tip="Write new article">
					<Link
						to={'add-article'}
						className="btn btn-circle bg-black text-white border-none btn-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-9">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</Link>
				</div>
			)}
		</>
	);
}

export default App;
