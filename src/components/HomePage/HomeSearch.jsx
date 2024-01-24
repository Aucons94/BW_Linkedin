import {
	faCalendarDay,
	faImage,
	faNewspaper,
	faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostsData, setValuePost } from "../../redux/actions";
import ButtonLink from "../profilePage/utility/ButtonLink";

const HomeCreatePost = () => {
	const profile = useSelector((state) => state.profilo.info);
	const dispatch = useDispatch();
	return (
		<>
			<Card className="mt-4">
				<div className="d-flex p-4 gap-3">
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
						id="HomeSearch"
						placeholder="Avvia un post"
						onChange={(e) => dispatch(setValuePost(e.target.value))}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								dispatch(createPostsData());
							}
						}}
					/>
				</div>
				<div className="d-flex px-4 flex-wrap justify-content-between">
					<ButtonLink className="d-flex gap-3">
						<FontAwesomeIcon
							className="fs-3 text-primary pt-1"
							icon={faImage}
						/>
						<p className="text-secondary fs-5">
							Contenuti Multimediali
						</p>
					</ButtonLink>
					<ButtonLink className="d-flex gap-3">
						<FontAwesomeIcon
							className="fs-3 text-warning pt-1"
							icon={faCalendarDay}
						/>
						<p className="text-secondary fs-5">Evento</p>
					</ButtonLink>
					<ButtonLink className="d-flex gap-3">
						<FontAwesomeIcon
							className="fs-3 text-danger pt-1"
							icon={faNewspaper}
						/>
						<p className="text-secondary fs-5">
							Scrivi un articolo
						</p>
					</ButtonLink>
				</div>
			</Card>
		</>
	);
};

export default HomeCreatePost;
