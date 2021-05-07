import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import BlogPost from "./components/BlogPost";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
	// Returning the root App page
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/new">
							<NewBlog />
						</Route>
						{/* To send url paramters, use ":paramName" */}
						<Route path="/blogs/:id">
							<BlogPost />
						</Route>
						{/* Any other route that isn't one of the above, take it to 404 */}
						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
