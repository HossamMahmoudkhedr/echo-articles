import { Route, Routes, useLocation } from 'react-router-dom';
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
	const hide = hideFooterFrom.includes(location.pathname);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		setCurrentUser(JSON.parse(localStorage.getItem('user')));
	}, []);
	const logOut = () => {
		if (localStorage.getItem('user')) {
			localStorage.removeItem('user');
			Cookies.remove('token');
			toast.warning('You have been Logged out!');
			setTimeout(() => {
				window.location.href = '/';
			}, 3000);
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
				<div className="fixed flex justify-center items-center w-[100%] h-[100%] top-0 end-0 bg-[#00000085] z-[1]">
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
							showWindow={showWindow}
							refresh={refresh}
						/>
					}
				/>
				<Route
					path="/articles"
					element={<AllArticles showWindow={showWindow} />}
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
					element={<ArticleDetails />}
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
		</>
	);
}

export default App;
