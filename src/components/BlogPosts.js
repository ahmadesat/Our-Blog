import { Link } from "react-router-dom";

const BlogPosts = (props) => {
	// Initializing the props for BlogPosts
	const blogs = props.blogs.sort(function (a, b) {
		return b.id - a.id;
	});

	// Returning the blog posts one at a time
	return (
		<div className="blog-posts">
			{blogs.map((blogPost) => (
				<div className="blog-post" key={blogPost.id}>
					<Link to={"/blogs/" + blogPost.id}>
						<h4>{blogPost.title}</h4>
						<p>{blogPost.body}</p>
					</Link>
					<em>Written By: {blogPost.author}</em>
				</div>
			))}
		</div>
	);
};

export default BlogPosts;
