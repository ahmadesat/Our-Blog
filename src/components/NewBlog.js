import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewBlog() {
	// Used for redirection
	const history = useHistory();

	// Initialization of set values
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Axe");

	// Waiting for submission value
	const [adding, setAdding] = useState(false);

	function addBlog(submitEvent) {
		// To stop the page from refreshing
		submitEvent.preventDefault();

		// JSON-Server will automatically add an "id" attribute while POSTing
		const blog = { title, body, author };
		setAdding(true);

		fetch("http://localhost:5000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setAdding(false);
			history.push("/");
		});
	}

	return (
		<div className="NewBlog">
			<h1 className="display-5 m-5 text-center">Add a New Blog post</h1>
			<form className="w-50  m-auto" onSubmit={(e) => addBlog(e)}>
				<label className="form-label">Title:</label>
				<input
					className="form-control mb-3"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>

				<label className="form-label">Body:</label>
				<textarea
					className="form-control mb-3"
					value={body}
					onChange={(e) => setBody(e.target.value)}
					required
				></textarea>

				<label className="form-label">Author:</label>
				<select
					className="form-select  mb-3"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					required
				>
					<option value="Axe">Axe</option>
					<option value="Lorence">Laurel</option>
					<option value="Noman">Noman</option>
				</select>

				<div className="container text-center">
					{!adding && (
						<button type="submit" className="btn btn-primary rounded-3">
							Add Blog
						</button>
					)}
					{adding && (
						<button disabled className="btn btn-primary rounded-3">
							Adding...
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default NewBlog;
