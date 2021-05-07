import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<div className="PageNotFound">
			<h1>404 - Page Not Found</h1>
			<Link to="/">Back to homepage...</Link>
		</div>
	);
}

export default PageNotFound;
