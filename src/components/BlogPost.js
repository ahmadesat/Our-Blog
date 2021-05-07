import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

function BlogPost() {
	// Used for redirection
	const history = useHistory();

	// useParams() returns the params used in the Route
	const { id } = useParams();
	const url = "http://localhost:5000/blogs/" + id;
	const { data: blogPost } = useFetch(url);

	// Waiting for deletion
	const [deleting, setDeleting] = useState(false);

	// Function to delete a blog from the JSON-Server
	function deleteBlog() {
		setDeleting(true);
		fetch(url, {
			method: "DELETE",
		}).then(() => {
			setDeleting(false);
			history.push("/");
		});
	}
	return (
		<div className="BlogPost container">
			{!blogPost && <h3>Loading...</h3>}
			{blogPost && (
				<article>
					<h2 className="mt-3">{blogPost.title}</h2>
					<div className="container mt-4">
						<p>{blogPost.body}</p>
						<em>- {blogPost.author}</em>
					</div>

					{!deleting && (
						<button
							className="btn btn-outline-danger my-5"
							onClick={deleteBlog}
						>
							Delete
						</button>
					)}
					{deleting && (
						<button className="btn btn-outline-danger my-5" disabled>
							Deleting...
						</button>
					)}
				</article>
			)}
		</div>
	);
}

export default BlogPost;
