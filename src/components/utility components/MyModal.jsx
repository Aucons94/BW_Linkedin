import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, deletePostsData } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MyModal = ({ func }) => {
	const modal = useSelector((state) => state.modalInfo);
	const dispatch = useDispatch();
	return (
		<>
			<Modal show={modal.show} centered>
				<Modal.Header>
					<Modal.Title>{modal.title}</Modal.Title>
					<Button
						variant="link"
						onClick={() => dispatch(closeModal())}>
						<FontAwesomeIcon
							className="text-secondary"
							icon={faXmark}
						/>
					</Button>
				</Modal.Header>
				<Modal.Body>{modal.body}</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => dispatch(closeModal())}>
						Close
					</Button>
					<Button variant="success" onClick={() => {}}>
						{modal.confirmText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyModal;
