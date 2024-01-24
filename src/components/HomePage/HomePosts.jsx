import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../token";
import { useEffect } from "react";
import { getPosts, getPostsData } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComment,
	faEllipsis,
	faPaperPlane,
	faRetweet,
	faThumbsUp,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "../profilePage/utility/ButtonLink";

const HomePosts = () => {
	const posts = useSelector((state) => state.postData.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostsData());
	}, []);

	const sortedPosts = [...posts].sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	function timeAgo(dateString) {
		const currentDate = new Date();
		const pastDate = new Date(dateString);

		const timeDifference = currentDate - pastDate;
		const minutes = Math.floor(timeDifference / (1000 * 60));

		if (minutes < 1) {
			return "Ora";
		} else if (minutes === 1) {
			return "1 minuto fa";
		} else if (minutes < 60) {
			return `${minutes} minuti fa`;
		} else if (minutes < 60 * 24) {
			const hours = Math.floor(minutes / 60);
			return `${hours} ${hours === 1 ? "ora" : "ore"} fa`;
		} else {
			const days = Math.floor(minutes / (60 * 24));
			return `${days} ${days === 1 ? "giorno" : "giorni"} fa`;
		}
	}

	return (
		<>
			{sortedPosts.map((post) => {
				return (
					<Card key={post._id} className="my-2 p-3 gap-3">
						<div className="d-flex">
							<img
								src={
									post.user.image
										? post.user.image
										: "https://m.media-amazon.com/images/I/51zf0DXxT-L._AC_UF1000,1000_QL80_.jpg"
								}
								alt="profilo"
								style={{
									width: "70px",
									height: "70px",
									borderRadius: "50%",
								}}
							/>
							<div className="ms-3">
								<h5 className="m-0">
									{post.user.name} {post.user.surname}
								</h5>
								<p className="m-0">{post.user.title}</p>
								<p>{timeAgo(post.createdAt)}</p>
							</div>
							<div className="ms-auto fs-4 text-secondary">
								<FontAwesomeIcon
									className="me-3"
									icon={faEllipsis}
								/>
								<FontAwesomeIcon icon={faXmark} />
							</div>
						</div>
						<p className="">{post.text}</p>
						<hr />
						<div className="d-flex justify-content-around">
							<ButtonLink className={"text-secondary"}>
								<FontAwesomeIcon icon={faThumbsUp} />
								<span className="ms-2">Consiglia</span>
							</ButtonLink>
							<ButtonLink className={"text-secondary"}>
								<FontAwesomeIcon icon={faComment} />
								<span className="ms-2">Commenta</span>
							</ButtonLink>
							<ButtonLink className={"text-secondary"}>
								<FontAwesomeIcon icon={faRetweet} />
								<span className="ms-2">Diffondi il post</span>
							</ButtonLink>
							<ButtonLink className={"text-secondary"}>
								<FontAwesomeIcon icon={faPaperPlane} />
								<span className="ms-2">Invia</span>
							</ButtonLink>
						</div>
					</Card>
				);
			})}
		</>
	);
};

export default HomePosts;
