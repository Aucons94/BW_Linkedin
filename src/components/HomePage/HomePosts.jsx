import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../token";
import { useEffect } from "react";
import { getPosts } from "../../redux/actions";

const HomePosts = () => {
	const posts = useSelector((state) => state.postData.posts);
	const dispatch = useDispatch();

	const fetchPosts = async () => {
		const endpoint = "https://striveschool-api.herokuapp.com/api/posts/";
		try {
			let response = await fetch(endpoint, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			});
			let data = await response.json();
			console.log(data);
			dispatch(getPosts(data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
		console.log(posts);
	}, []);
	return (
		<>
			{posts.map((post) => {
				return (
					<Card className="my-2 p-5">
						<h3>
							{post.user.name} {post.user.surname}
						</h3>
						<p className="text-primary">{post.text}</p>
					</Card>
				);
			})}
		</>
	);
};

export default HomePosts;
