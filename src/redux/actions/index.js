export const NAVBAR_INFO = "NAVBAR_INFO";
export const GET_PROFILI = "GET_PROFILI";
export const GET_EXPERIENCE = "GET_EXPERIENCE";

export const setNavbarInfo = (payload) => ({
	type: "NAVBAR_INFO",
	payload,
});

export const setProfili = (payload) => ({
	type: "GET_PROFILI",
	payload,
});

export const setExperience = (payload) => ({
	type: "GET_EXPERIENCE",
	payload,
});
