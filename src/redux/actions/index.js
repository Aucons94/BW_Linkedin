import { token } from "../../token";

export const NAVBAR_INFO = "NAVBAR_INFO";
export const GET_PROFILI = "GET_PROFILI";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const CREATE_POST = "CREATE_POST";
export const GET_POST = "GET_POST";
export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";
export const SET_ERROR = "SET_ERROR";

export const setNavbarInfo = (payload) => ({
	type: NAVBAR_INFO,
	payload,
});

export const setProfili = (payload) => ({
	type: GET_PROFILI,
	payload,
});

export const setExperience = (payload) => ({
	type: GET_EXPERIENCE,
	payload,
});

export const createPost = (payload) => ({
	type: CREATE_POST,
	payload,
});

export const getPosts = (payload) => ({
	type: GET_POST,
	payload,
});

export const getPostsData = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: SET_LOADING_TRUE,
			});
			// const query = getState().music.query;
			const endpoint =
				"https://striveschool-api.herokuapp.com/api/posts/";
			const resp = await fetch(endpoint, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			});
			if (!resp.ok) {
				throw "Errore nella fetch";
			}
			const response = await resp.json();
			console.log(response);
			dispatch(getPosts(response));
			dispatch({
				type: SET_LOADING_FALSE,
			});
		} catch (error) {
			dispatch({
				type: SET_ERROR,
				payload: error,
			});
		}
	};
};
