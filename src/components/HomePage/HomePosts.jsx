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
			<Card className="mt-4 p-5">
				{
					posts.map((post) => {
						<p>{post.text}</p>;
					})
					/* <div className="d-flex p-4 gap-3">
					<img
						src={
							profile.image
								? profile.image
								: "https://m.media-amazon.com/images/I/51zf0DXxT-L._AC_UF1000,1000_QL80_.jpg"
						}
						alt="profilo"
						style={{
							width: "70px",
							height: "70px",
							borderRadius: "50%",
						}}
					/>
					<Form.Control
						type="text"
						placeholder="Avvia un post"
						onChange={(e) => dispatch(createPost(e.target.value))}
					/>
				</div> */
				}
			</Card>
		</>
	);
};

export default HomePosts;
