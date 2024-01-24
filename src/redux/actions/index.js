export const NAVBAR_INFO = "NAVBAR_INFO";
export const GET_PROFILI = "GET_PROFILI";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const CREATE_POST = "CREATE_POST";
export const GET_POST = "GET_POST";

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
