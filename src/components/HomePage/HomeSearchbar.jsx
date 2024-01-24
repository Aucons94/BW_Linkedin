import {
	faCalendarDay,
	faImage,
	faNewspaper,
	faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions";

const HomeSearch = () => {
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
						placeholder="Avvia un post"
						onChange={(e) => dispatch(createPost(e.target.value))}
					/>
				</div>
				<div className="d-flex px-4 justify-content-between flex-wrap  gap-3">
					<div className="d-flex gap-3">
						<FontAwesomeIcon
							className="fs-2 text-primary pt-1"
							icon={faImage}
						/>
						<p className="text-secondary fs-3">
							Contenuti Multimediali
						</p>
					</div>
					<div className="d-flex gap-3">
						<FontAwesomeIcon
							className="fs-2 text-warning pt-1"
							icon={faCalendarDay}
						/>
						<p className="text-secondary fs-3">Evento</p>
					</div>
					<div className="d-flex gap-3">
						<FontAwesomeIcon
							className="fs-2 text-danger pt-1"
							icon={faNewspaper}
						/>
						<p className="text-secondary fs-3">
							Scrivi un articolo
						</p>
					</div>
				</div>
			</Card>
		</>
	);
};

export default HomeSearch;
