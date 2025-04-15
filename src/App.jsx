import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import AllArticles from './pages/AllArticles';
import AddArticle from './pages/AddArticle';
import ArticleDetails from './pages/ArticleDetails';
import Authors from './pages/Authors';
import AboutUs from './pages/AboutUs';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/all-articles"
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
					path="/article-details"
					element={<ArticleDetails />}
				/>
				<Route
					path="/authors"
					element={<Authors />}
				/>
				<Route
					path="/about-us"
					element={<AboutUs />}
				/>
			</Routes>
		</>
	);
}

export default App;
