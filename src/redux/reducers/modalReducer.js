import {
	ADD_ACTION_TO_MODAL,
	CLOSE_MODAL,
	FUNCTION_MODAL,
	SHOW_MODAL,
	TEXT_MODAL,
} from "../actions";

const InitialState = {
	show: false,
	title: "",
	body: "",
	confirmText: "Conferma",
	action: {},
};

export const modalReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				...state,
				show: true,
			};
		case CLOSE_MODAL:
			return {
				...state,
				show: false,
				title: "",
				body: "",
			};
		case TEXT_MODAL:
			return {
				...state,
				body: action.payload,
			};
		case ADD_ACTION_TO_MODAL:
			return {
				...state,
				action: action.payload,
			};
		default:
			return state;
	}
};
