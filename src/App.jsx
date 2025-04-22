import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import AllArticles from './pages/AllArticles';
import AddArticle from './pages/AddArticle';
import ArticleDetails from './pages/ArticleDetails';
import Authors from './pages/Authors';
import AboutUs from './pages/AboutUs';

import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
	const location = useLocation();
	const hideFooterFrom = ['/login', '/sign-up'];
	const hide = hideFooterFrom.includes(location.pathname);

	return (
		<>
			<Navbar />
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
					element={<AddArticle />}
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
					element={<Profile />}
				/>
			</Routes>
			{hide || <Footer />}
		</>
	);
}

export default App;
