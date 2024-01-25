import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions";

const MyModal = () => {
	const modal = useSelector((state) => state.modalInfo);
	const dispatch = useDispatch();
	return (
		<>
			<Modal show={modal.show} centered>
				<Modal.Header closeButton>
					<Modal.Title>{modal.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modal.body}</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => dispatch(closeModal())}>
						Close
					</Button>
					<Button
						variant="success"
						onClick={() => dispatch(closeModal())}>
						{modal.confirmText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyModal;
