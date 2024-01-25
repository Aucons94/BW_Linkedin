import { token } from "../../token";

export const NAVBAR_INFO = "NAVBAR_INFO";
export const GET_PROFILI = "GET_PROFILI";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const SET_VALUE_POST = "SET_VALUE_POST";
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

export const setValuePost = (payload) => ({
	type: SET_VALUE_POST,
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

export const createPostsData = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: SET_LOADING_TRUE,
			});
			const payload = getState().postData.createValue;
			const endpoint =
				"https://striveschool-api.herokuapp.com/api/posts/";
			const resp = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
				body: JSON.stringify({
					text: payload,
				}),
			});
			if (!resp.ok) {
				throw "Errore nella fetch";
			}
			const response = await resp.json();
			console.log(response);
			// dispatch(getPosts(response));
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

export const deletePostsData = (postId) => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: SET_LOADING_TRUE,
			});
			const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
			const resp = await fetch(endpoint, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			});
			if (resp.ok) {
				console.log(resp);
				// dispatch(getPosts(response));
				dispatch({
					type: SET_LOADING_FALSE,
				});
			} else {
				throw "Errore nella fetch";
			}
		} catch (error) {
			dispatch({
				type: SET_ERROR,
				payload: error,
			});
		}
	};
};
