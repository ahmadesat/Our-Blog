import { useEffect, useState } from "react";

function useFetch(url) {
	// Initiliazing the list of blog posts
	const [data, setData] = useState(null);

	// Fetching the JSON data for the blogs from the json-server
	useEffect(() => {
		// Intializing an Abort value to stop the fetching when we change routes
		const abortController = new AbortController();
		fetch(url, { signal: abortController.signal })
			.then((response) => {
				if (!response.ok) {
					// If the response is not OK, we will throw an Error which will be caught
					// by the Catch method
					throw Error("Something went wrong... ");
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("Something went wrong while fetching... " + err);
				} else {
					console.log("Something went wrong... " + err);
				}
			});
	}, [url]);

	return { data, setData };
}

export default useFetch;
