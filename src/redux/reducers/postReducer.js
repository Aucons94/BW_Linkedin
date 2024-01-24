import { CREATE_POST, GET_POST } from "../actions";

const InitialState = {
	create: "",
	posts: [],
};

export const postReducer = (state = InitialState, action) => {
	switch (action.type) {
		case CREATE_POST:
			return {
				...state,
				create: action.payload,
			};
		case GET_POST:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};
