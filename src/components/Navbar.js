import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-light fs-4">
			<div className="container p-4 border-bottom">
				<Link className="navbar-brand fs-1" to="/">
					Our Blogs
				</Link>
				<ul className="navbar-nav text-right ">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link new-blog"
							to="/new"
							style={{
								color: "white",
								backgroundColor: "#ff4f3c",
								borderRadius: 30,
							}}
						>
							New Blog
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
