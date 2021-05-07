import useFetch from "../useFetch";
import BlogPosts from "./BlogPosts";

function Home() {
	const url = "http://localhost:5000/blogs";
	const { data: blogs, setData: setBlogs } = useFetch(url);

	// Returning the homepage
	return (
		<div className="home">
			{!blogs && <h3>Loading...</h3>}
			{blogs && <BlogPosts blogs={blogs} setBlogs={setBlogs} />}
		</div>
	);
}

export default Home;
