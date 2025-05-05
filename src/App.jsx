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

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const location = useLocation();
	const hideFooterFrom = ['/login', '/sign-up'];
	const hide = hideFooterFrom.includes(location.pathname);

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
	return (
		<>
			<ToastContainer />
			<Navbar
				currentUser={currentUser}
				logOut={logOut}
			/>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/articles"
					element={<AllArticles />}
				/>
				<Route
					path="/add-article"
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
